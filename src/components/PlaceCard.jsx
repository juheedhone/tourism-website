export default function PlaceCard({ name, desc, img, hour }) {
  return (
    <div className="flex flex-col md:flex-row  overflow-hidden">
      {/* Image Section */}
      <div className="md:w-1/2 w-full">
        <img src={img} alt={name} className="h-full w-full object-cover" />
      </div>

      {/* Description Section */}
      <div className="md:w-1/2 w-full p-5 flex flex-col justify-center bg-white">
        <h3 className="text-2xl font-semibold text-orange-600">{name}</h3>
        <p className="text-gray-700 mt-3 leading-relaxed">{desc}</p>
        <p>{hour}</p>
      </div>
    </div>
  );
}
