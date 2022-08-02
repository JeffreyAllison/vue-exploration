// import AddWorkshop from './AddWorkshop.jsx';
import WorkshopList from './WorkshopList.jsx';
import styles from './Workshops.css';

export default function Workshops() {
  return (
    <section className={styles.Workshops}>
      {/* <AddWorkshop /> */}
      <WorkshopList />
    </section>
  );
}
