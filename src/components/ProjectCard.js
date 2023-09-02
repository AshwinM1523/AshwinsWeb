import "./Project.css";
export const ProjectCard = ({
  title,
  description,
  imgUrl,
  year,
  avatar,
  name,
  role,
  projectLink,
}) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        <div
          className="card text-dark card-has-bg click-col"
          style={{
            backgroundImage: `url(${imgUrl})`,
          }}
        >
          <img
            className="card-img d-none"
            src="https://source.unsplash.com/600x900/?tech,street"
            alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?"
          />
          <div className="card-img-overlay d-flex flex-column">
            <div className="card-body">
              <small className="card-meta mb-2" style={{ color: "white" }}>
                {title}
              </small>
              <h4 className="card-title mt-0" style={{ color: "white" }}>
                {description}
              </h4>
              <small>
                <i className="far fa-clock"></i> {year}
              </small>
            </div>
            <div className="card-footer">
              <div className="media">
                <img
                  className="mr-3 rounded-circle"
                  src={avatar}
                  alt="Generic placeholder image"
                  style={{ maxWidth: "50px", marginBottom: "0.5rem" }}
                />
                <div className="media-body">
                  <h6 className="my-0 d-block" style={{ color: "white" }}>
                    {name}
                  </h6>
                  <small style={{ color: "white" }}>{role}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
