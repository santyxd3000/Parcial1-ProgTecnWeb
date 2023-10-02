import { FormattedMessage } from "react-intl";

export default function Detail({ bookDetail, editable }) {
    if (!bookDetail) return <div>Este elemento no existe</div>;
  
    const inputFields = Object.entries(bookDetail).map(([key, value]) => (
      <div key={key}>
        <label>{key}: </label>
        <input type="text" name={key} value={value} />
      </div>
    ));
  
    return (
      <div style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{bookDetail.title}</h5>
          {editable ? (
            <form>
              {inputFields}
            </form>
          ) : (
            <div>
              <p className="card-text"><strong><FormattedMessage id = "carMaker"/>: </strong>{bookDetail.carMaker}</p>
              <p className="card-text"><strong><FormattedMessage id = "carModel"/>: </strong>{bookDetail.carModel}</p>
              <p className="card-text"><strong><FormattedMessage id = "carYear"/>:</strong>{bookDetail.carYear}</p>
              <p className="card-text"><strong><FormattedMessage id = "available"/>: </strong>{String(bookDetail.available)}</p>
              <p className="card-text"><strong><FormattedMessage id = "price"/>: </strong>{bookDetail.price}</p>
              <p className="card-text"><strong><FormattedMessage id = "description"/>: </strong>{bookDetail.description}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
  