export default function PlaceToVisit({ name, desc, img, hour }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white">
      <img src={img} alt={name} className="h-60 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-orange-600">{name}</h3>
        <p className="text-gray-600 mt-2">{desc}</p>
        <p className="text-sm mt-3 text-gray-700 font-medium">
          ⏱ Visiting Hours: {hour}
        </p>
      </div>
    </div>
  );
}
