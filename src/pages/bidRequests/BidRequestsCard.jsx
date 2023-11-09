const BidRequestsCard = ({ bidRequests, handleStatus }) => {
  const { _id, userEmail, title, deadline, status, bidding_price } =
    bidRequests;

  return (
    <div>
      <div className="card bg-[#0b1126] shadow-xl lg:h-72">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="">
            <p>Applicant Email: {userEmail}</p>
            <div className="flex justify-between">
              <p>Deadline: {deadline}</p>
              <p>Bidding price : ${bidding_price}</p>
            </div>
            <p>Status: {status}</p>
          </div>
          {status === "Pending" ? (
            <div className={`card-actions items-center`}>
              <button
                onClick={() => handleStatus(_id, "Progress")}
                className="btn btn-sm"
              >
                Accept
              </button>
              <button
                onClick={() => handleStatus(_id, "Rejected")}
                className="btn btn-sm"
              >
                Reject
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default BidRequestsCard;
