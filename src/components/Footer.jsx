import { useState } from "react";
import {
  linkedin,
  github,
  itch,
  wechat,
  mail,
  phone,
} from "@/components/icons/Icons";
import FooterModal from "@/components/modal/FooterModal";

const Footer = () => {
  const [openWeChatModal, setOpenWeChatModal] = useState(false);
  const [openEmailModal, setOpenEmailModal] = useState(false);
  const [openPhoneModal, setOpenPhoneModal] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center gap-4 md:gap-8 pt-[8vh] pb-2">
        <a
          href="https://www.linkedin.com/in/geo-li/"
          style={{ color: "rgb(44, 100, 188)" }}
          target="_blank"
        >
          {linkedin}
        </a>
        <a
          href="https://github.com/Geo-Li?tab=repositories"
          className="text-black dark:text-white"
          target="_blank"
        >
          {github}
        </a>
        <a
          href="https://geo-li.itch.io/"
          style={{ color: "rgb(232, 103, 98)" }}
          target="_blank"
        >
          {itch}
        </a>
        <section id="wechat">
          <button
            onClick={() => setOpenWeChatModal(true)}
            style={{ color: "rgb(88, 190, 107)" }}
          >
            {wechat}
          </button>
          {openWeChatModal && (
            <FooterModal
              title="Please reach out to me on WeChat using the ID:"
              info={[{ label: "Weixin ID", ids: ["ZhuoyuanGeoLi"] }]}
              setOpenModal={setOpenWeChatModal}
              content="Please reach out to me on WeChat using the ID: ZhuoyuanGeoLi"
            />
          )}
        </section>
        <section>
          <button
            onClick={setOpenEmailModal}
            className="text-black dark:text-white"
          >
            {mail}
          </button>
          {openEmailModal && (
            <FooterModal
              title="Please reach out to me via Email at:"
              info={[
                {
                  label: "School Email:",
                  ids: [
                    "zhuoyul4@uci.edu",
                    "ZhuoyuanLi2025@u.northwestern.edu",
                  ],
                },
                {
                  label: "Personal Email:",
                  ids: ["KyriePrise@gmail.com"],
                },
                {
                  label: "Work Email:",
                  ids: ["GeoLi.work@gmail.com"],
                },
              ]}
              setOpenModal={setOpenEmailModal}
              content="Please reach out to me via Email at:
              ZhuoyuanLi2025@u.northwestern.edu"
            />
          )}
        </section>
        <section>
          <button
            onClick={setOpenPhoneModal}
            className="text-black dark:text-white"
          >
            {phone}
          </button>
          {openPhoneModal && (
            <FooterModal
              title="Please reach out to me at this Phone number:"
              info={[{ label: "Mobile", ids: ["949-351-8850"] }]}
              setOpenModal={setOpenPhoneModal}
              content="Please reach out to me at this phone number: 949-351-8850"
            />
          )}
        </section>
      </div>
      <div className="pb-5 text-center">
        <p className="text-sm mt-2 opacity-50">
          &copy; {new Date().getFullYear()}
          {} Zhuoyuan (Geo) Li. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
