import React from "react";
import styles from "./PeopleComponent.module.scss";
import { AiOutlineEllipsis } from "react-icons/ai";

const PeopleComponent = () => {
  const peopleData = [
    { user: "Andrew Bojangles", rating: 4.3, comment: "good" },
    { user: "Andrew Bojangles", rating: 4.5, comment: "best" },
    { user: "Andrew Bojangles", rating: 3.4, comment: "good" },
    { user: "Andrew Bojangles", rating: 4.5, comment: "good" },
    { user: "Andrew Bojangles", rating: 5, comment: "good" },
    { user: "Andrew Bojangles", rating: 4, comment: "good" },
  ];

  return (
    <div className={styles.peopleComponent}>
      <div className={styles.header}>
        <div className={styles.filterOptions}>
          <div className={styles.dropdown}>
            People <i className="fa fa-caret-down"></i>
          </div>
          <div className={styles.dropdown}>
            Pages <i className="fa fa-caret-down"></i>
          </div>
          <div className={styles.dropdown}>
            Ratings <i className="fa fa-caret-down"></i>
          </div>
          <div className={styles.dropdown}>
            Online <i className="fa fa-caret-down"></i>
          </div>
          <div className={styles.dropdown}>
            Ratings <i className="fa fa-caret-down"></i>
          </div>
        </div>
      </div>
      <div className={styles.count}>
        <h2>12</h2>
        <p>People</p>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>User</th>
              <th>Ratings</th>
              <th>Comment</th>
              <th></th> {/* For the ellipsis icon */}
            </tr>
          </thead>
          <tbody>
            {peopleData.map((person, index) => (
              <tr key={index}>
                <td>{person.user}</td>
                <td>{person.rating}</td>
                <td>{person.comment}</td>
                <td style={{ textAlign: "center" }}>
                  <AiOutlineEllipsis />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PeopleComponent;
