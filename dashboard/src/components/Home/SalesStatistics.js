import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Sale statistics</h5>
          <iframe
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
              width: "100%",
              height: "350px",
            }}
            src="https://charts.mongodb.com/charts-shoeshop-example-lxgdm/embed/charts?id=6284b5bc-dc0a-4894-8ad4-58eadbec38d2&maxDataAge=3600&theme=light&autoRefresh=true"
            title="Sales staticstics"
          ></iframe>
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
