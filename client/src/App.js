import React, {useState} from 'react'
import styles from './App.module.scss';

const App = () => {

  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState({});
  console.log(quote);

  // function onGetQuote() {
  //   setLoading(true);
  //   setTimeout(function() {
  //     setLoading(false);
  //   }, 3000);
  // };

  const FetchQuoteData = () => {
    setLoading(true);
    fetch("https://api.quotable.io/random")
    //parse json 
    .then(response => response.json())
    .then(data => {
      setLoading(false);
      setQuote(data);
    });
  }

  return (
    <>
      <div className={styles.container}>

        {/* spinner div */}
        {loading ? 
          <div className={styles.loaderContainer}>
            <div className={styles.spinner}></div>
          </div> : 
          <></>
          }
        {/* content div */}
        <div className={styles.main}>
          <h1>Daily Quote!</h1>
          <p>The wise words of both living and not forgotten legends guard us daily...</p>
          <div className={styles.button}>
            <button className={styles.btn}>
              Read Article
            </button>
            <button className={`${styles.btn} ${styles.getQuoteBtn}`} onClick={FetchQuoteData}>Generate Quote</button>
          </div>
          <div className={styles.quoteSection}>
            <blockquote className={styles.quote}>
              {quote.content}
            </blockquote> <span className={styles.author}>- {quote.author}</span>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App