'use client'
import ApplicantTitle from "./ApplicantTitle";
import ApplicantFilter from "./ApplicantFilter";
import ApplicantCountDisplay from "./ApplicantCountDisplay";
import ApplicantPagination from "./ApplicantPagination";

const ApplicantListHeader: React.FC = () => (
  <section className="bg-[#f7fafd] py-10 pb-6 min-h-[180px]">
    <div className="flex items-end justify-between ml-12 mr-12">
      <div>
        <ApplicantTitle />
        <ApplicantFilter />
        <ApplicantCountDisplay />
      </div>
      <ApplicantPagination />
    </div>
  </section>
);

export default ApplicantListHeader;