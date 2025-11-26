import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { zoomIn, fadeIn } from "../../services/variants";
import { fetchCertificates } from "../../services/certificateService";
import { styled } from "@stitches/react";
import LeftArrow from "../../assets/img/icons/arrow1.svg";
import RightArrow from "../../assets/img/icons/arrow2.svg";

// ---------------- Custom Arrow Component ----------------
const CustomArrow = ({ direction, onClick, imgSrc, label, disabled }) => {
    return (
        <button
            className={`custom-arrow custom-${direction}-arrow`}
            onClick={onClick}
            aria-label={label}
            disabled={disabled}
            style={{ opacity: disabled ? 0.5 : 1, cursor: disabled ? "default" : "pointer" }}
        >
            <img src={imgSrc} alt={`${label} Arrow`} />
        </button>
    );
};

const CertificatesTabPage = ({ isBatterySavingOn }) => {
    const [certificates, setCertificates] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        const loadCertificates = async () => {
            const data = await fetchCertificates();
            setCertificates(data);
        };
        loadCertificates();
    }, []);

    const totalPages = Math.ceil(certificates.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const currentCertificates = certificates.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <motion.div
                className="certificates-tab-page"
                variants={isBatterySavingOn ? {} : zoomIn(0)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
                viewport={{ once: true }}
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "2rem",
                    padding: "2rem",
                    width: "100%",
                    maxWidth: "1140px",
                    margin: "0 auto"
                }}
            >
                <AnimatePresence mode="wait">
                    {currentCertificates.map((cert, index) => (
                        <motion.div
                            key={`${currentPage}-${index}`}
                            className="certificate-card"
                            variants={isBatterySavingOn ? {} : fadeIn("up", 300, index * 0.1)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            whileHover={{ scale: 1.03 }}
                            style={{
                                background: "rgba(255, 255, 255, 0.05)",
                                backdropFilter: "blur(10px)",
                                borderRadius: "15px",
                                padding: "1.5rem",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            }}
                        >

                            <h3
                                style={{
                                    color: "#edeeef",
                                    fontSize: "1.2rem",
                                    marginBottom: "0.5rem",
                                    fontWeight: "600",
                                }}
                            >
                                {cert.title}
                            </h3>
                            <p
                                style={{
                                    color: "#a0a0a0",
                                    fontSize: "0.9rem",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                {cert.type}
                            </p>
                            <div
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    marginBottom: "1.5rem",
                                    borderRadius: "10px",
                                    overflow: "hidden",
                                    background: "#fff",
                                }}
                            >
                                <iframe
                                    src={`${cert.pdfUrl}#toolbar=0&view=Fit`}
                                    title={cert.title}
                                    width="100%"
                                    height="100%"
                                    style={{ border: "none" }}
                                >
                                    <p>Preview not available</p>
                                </iframe>
                            </div>
                            <a
                                href={cert.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", width: "100%" }}
                            >
                                <StyledButton>
                                    <ButtonShadow />
                                    <ButtonEdge />
                                    <ButtonLabel>View Full Certificate</ButtonLabel>
                                </StyledButton>
                            </a>
                        </motion.div >
                    ))}
                </AnimatePresence>
            </motion.div >

            {/* Pagination Controls */}
            <div className="certificates-pagination">
                <CustomArrow
                    direction="left"
                    onClick={prevPage}
                    imgSrc={LeftArrow}
                    label="Previous Page"
                    disabled={currentPage === 0}
                />
                <span style={{ color: "#edeeef", fontWeight: "bold" }}>
                    Page {currentPage + 1} of {totalPages}
                </span>
                <CustomArrow
                    direction="right"
                    onClick={nextPage}
                    imgSrc={RightArrow}
                    label="Next Page"
                    disabled={currentPage === totalPages - 1}
                />
            </div>
        </div>
    );
};

export default CertificatesTabPage;

// Styled Components for Button
const ButtonPart = styled("span", {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 8,
});

const ButtonShadow = styled(ButtonPart, {
    background: "hsl(0deg 0% 0% / 0.1)",
    transform: "translateY(2px)",
    transition: "transform 250ms ease-out",
});

const ButtonEdge = styled(ButtonPart, {
    background: `linear-gradient(
        to left,
        hsl(0deg 0% 69%) 0%,
        hsl(0deg 0% 85%) 8%,
        hsl(0deg 0% 85%) 92%,
        hsl(0deg 0% 69%) 100%
      )`,
});

const ButtonLabel = styled("span", {
    fontFamily: "Montserrat",
    fontSize: "14px",
    display: "block",
    position: "relative",
    borderRadius: 5,
    color: "#212529",
    padding: "0.8rem 1.5rem",
    background: "#f8f9fa",
    transform: "translateY(-4px)",
    width: "100%",
    userSelect: "none",
    transition:
        "transform 250ms ease-out, background-color 0.3s ease, color 0.3s ease",
    "&:hover": {
        backgroundColor: "#fcbc1d",
        color: "#212529",
        transform: "scale(1.05)",
    },
});

const StyledButton = styled("button", {
    border: "none",
    fontWeight: 600,
    width: "100%",
    cursor: "pointer",
    background: "transparent",
    position: "relative",
    padding: 0,
    transition: "filter 250ms ease-out",
    "&:hover": {
        filter: "brightness(110%)",
        [`& ${ButtonLabel}`]: { transform: "translateY(-6px)" },
        [`& ${ButtonShadow}`]: { transform: "translateY(4px)" },
    },
    "&:active": {
        [`& ${ButtonLabel}`]: {
            transform: "translateY(-2px)",
            transition: "transform 34ms",
        },
        [`& ${ButtonShadow}`]: {
            transform: "translateY(1px)",
            transition: "transform 34ms",
        },
    },
});
