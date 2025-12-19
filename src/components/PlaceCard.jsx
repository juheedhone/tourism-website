export default function PlaceCard({ name, desc, img, hour, hoverImg }) {
  return (
    <div className="flex flex-col md:flex-row  overflow-hidden">
      {/* Image Section  */}
      <div className="md:w-1/2 w-full group relative h-64 md:h-auto">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />

        <img
          src={hoverImg}
          alt={`${name} inside`}
          className="h-full w-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
      {/* Description Section */}
      <div className="md:w-1/2 w-full p-5 flex flex-col justify-center bg-white">
        <h3 className="text-2xl text-center font-semibold text-orange-600">
          {name}
        </h3>
        <p className="text-gray-700 mt-3 leading-relaxed">{desc}</p>
        <p className="mt-2 text-gray-700">{hour}</p>
      </div>
    </div>
  );
}
