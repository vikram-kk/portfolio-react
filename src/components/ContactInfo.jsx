import React from 'react'

const ContactInfo = ({ Icon, title, value }) => (
    <div className="bg-[#0a121e] border border-gray-800 p-6 rounded-2xl flex items-center gap-4 mb-4">
      <div className="bg-[#112235] p-3 rounded-xl text-cyan-400">
        <Icon size={24} />
      </div>
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="text-white font-medium">{value}</p>
      </div>
    </div>
  );

export default ContactInfo
