import Box1 from "../Box1/Box1"
import Box2 from "../Box2/Box2"
import styles from './boxes.module.css'

function Boxes() {
  return (
    <div className={styles.boxes}>
      <Box1 />
      {/* <Box1 classNames={styles.box} /> */}
      <Box2 />
    </div>
  )
}

export default Boxes