/* eslint-disable react/prop-types */
export default function Lists(props) {
  const { id, title, body } = props.post;

  console.log(title);

  return (
    <div className="flex items-center justify-evenly gap-4 p-4">
      <div className="flex items-center gap-4 bg-white rounded-lg p-2">
        <img
          src="https://media.istockphoto.com/id/811843774/photo/indian-mother-and-daughter.jpg?s=1024x1024&w=is&k=20&c=WL7cOTptI_myv9Uo11lxjtd1dKGuHXfdkOt3f5ort78="
          alt="api img"
          className="w-[50px] h-[50px] rounded-full"
        />
        <div>
          <h3 className="font-bold truncate">{title}</h3>
          <p className="">{body.substring(0, 150)}...</p>
          <p className="text-gray-500 font-semibold">
            Mon , 21 Dec 2021 14:57GMT
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-[60px] h-[40px] rounded-full bg-white">
        <button
          className="text-red-600  w-full h-full font-semibold"
          onClick={() => props.handleDelete(id)}
        >
          X
        </button>
      </div>
    </div>
  );
}
