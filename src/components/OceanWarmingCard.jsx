const OceanWarmingCard = ({ year }) => {
  return (
    <div className="ocean_warming_card">
      <h5 className="ocean_content">
        In the year {year.year} the ocean had a temp of {year.temp}°C
      </h5>
    </div>
  );
};

export default OceanWarmingCard;
