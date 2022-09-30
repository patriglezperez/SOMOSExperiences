import BottomArrow from "../BottomArrow/BottomArrow";
import CorporateEvents from "./CorporateEvents";
import SpectacularEvents from "./SpectacularEvents";
import ElegantEvents from "./ElegantEvents";
import Projects from "./Projects/Projects";
function Events() {
  return (
    <div className="Events--container transition">
      <Projects className="projects" />

      <section>
        <SpectacularEvents />
        <CorporateEvents />
        <ElegantEvents />
      </section>

      <section></section>

      <BottomArrow />
    </div>
  );
}
export default Events;
