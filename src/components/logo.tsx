import Image from 'next/image';
import React from 'react';

export default function Logo() {
  return (
    <Image
      src="https://bytegrad.com/course-assets/projects/evento/api/events"
      alt="EVENTO logo"
      width={53}
      height={12}
    />
  );
}
