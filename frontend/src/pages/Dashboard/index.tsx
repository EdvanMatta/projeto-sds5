import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";
import NavBar from "components/NavBar";
import DataTable from "components/DataTable";
import Footer from "components/Footer";

const Dashboard = () => {
    return (
        <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso %</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Total de Vendas</h5>
            <DonutChart />
          </div>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
    );
}

export default Dashboard;