const AboutParagraph = ({header,text}) => {
  return (
    <>
      <h5 className="text-xl font-medium capitalize mt-4">{header}</h5>
      <p className="text-slate-600 mt-2 leading-loose">
        {text}
      </p>
    </>
  );
}
export default AboutParagraph
