function SkillItem({ src, skillName, alt }) {
  return (
    <div className="flex flex-col items-center duration-150 hover:scale-105">
      <img src={src} alt={alt} className="h-12 w-12" />
      <h3>{skillName}</h3>
    </div>
  );
}

export default SkillItem;
