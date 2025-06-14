import Header from "../components/layout/Header";
import ApplicantListHeader from "../components/ApplicantListHeader/ApplicantListHeader";
import ApplicantTable from "../components/ApplicantTable/ApplicantTable";

export default function Page() {
  return (
    <>
      <Header />
      <ApplicantListHeader />
      <ApplicantTable />
    </>
  );
}