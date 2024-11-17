import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Donor.css";

const Donor = () => {
  const [donors, setDonors] = useState([]);
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedDonorId, setSelectedDonorId] = useState(null);
  const [selectedDonorDetails, setSelectedDonorDetails] = useState(null);

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = async (filters = {}) => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:3000/api/donors/search", {
        params: filters,
      });
      if (Array.isArray(data)) {
        setDonors(data);
      } else {
        console.error("API response is not an array", data);
      }
    } catch (error) {
      console.error("Error fetching donors:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDonorDetails = async (id) => {
    if (selectedDonorId === id) {
      // If clicked on the same donor, toggle visibility off
      setSelectedDonorId(null);
      setSelectedDonorDetails(null);
      return;
    }

    try {
      const { data } = await axios.get(`http://localhost:3000/api/donors/${id}`);
      setSelectedDonorId(id); // Set the selected donor ID
      setSelectedDonorDetails(data); // Set the donor details
    } catch (error) {
      console.error("Error fetching donor details:", error);
    }
  };

  const handleSearch = () => {
    const filters = {};
    if (bloodGroup) filters.bloodGroup = bloodGroup;
    if (location) filters.location = location;

    fetchDonors(filters); // Pass filters to fetchDonors
  };

  return (
    <div className="donor-container ubuntu-medium">
      <h2 className="ubuntu-medium title">Donor Search</h2>

      <div className="search-filters">
        <div className="filter-input">
          <label>Blood Group:</label>
          <input
            type="text"
            placeholder="Enter blood group"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
        </div>

        <div className="filter-input">
          <label>Location:</label>
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="donor-list">
          <table className="donor-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Blood Group</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {donors.length > 0 ? (
                donors.map((donor) => (
                  <React.Fragment key={donor._id}>
                    <tr>
                      <td>{donor.name}</td>
                      <td>{donor.bloodGroup}</td>
                      <td>{donor.location}</td>
                      <td>
                        <button
                          className="details-button"
                          onClick={() => fetchDonorDetails(donor._id)}
                        >
                          {selectedDonorId === donor._id ? "Close Details" : "View Details"}
                        </button>
                      </td>
                    </tr>
                    {selectedDonorId === donor._id && selectedDonorDetails && (
                      <tr className="donor-details-row">
                        <td colSpan="4">
                          <div>
                            <p><strong>Name:</strong> {selectedDonorDetails.name}</p>
                            <p><strong>Blood Group:</strong> {selectedDonorDetails.bloodGroup}</p>
                            <p><strong>Location:</strong> {selectedDonorDetails.location}</p>
                            <p><strong>Address:</strong> {selectedDonorDetails.address || "N/A"}</p>
                            <p><strong>Contact:</strong> {selectedDonorDetails.contactNumber || "N/A"}</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No donors found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Donor;
