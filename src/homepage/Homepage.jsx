import "./Homepage.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="pageHomepageContainer">
        <div>
          <img
            className="pageHomepageContainerPic"
            src="https://th.bing.com/th/id/R.cfa96eb646c165214870d5344b3891a6?rik=s1W7%2bV6vaGOUug&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fBlood-Donation-PNG-Picture.png&ehk=S0i4ewV5GOFzi78qf1TbnkkpeUgf31L9Pd9XgcWV4rE%3d&risl=&pid=ImgRaw&r=0"
            alt="pic01"
          />
        </div>

        <div>
          <h1 data-testId="myTitle">why choose blood donation?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            laudantium explicabo libero nemo quis culpa similique delectus quasi
            laboriosam obcaecati, dicta magni. In quia, impedit sed ullam minus
            pariatur architecto. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maxime, laudantium explicabo libero nemo quis
            culpa similique delectus quasi laboriosam obcaecati, dicta magni. In
            quia, impedit sed ullam minus pariatur architecto.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            laudantium explicabo libero nemo quis culpa similique delectus quasi
            laboriosam obcaecati, dicta magni. Maxime, laudantium explicabo
            libero nemo quis culpa similique delectus quasi laboriosam
            obcaecati, dicta magni. In quia, impedit sed ullam minus pariatur
            architecto.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            laudantium explicabo libero nemo quis culpa similique delectus quasi
            laboriosam obcaecati, dicta magni. In quia, impedit sed ullam minus
            pariatur architecto.
          </p>
          <button
            onClick={() => navigate("/registration")}
            className="registerButton"
          >
            register now
          </button>
        </div>
        <div>
          <img
            className="pageHomepageContainerPic"
            src="https://th.bing.com/th/id/R.d09e6f9df75811f06bc3f39f2412351e?rik=98skCvuK9L74SQ&riu=http%3a%2f%2flivewellmagazine.org%2fwp-content%2fuploads%2f2015%2f04%2fBlood-Donation.jpg&ehk=uNOxa4ZC3H84HNUyPBT9CNcSJRg7w1hcy8Eb%2bpCqNqc%3d&risl=&pid=ImgRaw&r=0"
            alt="pic02"
          />
        </div>
      </div>
    </>
  );
};

export default Homepage;
