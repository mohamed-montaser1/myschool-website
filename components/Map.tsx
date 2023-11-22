function Map() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6886.684087805403!2d31.7690711!3d30.3412276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f8070286f924f7%3A0x53599dbb3a6996cc!2z2YXYr9ix2LPZhyDYp9mE2LTZh9mK2K8g2YXYrdmF2YjYryDYp9mE2KjYutiv2KfYr9mKINin2YTYq9in2YbZiNmK2Kkg2KjZhtmK2YY!5e0!3m2!1sar!2seg!4v1700610145378!5m2!1sar!2seg"
      style={{ border: 0, width: "100%", height: "500px", marginTop: "40px" }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export { Map };
