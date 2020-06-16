import React from 'react';

function CardList() {
  return (
    <section id="list" className="list">
      <div className="list__container">
        <label><span>CONTENTS</span></label>
        <ul id="categoryList" className="list__categories">
          <li data-filter="All" className="category__item active">All</li>
          <li data-filter="Front" className="category__item">Front-end</li>
          <li data-filter="Back" className="category__item">Back-end</li>
          <li data-filter="Marketing" className="category__item">Marketing</li>
          <li data-filter="Thought" className="category__item">Thought</li>
        </ul>
        <div className="list__contents">
        </div>
      </div>
    </section>
  );
}

export default CardList;