import "./herosec.css";
const HeroSec = () => {
  return (
    <>
      {/* HERO SECTION CONTAINER */}
      <div className="hero-ctn">
        {/* HERO SECTION HEADING CONTAINER */}
        <div className="business-ctn">
          <h3 className="heading">Business Communications Reinvented</h3>
          <span className="content-line">
            Start communicating with your business team more efficiently with
            our app.
          </span>
          <button>Get the app</button>
        </div>
        {/* ICONS Container */}
        <div className="icons-ctn">
          {/* Made two divs */}
          {/* LEFT is for icons like document, uploading document, meeting etc */}
          <div className="left-icons">
            <div className="document-ctn">
              <img src="../public/document-icon.png" alt="" />
            </div>
            <div className="uploading-document-ctn">
              <div>
                <img src="../public/progress.png" alt="" />
              </div>
              <div>
                <h3>Uploading Document</h3>
                <span>7,09/108,98 GB</span>
              </div>
            </div>
            <div className="team-meeting-ctn">
              <div className="team-inside-ctn">
                <div className="">
                  <img src="../public/team-meeting.png" alt="" />
                </div>
                <div>
                  <h3>Team Meeting</h3>
                  <span>2:30 PM 15 Apr 2020</span>
                </div>
              </div>
              <div className="team-meeting-users-ctn">
                <div className="circle">JM</div>
                <div className="circle">AC</div>
                <div className="circle">KD</div>
                <div className="circle">+8</div>
              </div>
            </div>
            <div className="john-smith-ctn">
              <div className="js-ctn">
                <img src="../public/person-initials.png" alt="" />
              </div>
              <div className="js-content-ctn">
                <h3>John Smith</h3>
                <span>Hello, are you available for a pro..</span>
              </div>
              <div className="js-time-ctn">11:02 AM</div>
            </div>
          </div>

          {/* ICONS like Anna Brooks, Message Saved */}
          <div className="right-icons-ctn">
            <div className="upload-icon-ctn">
              <img src="../public/progress.png" alt="" />
              <span>1.73/2.09 GB</span>
            </div>
            <div className="anna-brooks-ctn">
              <div className="ab-ctn">
                <img src="../public/person-initials-AB.png" alt="" />
              </div>
              <div className="anna-brooks-content-ctn">
                <h3>Anna Brooks</h3>
                <span>Hi, How are you doing today?</span>
              </div>
              <div className="anna-brooks-time-ctn">11:02 AM</div>
            </div>
            <div className="message-saved-ctn">
              <div className="js-ctn">
                <img src="../public/saved.png" alt="" />
              </div>
              <div className="js-content-ctn">
                <h3>Message Saved</h3>
                <span>You have successfully saved this message</span>
              </div>
            </div>
            <div className="message-ctn">
              <img src="../public/message.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSec;
