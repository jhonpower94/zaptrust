import { Typography } from "@mui/material";
import NumberFormat from "react-number-format";
import { useSelector } from "react-redux";
import "./card.css";
import mastercardlogo from "./mastercard.svg";

function CreditCard({ type, data }) {
  const userinfo = useSelector((state) => state.useInfos);

  return (
    <div>
      <div className="card">
        <div className="card__front card__part">
          <Typography
            variant="h6"
            className="card__front-square card__square"
            sx={{ color: "#fff", textTransform: "capitalize" }}
          >
            {type}
          </Typography>
          <img
            className="card__front-logo card__logo"
            alt="img"
            src={mastercardlogo}
          />
          <p className="card_numer">
            <NumberFormat
              allowEmptyFormatting
              value={data.cardactive ? data.cardnumber : `#### #### #### ####`}
              displayType={"text"}
              format={`#### #### #### ####`}
              mask={"*"}
            />
          </p>
          <div className="card__space-75">
            <span className="card__label">Card holder</span>
            <p className="card__info">
              {`${userinfo.firstName} ${userinfo.lastName}`}
            </p>
          </div>
          <div className="card__space-25">
            <span className="card__label">Expires</span>
            <p className="card__info">
              {data.cardactive ? data.Expiredate : "** / **"}
            </p>
          </div>
        </div>
        <div className="card__back card__part">
          <div className="card__black-line" />
          <div className="card__back-content">
            <div className="card__secret">
              <p className="card__secret--last">{data.cvv}</p>
            </div>
            <img
              className="card__back-square card__square"
              alt="img"
              src="https://image.ibb.co/cZeFjx/little_square.png"
            />
            <img
              className="card__back-logo card__logo"
              alt="img"
              src="https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
