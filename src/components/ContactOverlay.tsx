const ContactOverlay = () => (
  <>
    <h2 className="font-space-grotesk text-lg md:text-xl font-bold tracking-widest px-4 py-2 mb-4 w-fit text-white text-center mx-auto" style={{ background: 'transparent', color: 'white', textAlign: 'center', width: '100%', transform: 'none', transformOrigin: '50% 50% 0px' }}>
      CONTACT
    </h2>
    <p className="font-outfit text-white/90 text-base md:text-lg max-w-xs md:max-w-md mb-8 text-center mx-auto" style={{ color: 'white', textAlign: 'center', width: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      ¿Quieres colaborar o tienes una idea? ¡Contáctanos!
    </p>
    <div className="flex flex-col gap-2 w-full items-center justify-center">
      <button className="bg-white text-black font-bold px-4 py-2 w-full text-center">ENVIAR MENSAJE</button>
    </div>
  </>
);

export default ContactOverlay; 