import SubscribeForm from '@/components/common/SubscribeForm';
import Image from 'next/image';
import Script from 'next/script';
import { useState } from 'react';

export default function Register({ integration, formDetail, getFormValues }: any) {
  const fields = formDetail?.fields || [];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    getFormValues(name, email);
  };
  return (
    <div className="w-full">
      <SubscribeForm />
      <div data-erxes-embed="ZVBRdQ" style={{ width: '100%', height: '300px' }}></div>
      <form onSubmit={handleSubmit}>
        <div key={fields[0]?._id} className="w-full border border-neutral-100 rounded-lg flex p-[5px]  mt-[15px]">
          <Image src="/images/sys_images/reg_contact_logo.svg" width={18} height={18} alt="" className="ml-[5px]" />
          <input
            type={fields[0]?.type}
            value={name}
            className="w-full outline-none text-[16px] ml-[10px] text-neutral-500"
            placeholder={fields[0]?.text}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div key={fields[1]?._id} className="w-full border border-neutral-100 rounded-lg flex p-[5px]  mt-[15px]">
          <Image src="/images/sys_images/reg_contact_logo.svg" width={18} height={18} alt="" className="ml-[5px]" />
          <input
            type={'email'}
            value={email}
            className="w-full outline-none text-[16px] ml-[10px] text-neutral-500"
            placeholder={fields[1]?.text}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full flex items-center">
          <input
            type="submit"
            value={'Бүртгүүлэх'}
            className="min-w-[100px] bg-orange-500 cursor-pointer text-neutral-0 text-12px px-[16px] py-[4px] md:text-14px md:px-[20px] md:py-[8px] lg:text-16px lg:px-[24px] lg:py-[12px] rounded-lg mt-[12px] "
          />
        </div>
      </form>
    </div>
  );
}
