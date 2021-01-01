import { useGlobalContext } from "../context";

export default function Hero() {
  const { allData } = useGlobalContext();
  if (!allData) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }
  return (
    <section className="hero">
      <h2 className="hero__title">COVID-19 Coronavirus Pandemic</h2>
      <p className="hero__time">Last updated: December 30, 2020, 11:13 GMT</p>
      <article className="hero__info">
        <div className="hero__info__box">
          <h3 className="hero__info__box__title">Coronavirus Cases:</h3>
          <span className="hero__info__box__title__numbers">
            {allData.cases}
          </span>
        </div>
        <div className="hero__info__box">
          <h3 className="hero__info__box__title">Deaths:</h3>
          <span className="hero__info__box__title__numbers deaths">
            {allData.deaths}
          </span>
        </div>
        <div className="hero__info__box">
          <h3 className="hero__info__box__title">Recovered:</h3>
          <span className="hero__info__box__title__numbers recover">
            {allData.recovered}
          </span>
        </div>
      </article>

      <article className="hero__cases">
        <div className="hero__cases__active">
          <h3 className="hero__cases__title">Active Cases</h3>
          <div className="hero__cases__topbox">
            <span className="hero__cases__boldnum">{allData.active}</span>
            <p className="hero__cases__text">Currentlly Infected Patients</p>
          </div>
          <div className="hero__cases__bottombox">
            <div className="hero__cases__bottombox__box">
              <h5 className="hero__cases__boldnum text-color-blue">
                {allData.cases - allData.critical}
              </h5>
              <span className="hero__cases__boldnum">
                (
                {(
                  ((allData.cases - allData.critical) / allData.cases) *
                  100
                ).toFixed(2)}
                )%
              </span>
              <p className="hero__cases__text">in Mild Condition</p>
            </div>
            <div className="hero__cases__bottombox__box">
              <h5 className="hero__cases__boldnum text-color-red">
                {allData.critical}
              </h5>
              <span className="hero__cases__boldnum">
                ({((allData.critical / allData.cases) * 100).toFixed(2)})%
              </span>
              <p className="hero__cases__text">Serious or Critical</p>
            </div>
          </div>
        </div>

        <div className="hero__cases__closed">
          <h3 className="hero__cases__title">Closed Cases</h3>
          <div className="hero__cases__topbox">
            <span className="hero__cases__boldnum">
              {allData.cases - allData.active}
            </span>
            <p className="hero__cases__text">Cases which had an outcome:</p>
          </div>
          <div className="hero__cases__bottombox">
            <div className="hero__cases__bottombox__box">
              <h5 className="hero__cases__boldnum text-color-green">
                {allData.recovered}
              </h5>
              <span className="hero__cases__boldnum">
                ({((allData.recovered / allData.cases) * 100).toFixed(2)})%
              </span>
              <p className="hero__cases__text">Recovered / Discharged</p>
            </div>
            <div className="hero__cases__bottombox__box">
              <h5 className="hero__cases__boldnum">{allData.deaths}</h5>
              <span className="hero__cases__boldnum">
                ({((allData.deaths / allData.cases) * 100).toFixed(2)})%
              </span>
              <p className="hero__cases__text">Deaths</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
