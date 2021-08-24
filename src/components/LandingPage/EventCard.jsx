import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Root = styled.div`
  position: relative;
  padding-top: 56.25%;
  margin: 0 10px;
  border-radius: 14px;
  overflow: hidden;

  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  .content {
    width: 100%;
    height: 100%;
    background-size: cover;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #0000001a linear-gradient(1deg, #0000009e 20%, transparent);
    transition: all 0.3s ease-in-out;

    h2 {
      position: absolute;
      bottom: 20px;
      left: 20px;
      font-size: var(--fontMedium);
      transition: transform 0.3s ease-in-out;
    }

    .subtext {
      position: absolute;
      bottom: 20px;
      left: 20px;
      transform: translateY(50px);
      font-size: 1rem;
      transition: transform 0.3s ease-in-out;
    }

    .date {
      position: absolute;
      top: 5%;
      right: 10%;
      transform: translateY(-50px);
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }

    .link {
      position: absolute;
      bottom: 10%;
      right: 10%;

      transform: translateY(50px);
      font-size: 1rem;
      background-color: #d338ed;
      color: white;
      padding: 7px 10px;
      font-size: 0.8rem;
      text-transform: capitalize;
      border-radius: 10px;
      font-weight: bold;
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }
  }
  :hover {
    transform: scale(1.1);

    .content {
      background: #00000061 linear-gradient(1deg, #0000009e 20%, transparent);
      h2 {
        transform: translateY(-30px);
      }

      .subtext {
        transform: translateY(0);
      }
      .date {
        transform: translateY(0);
        opacity: 1;
      }

      .link {
        transform: translateY(0);
        opacity: 1;

        :hover {
          text-shadow: 0 0 10px #9c27b0;
          transform: translateY(0) scale(1.3) !important;
        }
      }
    }
  }
`;

export default function EventCard({ id, img, title, alt, subText, date }) {
  return (
    <Root>
      <img
        src={`https://backend.soundofgoodmusic.com/${img}`}
        alt={alt || title}
      />
      <div className="content noselect">
        <h2>{title}</h2>
        {subText && <p className="subtext">{subText}</p>}
        {date && <p className="date">{date}</p>}
        <Link to="/event-list" className="link button">
          Book
        </Link>
      </div>
    </Root>
  );
}
