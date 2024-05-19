import React from "react";
import styles from "./PeopleComponent.module.scss";
import { AiOutlineEllipsis } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
const PeopleComponent = () => {
  const peopleData = [
    { user: "Andrew Bojangles", rating: 4.3, comment: "good" },
    { user: "Ilkhomjon Rustamov", rating: 4.5, comment: "best" },
    { user: "Mirzoyoqub Rashidov", rating: 3.4, comment: "good" },
    { user: "Kamronbek Rustambekov", rating: 4.5, comment: "good" },
    { user: "Samandar Rikhsiboyev", rating: 5, comment: "good" },
    { user: "Andrew Bojangles", rating: 4, comment: "good" },
    { user: "Ann Tom", rating: 4, comment: "good" },
    { user: "Andrew Bojangles", rating: 4, comment: "good" },
    { user: "Tomas Muller", rating: 4, comment: "good" },
    { user: "Leonel Messi", rating: 4, comment: "good" },
    { user: "Cristiano Ronaldo", rating: 4, comment: "good" },
  ];

  return (
    <div className={styles.peopleComponent}>
      <div className={styles.header}>
        <div className={styles.filterOptions}>
          <div className={styles.dropdown}>
            People <IoMdArrowDropdown />
          </div>
          <div className={styles.dropdown}>
            Pages <IoMdArrowDropdown />
          </div>
          <div className={styles.dropdown}>
            Ratings <IoMdArrowDropdown />
          </div>
          <div className={styles.dropdown}>
            Online <IoMdArrowDropdown />
          </div>
          <div className={styles.dropdown}>
            Ratings <IoMdArrowDropdown />
          </div>
        </div>
      </div>
      <div className={styles.count}>
        <h2>11</h2>
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
