'use client'
import ApplicantTitle from "./ApplicantTitle";
import ApplicantFilter from "./ApplicantFilter";
import ApplicantCountDisplay from "./ApplicantCountDisplay";

const ApplicantListHeader: React.FC = () => (
  <section className="bg-[#f7fafd] py-10 pb-6 min-h-[180px]">
    <div className="ml-12">
      <ApplicantTitle />
      <ApplicantFilter />
      <ApplicantCountDisplay />
    </div>
  </section>
);

export default ApplicantListHeader;