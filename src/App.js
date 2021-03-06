import logo from './logo.svg';
import './App.css';
import email_icon from  './static/media/email-white.e7d51381.svg';
import location_icon from  './static/media/location-pin.de95721a.svg';
import twitter_icon from  './static/media/twitter-white-icon.ea27ab22.svg';

const card_data = [
  {
    "thumbnail" : "https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png",
    "title" : " Intoduction To A Machine Learning Online Course",
    "channel_name": "EdYoda",
    "date_up": "23 Aug 2019",
    "description":"We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course holds...."
  },
  {
    "thumbnail" : "https://edyoda.s3.amazonaws.com/media/blog-images/6.png",
    "title" : "LAMP Stack Vs MEAN stack...",
    "channel_name": "EdYoda",
    "date_up": "24 Aug 2019",
    "description":" In today’s dynamic world, rapid web application development with a smooth user interface that can adapt to specific features is the main business requirement..."
  },
  {
    "thumbnail" : "https://edyoda.s3.amazonaws.com/media/blog-images/4.png",
    "title" : "Impact of Cloud Computing in various industries",
    "channel_name": "EdYoda",
    "date_up": "24 Aug 2019",
    "description":"Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using cloud technology as part of their business...."
  },
  {
    "thumbnail" : "https://edyoda.s3.amazonaws.com/media/blog-images/5.png",
    "title" : " Big Data: Importance of Big Data Management...",
    "channel_name": "EdYoda",
    "date_up": "23 Jul 2019",
    "description":"  Big data is the phrase that is used to define large structured and unstructured volumes of data that has the potential to be mined for information and used in machine learning projects and other advanced analytics applications...."
  },
  {
    "thumbnail" : "https://edyoda.s3.amazonaws.com/media/blog-images/3.png",
    "title" : "breaking the Myths around Cybersecurity",
    "channel_name": "EdYoda",
    "date_up": "26 Aug 2019",
    "description":" As the dependency on online platforms is increasing daily, cybersecurity is becoming an important concern for all companies today. The number of cyberattacks is ever-rising even after adopting every security measure possible by businesses...."
  },
  {
    "thumbnail" : "https://edyoda.s3.amazonaws.com/media/blog-images/7.png",
    "title" : "Importance of Data Backup and Recovery...",
    "channel_name": "EdYoda",
    "date_up": "26 Aug 2019",
    "description":"  A business must always introspect the areas where they lack in order to br//ing about a positive change in the work environment. One of the main precautions or a contingency...."
  },
  {
    "thumbnail" : "https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png",
    "title" : "What is Web Scraping? Information Gathering",
    "channel_name": "Zac Clancy",
    "date_up": "25 Sep 2019",
    "description":" Simply put, web scraping is one of the tools developers use to gather and analyze information from the Internet. Some websites and platforms offer application programming interfaces  (APIs)...."
  },
  {
    "thumbnail" : "https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png",
    "title" : "What is Income Share Agreement?",
    "channel_name": "Zac Clancy",
    "date_up": "14 Oct 2019",
    "description":"The term Income Share Agreement has been around for a long time since 1955 to be precise. Surprised, eh? It was first introduced by Milton Friedman, an American economist, and statistician who strongly believed in “free-market capitalism”...."
  },
  {
    "thumbnail" : "https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png",
    "title" : "Practical Machine Learning with Python and Keras",
    "channel_name": "EdYoda",
    "date_up": "16 Oct 2019",
    "description":"Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to “learn” (e.g., progressively improve performance on a specific task) from data, ..."
  }

];


function App() {
  return (
    <div classNameName="App">
      
        <Header/>
        <div id="main-container">
            <p><h2>Trending Posts</h2></p>
            <p><i className="fa fa-filter" aria-hidden="true"></i>Filter by Category</p>
        </div>


        <div id="categories-section">
                    <input type="button" value="All" className="item_btnSel"/>
                    <input type="button" value="Artificial Inteligence" className="item_btn"/>
                    <input type="button" value="Cloyd Computing" className="item_btn"/>
                    <input type="button" value="DevOps" className="item_btn"/>
                    <input type="button" value="Programming Languages" className="item_btn"/>
                    <input type="button" value="Mobile Application Development" className="item_btn"/>
                    <input type="button" value="Technology and Tools" className="item_btn"/>
                    <input type="button" value="Get a Job in Tech Company" className="item_btn"/>
                    <input type="button" value="Others" className="item_btn"/>

        </div>

        <div id="blog-grid">
          {card_data.map((item) => <Card card_item={item} />)}
        </div>
       

        <Footer/>
    </div>
  );
}

export default App;


const Card = (props) => {
  return ( 
  
      <div className="blog-card">
          <img className="thumbnail" src={props.card_item.thumbnail} alt="Intoduction to Machine Learning"/>
          <div className="blog-meta">
              <h3 className="blog-title"> {props.card_item.title} </h3>
              <p>
                  <span className="channel-name">{props.card_item.channel_name}</span> | <span className="date"> {props.card_item.date_up}</span>     
              </p>
              <p className ="description"> {props.card_item.description}</p>
          </div>
      </div>
    
   );
}
 


const Header= () => {

  
  return ( 
    
    <div id="topbar">
    <div className="topbar-item">

        <span id="logo">EDYODA</span>
        <span id="menu-item">Explore Categories <i className="fa fa-angle-down" aria-hidden="true"></i></span>
        <p id="sub-text">Stories</p>

    </div>

   

</div>
   );
}

const Footer = () => {
  return ( 

   

        <div className="Footer__Footer__2T3w3">

          <div className="Footer__Row__2Koch">

            <div className="Footer__Column__1mRXM">
              <h3 className="Footer__ColumnHeading__sK9kQ">EDYODA</h3>
              <a href="/about">About Us</a><a href="/contact-us">Contact Us</a>
              <a href="/terms">Terms of Use</a><a href="/privacy">Privacy Policy</a>
            </div>

            <div className="Footer__Column__1mRXM">
              <h3 className="Footer__ColumnHeading__sK9kQ">RESOURCES</h3>
              <a href="/courses/all">Courses</a><a href="/videos/all">Learning Videos</a>
              <a href="/channel/all">Educators</a><a href="/stories">EdYoda Stories</a>
              <a href="https://university.edyoda.com/" target="_blank" rel="noopener">University</a>
            </div>

            <div className="Footer__Column__1mRXM">
              <h3 className="Footer__ColumnHeading__sK9kQ">FOR ENTERPRISES</h3>
              <a href="https://www.zekelabs.com" target="_blank" rel="noopener noreferrer">Train Your Employees</a>
              <h3 className="Footer__ColumnHeading__sK9kQ">QUICK LINKS</h3>
              <a href="/learn-and-earn">Learn and Earn</a>
              <a href="/become-learning-enabler">Become a Learning-Enabler</a>
              <a href="/learning-enabler-tips">Tips for Learning-Enabler</a>
              <a href="/requestnewtopic">Request New Topic</a>
            </div>

            <div className="Footer__Column__1mRXM Footer__SocialLinksContainer__2kpSA">
              <h3 className="Footer__ColumnHeading__sK9kQ">CONNECT</h3>

              <div className="Footer__Column__1mRXM">
                <a className="Footer__AddressText__1CPUN">2nd Floor #188, Survey No. - 123/1, <br/>Incubes Building Next to McDonalds,<br/>ITPL Main Rd, Brookefield,<br/>Bengaluru, Karnataka-560037,<br/>India</a>
                <a href="mailto:hello@edyoda.com" target="_blank" rel="noopener noreferrer">
                  <img src={email_icon} alt="EdYoda Email Icon" className="Footer__ContactIcon__2TTbB"/>hello@edyoda.com
                </a>

                <div className="Footer__SocialLinks__174hs">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/zekeLabs/@12.9671441,77.7143744,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae12256340d8a7:0xc9c6dfb48a7eeadd!8m2!3d12.9671441!4d77.7165631">
                    <img src={location_icon} alt="Google maps location icon" className="Footer__SocialIcon__2m5Mx"/></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/EdYodaHQ"><img src={twitter_icon} alt="EdYoda Twitter Icon" className="Footer__SocialIcon__2m5Mx"/></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://en-gb.facebook.com/edYoda.here/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAqCAYAAAC+5wuXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMlJREFUeNpi/P//PwMewAzEPkDsBcRWQKwIxNxYVYIMwoG1gPjCfyIBCw6XqAPxQSAWYSASMGERYwTiBaQYgssgWyC2YCARYDMolIEMgM0gc3IMwhbYSgT0XATiTiB+AsTf4AGLJR39AmJWPAZpAvENjBjCYtB/Ai4CJdJ/xIQRIfCP2MBmoFas4QPf8MWaCwkG/celHhTY/6ngs/fUCqMX1DLoGbUMej6MvcYCLRGJzWsfgVhgUGWRUYNGDRo1aNSgUYNIBgABBgDTamTg3XAChAAAAABJRU5ErkJggg==" alt="EdYoda Facebook Icon" className="Footer__facebookIcon__193xx Footer__SocialIcon__2m5Mx"/></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/edyoda/?originalSubdomain=in"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACE1BMVEUAAAD//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f0AAACS7nrlAAAAr3RSTlMAARIiEydtsub757RvKUO+wEIauRXp4zb68i0q7+AWAs+oX/4z4bM3+Q2FVb+R2LDxzvXV3b3EpJJxRyMH8NN7VgrJTP3zd4JaTtoUifTiamucBiU7UVsyGwwdL0BKIQtUjsj435dQJGAOaXkxEJ2D97w8sURn/GK7gZumBLp6Qbjlt262tQPGOJ6KhqDRD+oZra+WkK6HzKwomaua9o2qgJ+pOcPkp9KlfaNwoqER3P6g3gAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCwQRLRRI/vG6AAADvElEQVR42u3a+TsUYQAH8HfLteQuqWRJISo3hRK2U22HDhRJCB1CETolXZJSoUv3Xe+/WPJsz66d9zvzjnnfeR6735/fd76fPWfmnZcQX1xjWbDQz2JWuX9AYJCVUmoNDlkUKr8+LJy6JiJSbn2Ue/10ohfLfPlLqGdilkrrj4ylSlm2XFL/ijiqnJXxUvptCZSVRCmAVcx+mrRaQr9lDRtAkyUAUkA/TV0rHpCGADRdPGAdBKwXD9gAARniAZkQkCUekA0BOeIBuRCQJx6QDwEF4gEbIWCTeEAhBBSJBxRvBv1bxPcTUgIAW2UASoOY/WVyrpDL7Yz+bbIuibYr99vLJfUTsiNJoT97p7R+QnZ5/hR2y3r/Z1KxZ69bvWNfsdT+v4nfn+w8LzkOpB+UXf8vxZWHDh8pPFplSrkvvvjii5BU1xw7XptSd8KM7qj6kw2n/p9YG8uampn3uadb2Jl1Sihkj3RbVWtty/I8vcdGnDmrCGgB14Tn3IeCG1mXm8i688y7rYbIuQHCNQBK2y+AA9KOlLkA8tQBnQ6qki5/kYBm+PJnknlRN6BDDXCpW72fUmuPXsBlFUCvlvrppFlEAGx9Wvsp7b+iC3AVAq5p76e0XRcgGgE6NX3+ztiv6wHcAAC/GJ5+Sm9WGAvoCuHrpzRQB2CAPTKOcucWP2CQvwUks5UbcNtQgHMByjxA4xAvgPuLppJ6XkCywYA7ZgPoXU5AoNGAe5yALm2HdQze7wl4MPxQfWQuJyBDQ3tC7YhzeGjvI7XRo0YDgntsrhPiH6uMr+cDPFHrH6smsxKAJzzlAzxT6e8jnnkOZ4zzAVTe0IkhBYAFfnO7qw0ERCiv7FVa0aQwLsAEfDGTRDkv0Kw2LsBLdKhXjH5ShGaVGAZ4HcUCEPSP9IYLMAWGjjH7yVsw7R0X4D0YCp4yfwDTurgAiWDoKBtQBaZ9NArwid1PhuzseTlcgM/skV8AgLCfStFgLkA/e2Q+Aoyz56UaBRhAAPRvzAX4yh4JNxo0GQUo0An4ZhTgu07Aj3kD+Gk24JfZgGEfwGyA6d8B038Fpv8PmA7Qey4wDKD3bGgYAFwPyAGASzI5AHBR6iUAcGMiBzBlNgDcnMoBgPUBOQCwQuIlALBKJgcA1gnlADLMBoCbTDkAsFzvJQDwxEQOADy0kgMAj+3kAMCTUzkA8OzYSwBo/4AUANxBIQOA95BIAKht4xEOUN3INO8BGjaziQWEmw3QtqGRFzAyyY7N/UA17JFwS/5vUEG8Pn8AAeaBBm01AhgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTEtMDRUMTc6NDU6MjArMDE6MDDpm7GmAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTExLTA0VDE3OjQ1OjIwKzAxOjAwmMYJGgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=" alt="EdYoda LinkedIn Icon" className="Footer__SocialIcon__2m5Mx"/></a>
                </div>
                
                <a>© 2020 <br/>zekeLabs Technologies Private Limited</a>
              </div>
            </div>
          </div>
        </div>
   
   );
}
 

 
