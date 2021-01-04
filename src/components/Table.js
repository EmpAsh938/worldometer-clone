import Continents from "./Continents";
// import Options from "./Options";
import { useGlobalContext } from '../context'

const continents = [
  { id: 1, title: "All", isClicked: true },
  { id: 2, title: "Europe", isClicked: false },
  { id: 3, title: "North America", isClicked: false },
  { id: 4, title: "Asia", isClicked: false },
  { id: 5, title: "South America", isClicked: false },
  { id: 6, title: "Africa", isClicked: false },
  { id: 7, title: "Australia/Oceania", isClicked: false },
];
const title = [
  { id: 1, name: "Total Cases", isTrue: true },
  { id: 2, name: "New Cases", isTrue: true },
  { id: 3, name: "Total Deaths", isTrue: true },
  { id: 4, name: "New Deaths", isTrue: true },
  { id: 5, name: "Total Recovered", isTrue: true },
  { id: 6, name: "Active Cases", isTrue: true },
  { id: 7, name: "Serious, Critical", isTrue: true },
  { id: 8, name: "Population", isTrue: true },
];

export default function Table() {
  const { newCountries, allData, text, setText, handleClick, handleSubmit } = useGlobalContext()

  return (
    <section className="table">
      <article className="table__tag">
        <h2 className="table__tag__title">
          Reported Cases and Deaths by Country, Territory, or Conveyance
        </h2>
        <p className="table__tag__text">
          The <span className="table__tag__text__bold">coronavirus</span>{" "}
          COVID-19 is affecting{" "}
          <span className="table__tag__text__bold">
            218 newCountries and territories
          </span>{" "}
          around the world and 2 international conveyances.
          <span className="table__tag__text__bold">
            The day is reset after midnight GMT+0
          </span>
          . The list of newCountries and territories and their continental regional
          classification is based on the{" "}
          <a href="https://unstats.un.org/unsd/methodology/m49/">
            United Nations Geoscheme
          </a>
          . Sources are{" "}
          <a href="https://www.worldometers.info/coronavirus/#news">
            provided under "Latest Updates"
          </a>
          .{" "}
          <span className="table__tag__text__bold">
            <a href="https://www.worldometers.info/coronavirus/about/">
              Learn more about Worldometer's COVID-19 data
            </a>
          </span>
        </p>
      </article>
      <article className="table__data">
        <div className="table__data__input">
          {/* <div className="table__data__input__box">
            <button className="table__data__input__box__btn">Columns</button>
            <div className="table__data__input__box__options">
              {title.map((item) => {
                return <Options key={item.id} {...item} />;
              })}
            </div>
          </div> */}
          <form onSubmit={handleSubmit} className="table__data__input__form">
            <label htmlFor="search">Search:</label>
            <input value={text} onChange={e=>setText(e.target.value)} type="text" name="search" id="search" />
          </form>
        </div>
        <div className="table__data__continents">
          {continents.map((item) => {
            return <Continents key={item.id} {...item} handleClick={handleClick}/>;
          })}
        </div>
        <table className="table__data__continents__box">
          <thead className="table__data__continents__box__head">
            <tr className="table__data__continents__box__head__row">
              <th className="table__data__continents__box__head__row__title">
                #
              </th>
              <th className="table__data__continents__box__head__row__title">
                Country
              </th>
              {title.map((item) => {
                const { id, name } = item;
                return (
                  <th
                    key={id}
                    className="table__data__continents__box__head__row__title"
                  >
                    {name}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody className="table__data__continents__box__body">
            {newCountries ? newCountries.map((item, index) => {
              const {
                country,
                cases,
                todayCases,
                deaths,
                todayDeaths,
                recovered,
                active,
                critical,
                population
              } = item
              return (
                <tr key={index} className="table__data__continents__box__body__row">
                  <td className="table__data__continents__box__body__data">{index + 1}</td>
                  <td className="table__data__continents__box__body__data">{country}</td>
                  <td className="table__data__continents__box__body__data">{cases === 0 || cases}</td>
                  <td className={todayCases === 0 ? 'table__data__continents__box__body__data': 'newCases table__data__continents__box__body__data'}>{todayCases === 0 || todayCases}</td>
                  <td className="table__data__continents__box__body__data">{deaths === 0 || deaths}</td>
                  <td className={todayDeaths === 0 ? 'table__data__continents__box__body__data' : 'newDeaths table__data__continents__box__body__data'}>{todayDeaths === 0 || todayDeaths}</td>
                  <td className="table__data__continents__box__body__data">{recovered === 0 || recovered}</td>
                  <td className="table__data__continents__box__body__data">{active === 0 || active}</td>
                  <td className="table__data__continents__box__body__data">{critical === 0 || critical}</td>
                  <td className="table__data__continents__box__body__data">{population}</td>
                </tr>
              )
            }) 
            : 
            (<td>Loading...</td>)}
          </tbody>

          <tfoot className="table__data__continents__box__foot">
            <tr>
              {allData ? (
              <>
              <td className="table__data__continents__box__body__data">{" "}</td>
              <td className="table__data__continents__box__body__data foot-total">Total</td>
              <td className="table__data__continents__box__body__data">{allData.cases}</td>
              <td className="table__data__continents__box__body__data">{allData.todayCases}</td>
              <td className="table__data__continents__box__body__data">{allData.deaths}</td>
              <td className="table__data__continents__box__body__data">{allData.todayDeaths}</td>
              <td className="table__data__continents__box__body__data">{allData.recovered}</td>
              <td className="table__data__continents__box__body__data">{allData.active}</td>
              <td className="table__data__continents__box__body__data">{allData.critical}</td>
              <td className="table__data__continents__box__body__data">{allData.population}</td>
              </>) : 
              (
                <td>Loading ...</td>
              )}
            </tr>
          </tfoot>
        </table>
      </article>
    </section>
  );
}
