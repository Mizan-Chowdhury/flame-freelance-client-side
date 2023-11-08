const BidRequestsCard = ({ BidRequests, handleStatus }) => {
  const { _id, userEmail, title, deadline, status } = BidRequests;

  return (
    <div>
      <div className="card bg-[#0b1126] shadow-xl lg:h-72">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="">
            <p>Applicant Email: {userEmail}</p>
            <p>Deadline: {deadline}</p>
            <p>Status: {status}</p>
          </div>
          {
            status === 'Pending' ? <div className={`card-actions items-center`}>
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
          :
          ''
          }
        </div>
      </div>
    </div>
  );
};

export default BidRequestsCard;
