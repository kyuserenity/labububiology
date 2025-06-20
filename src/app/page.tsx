import Image from "next/image";

export default function Page() {
  return (
    <div className="space-y-4">
      <div>
        <Image
          width={1600}
          height={900}
          alt=""
          className="w-full rounded-md"
          src="/banner.webp"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">
          ทางเดินอาหารหรือระบบย่อยอาหาร ทำงานอย่างไร?
        </h1>
        <div className="text-muted-foreground flex flex-wrap items-center gap-4">
          <p>7 มิถุนายน 2025</p>
          <div className="bg-muted-foreground/50 h-4 w-0.5"></div>
          <p>งานชีววิทยา</p>
          <div className="bg-muted-foreground/50 h-4 w-0.5"></div>
          <p>กลุ่มลาบูบี้</p>
        </div>
      </div>
      <div className="space-y-4">
        <p>
          การทำงานอย่างมีสปิริตของระบบในร่างกายเราตั้งแต่ ปาก หลอดอาหาร
          กระเพาะอาหาร ตับ ถุงน้ำดี ลำไส้เล็ก ตับอ่อน ลำไส้ใหญ่ ทวารหนัก
        </p>
        <p>
          เรามาทำความรู้จักกับระบบย่อยอาหารว่ามีอวัยวะส่วนใดบ้างที่มีความเกี่ยวข้อง
        </p>
        <p className="text-xl">
          <b>1. ปาก</b>
        </p>
        <p>
          ประกอบไปด้วย ริมฝีปาก มีฟัน ทำหน้าที่ตัดบดเคี้ยวอาหารให้มีขนาดเล็กลง
          หรือละเอียด มีลิ้น ทำหน้าที่คลุกเคล้าอาหารร่วมกับน้ำลาย{""}
          ให้อาหารที่รับประทานไปอ่อนนุ่ม และในน้ำลายจะมี
          เอนไซม์ที่ช่วยย่อยคาร์โบไฮเดรต ตอนที่เรากลืนอาหารส่งต่อไปยังคอหอย
          ผ่านไปสู่หลอดอาหาร
        </p>
        <p className="text-xl">
          <b>2. หลอดอาหาร</b>
        </p>
        <p>
          มีลักษณะเป็นท่องผนังซึ่งประกอบด้วย
          กล้ามเนื้อที่หดและคลายตัวเพื่อรับส่งก้อนอาหารจากปากส่งต่อไปยัง
          กระเพาะอาหาร
        </p>
        <p className="text-xl">
          <b>3. กระเพาะอาหาร</b>
        </p>
        <p>
          มีลักษณะเป็นถุงรูปตัวเจ รับอาหารต่อมาจากหลอดอาหารและมี หูรูด
          ที่ส่วนต่อกับหลอดอาหารทำให้อาหารไม่สามารถย้อนกลับทางเดิมได้
        </p>
        <div>
          <p className="font-semibold">ส่วนประกอบของกระเพาะอาหาร</p>
          <p>
            - กล้ามเนื้อผนังด้านในขรุขระ มีกรดและเอนไซม์สำหรับย่อยโปรตีน
            เมื่อผ่านการย่อยให้เป็นของเหลวข้นในกระเพาะอาหาร
          </p>
          <p>
            -
            ส่วนปลายของกระเพาะอาหารจะกับลำไส้เล็กและมีหูรูดที่ควบคุมการเคลื่อนที่ของอาหาร
            จากกระเพาะหารไปต่อไปยังลำไส้เล็ก
            การหดตัวและคลายตัวของกล้ามเนื้อที่ผนัง
            นอกจากจะทำให้อาหารมีขนาดเล็กลงและคลุกเคล้ากับกรอดและเอนไซม์ได้ดีแล้วยังมีส่วนช่วยในการดันให้อาหารผ่านหูรูดไปยังลำไส้เล็กต่อไปได้อีก
          </p>
        </div>
        <p className="text-xl">
          <b>4. ลำไส้เล็ก</b>
        </p>
        <p>
          เป็นอวัยวะที่ต่อจากกระเพาะอาหาร มีลักษณะเป็นท่อยาวขดไปมาอยู่ในช่องท้อง
          เป็นอวัยวะสุดท้ายในทางเดินอาหารที่มีกระบวนการย่อยอาหาร
          เมื่ออาหารเคลื่อนที่ผ่านลำไส้เล็กจะมีเอนไซม์จากลำไส้เล็กมาย่อยดปรตีน
          คาร์โบไฮเดรต ไขมัน โดยจะทำงานร่วมกันกับน้ำดีจากตับและเอนไซม์จากตับอ่อน
          ซึ่งการย่อยอาหารจะเสร็จสิ้นที่ลำไส้เล็ก
          นอกจากนี้ลำไส้เล็กยังมีหน้าที่สำคัญในการดูดซึมสารอาหารทุกประเภทอีกด้วย
          ทั้งโปรตีนคาร์ไบไฮเดรต ไขมัน น้ำ
          รวมทั้งเกลือแร่และวิตามินที่ละลายออกมาจากอาหาร
          ทั้งหมดจะถูดดูดซึมเข้าสู่หลอดเลือดและท่อน้ำเหลืองบริเวณผนังด้านในของลำไส้เล็ก
          ซึ่งมีลักษณะยื่นออกมาคล้ายนิ้วมือขนาดเล็กเป็นจำนวนมาก
        </p>
        <p className="text-xl">
          <b>5. ลำไส้ใหญ่</b>
        </p>
        <p>
          มีลักษณะเป็นท่อ
          มีหน้าที่ดูซึมน้ำและเกลือแร่จากกากอาหารที่ย่อไม่ได้หรือย่อยไม่หมดจากลำไส้เล็กทำให้กากอาหารมีความแข็งตัวขึ้นส่วนของปลายลำไส้ใหญ่มีลักษณะตรงเป็นที่เก็บรวบรวมกากอาหารก่อนส่งไปยังทวารหนัก
        </p>
        <p className="text-xl">
          <b>6. ทวารหนัก</b>
        </p>
        <p>
          เป็นช่องเปิดที่อยู่ส่วนท้ายสุดของทางเดินอาหาร ทำหน้าขับกากอาหาร
          หรือที่เราเรียกว่าอุจาระ ออกสู่ภายนอกร่างกาย
        </p>
        <p className="text-xl">
          <b>7. ตับอ่อน</b>
        </p>
        <p>
          มีลักษณะคล้ายใบไม้ มีตำแหน่งอยู่ด้านหลังของกระเพาะอาหาร
          ตับอ่อนไม่ได้เป็นทางผ่านของอาหาร
          แต่มีหน้าที่เกี่ยวข้องกับการย่อยอาหารโดยสร้างเอนไซม์ส่งไปยังลำไส้เล็กเพื่อช่วยย่อยโปรตีน
          คาร์โบไฮเดรต และไขมัน
        </p>
        <p className="text-xl">
          <b>7. ตับและถุงน้ำดี</b>
        </p>
        <p>
          เป็นอวัยที่มีขนาดใหญ่ที่สุดในบรรดาอวัยวะในช่องท้อง
          ไม่ได้เป็นทางผ่านอาหาร
          แต่มีหน้าที่เกี่ยวข้องกับการย่อยอาหารโดยสร้างน้ำดีส่งไปเก็บที่ถุงน้ำดี
          มีลักษณะเป็นถุงมีท่อต่อไปยังสำไล้เล็กส่วนต้น
          น้ำดีช่วยในการแตกตัวของไขมันในอาหาร
        </p>
      </div>
    </div>
  );
}
