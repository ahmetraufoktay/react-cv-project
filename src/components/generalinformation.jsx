/* eslint-disable react/prop-types */
import "./generalinformation.css";

function GeneralInformation({ data, handlePerson }) {
  return (
    <section className="general">
      <h2 className="blockTitle">General Information </h2>

      <div className="content">
        <label htmlFor="fullName">
          <h3>Full Name</h3>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={data.person[0].text}
            onChange={handlePerson}
          />
        </label>
        <label htmlFor="email">
          <h3>Email</h3>
          <input
            type="email"
            name="email"
            id="email"
            value={data.person[1].text}
            onChange={handlePerson}
          />
        </label>

        <label htmlFor="telephone">
          <h3>Phone Number</h3>
          <input
            type="tel"
            name="number"
            id="telephone"
            value={data.person[2].text}
            onChange={handlePerson}
          />
        </label>

        <label htmlFor="address">
          <h3>Address</h3>
          <input
            type="text"
            name="address"
            id="address"
            value={data.person[3].text}
            onChange={handlePerson}
          />
        </label>
      </div>
    </section>
  );
}

export default GeneralInformation;
