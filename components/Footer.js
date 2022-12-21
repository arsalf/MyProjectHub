import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <FontAwesomeIcon icon={faHeart} className="mx-2 h-5 text-red-500" />
      </footer>
    </>
  )
}
