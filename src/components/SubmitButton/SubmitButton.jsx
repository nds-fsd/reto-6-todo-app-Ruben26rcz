import styles from './index.module.css'

function SubmitButton({handleSubmit}) {
  return (
    <button className={styles.primaryButton} onClick={handleSubmit}>
        Add todo
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path fill="#FFF" d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
        </svg>
    </button>
  )
}

export default SubmitButton