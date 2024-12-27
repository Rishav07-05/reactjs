const Card = (props) => {
  return (
    <div className="max-w-sm mx-auto mt-10 ">
      <div className="border border-gray-300 rounded-lg shadow-md p-5 text-center">
        <img className="h-32 w-32 rounded-full mb-3" src={props.profileImage} alt="" />
        <h2 className="text-2xl font-semibold mb-3">
          {props.username} {props.surname}
        </h2>
        <h2 className="text-gray-100 mb-4 font-semibold">{props.city}</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add friends
        </button>
      </div>
    </div>
  );
};

export default Card;
