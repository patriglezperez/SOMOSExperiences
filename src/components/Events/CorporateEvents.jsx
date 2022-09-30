import MosaicB from "../../assets/img/mosaic_B.png";

function CorporateEvent() {
  return (
    <>
      {/* Event 2 */}

      <div className="Events--container">
        <section>
          <h2 className="Events--mainSentence">Te creamos los eventos más</h2>
          <h2 className="Events--mainSentence blue">corporativos</h2>
        </section>

        <section>
          <img src={MosaicB} alt="Santander" className="Events--mosaic--a" />
        </section>
      </div>
    </>
  );
}
export default CorporateEvent;
