"use client";

import WorkforceBanner from "../component/WorkforceBanner";
import FAQSection from "../component/FAQSection";
import ExcellenceSection from "../component/ExcellenceSection";
import DegreeSection from "../component/DegreeSection";
import Header from "../component/Header";
import HeroSection from "../component/HeroSection";
import CourseSection from "../component/CourseSection";
import CareerFormula from "../component/CareerFormula";
import CourseFeesTable from "../component/CourseFeesTable";
import CertificationBanner from "../component/CertificationBanner";
// import FloatingButton from '../component/FloatingButton';
import CounsellingModal from "../component/CounsellingModal";
import Footer from "../component/Footer";
import { useState } from "react";


export default function DPULandingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  // Pass open/close handlers to children
  return (
    <div>
      {/* Header */}
      <Header onOpenModal={() => setModalOpen(true)} />
      {/* Counselling Modal */}
      <CounsellingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      {/* Hero Section (inject open handler) */}
      <main className="">
        <HeroSection onOpenModal={() => setModalOpen(true)} />
        <CourseSection onOpenModal={() => setModalOpen(true)} />
        <CareerFormula onOpenModal={() => setModalOpen(true)} />
        <CourseFeesTable onOpenModal={() => setModalOpen(true)} />
        <CertificationBanner onOpenModal={() => setModalOpen(true)} />
        <DegreeSection />
        <ExcellenceSection  />
        <FAQSection />
        <WorkforceBanner onOpenModal={() => setModalOpen(true)} />
      </main>
      <Footer onOpenModal={() => setModalOpen(true)} />
      {/* <FloatingButton /> */}
    </div>
  );
}
