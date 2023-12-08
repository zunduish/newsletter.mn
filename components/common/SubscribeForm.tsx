import Script from "next/script";

const SubscribeForm = ({
  brandId,
  formId,
}: {
  brandId: string;
  formId: string;
}) => {
  //   if (!brandId || !formId) return null;
  //   console.log(brandId, formId, "sfargreshgtshrst");
  return (
    <>
      <Script
        id="form"
        dangerouslySetInnerHTML={{
          __html: `
          window.erxesSettings = {
            forms: [{
              brand_id: "zRLmyi",
              form_id: "ZVBRdQ"
            }],
          };
          
        (function() {
          var script = document.createElement('script');
          script.src = "https://unreadnewsletter.app.erxes.io/widgets/build/formWidget.bundle.js";
          script.async = true;
        
          var entry = document.getElementsByTagName('script')[0];
          entry.parentNode.insertBefore(script, entry);
        })();
            `,
        }}
      />
    </>
  );
};

export default SubscribeForm;
