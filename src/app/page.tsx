"use client";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-4">
      <div>
        <img
          className="aspect-video w-full rounded-md object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRepg-8guCe8OlCCKOFgg-sCnk7Vt8U5rNDXEul04kIA7ztAYAMG6xUIIK2&s=10"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">ระบบย่อยอาหาร</h1>
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
          ระบบย่อยอาหารทำหน้าที่ เปลี่ยนอาหารมีโมเลกุลขนาดใหญ่
          ให้เป็นสารอาหารที่มีโมเลกุลขนาดเล็กซึ่งร่างกายนำไปใช้ประโยชน์ในการสร้างพลังงาน
          สร้างความเจริญขั้นตอนต่างๆ
          ที่จะเปลี่ยนจากอาหารให้เป็นสารอาหารก่อนที่จะถูกดูดซึมเข้าสู่กระแสเลือดบริเวณผนังของลำไส้เล็ก
          การย่อยอาหารประกอบด้วยอวัยวะที่เกี่ยวข้อง น้ำย่อย และ ตัวเร่งปฏิกิริยา
        </p>
        <p>
          อวัยวะที่เกี่ยวข้อง ประกอบด้วย อวัยวะที่เกี่ยวข้องโดยตรง และโดยอ้อม
        </p>
        <h2 className="text-xl font-bold">
          อวัยวะที่เกี่ยวข้องโดยตรง ประกอบด้วย
        </h2>
        <img
          className="w-full rounded-md"
          src="https://www.scimath.org/images/uploads/upload2/hwkb17_073_002.jpg"
          alt=""
        />
        <p>
          1. <b>ปากและฟัน</b> (mouth and teeth) ประกอบด้วย
        </p>
        <p>
          1.1 ริมฝีปาก พบชนิดสัตว์ที่เลี้ยงลูกด้วยนม ประกอบด้วยเซลล์เยื่อบุ
          ติดต่อกับผนังเยื่อบุข้างแก้ม
        </p>
        <p>
          1.2 ช่องแก้ม ประกอบด้วยเซลล์
          เยื่อบุเป็นบริเวณที่ผลิตน้ำเมือกและเป็นทางเปิดออกของต่อมน้ำลาย
        </p>
        <p>1.3 ช่องปาก ประกอบด้วยเพดานปาก ลิ้นไก่ บริเวณใต้ลิ้น</p>
        <p>1.4 ต่อมน้ำลาย (salivary gland) อยู่รอบ ๆ ปาก มี 3 คู่</p>
        <img
          className="w-full rounded-md"
          src="https://www.scimath.org/images/uploads/upload2/cfhg574digtra_002.gif"
        />
        <p>
          1.4.1 ต่อมน้ำลาย ใต้กกหู (parotid gland)
          เป็นที่มีขนาดใหญ่ที่สุดอยู่ทางด้านล่างของหูทั้ง 2 ข้าง
          ประกอบด้วยเซลล์ที่ทำหน้าที่สร้างน้ำลายชนิดใส
          (serous)ถ้าต่อมนี้ติดเชื้อไวรัสจะทำให้อักเสบ บวม เรียกว่าโรคคางทูม
          ในเพศชายเชื้ออาจรุกลามไปถึงลูกอัณฑะทำให้เป็นหมันในที่สุด
        </p>
        <p>
          1.4.2 ต่อมน้ำลาย ใต้ขากรรไกร (submandibular gland) มีลักษณะคล้ายรูปไข่
          เปิดสู่เพดานล่างของปากทางด้นข้างของฟันตัดด้านล่าง
          ประกอบด้วยเซลล์ที่ทำหน้าที่สร้างน้ำลายชนิดใส และชนิดข้นเล็กน้อย
        </p>
        <p>
          1.4.3 ต่อมน้ำลายใต้ลิ้น (sublingual gland)
          อยู่ตรงกลางระหว่างขากรรไกรล่างบริเวณใต้ลิ้นประกอบด้วยเซลล์ที่ทำหน้าที่สร้างน้ำลายชนิดข้น
          (mucous)
        </p>
        <section className="bg-muted rounded-md p-4">
          <p>
            <b>ส่วนประกอบและคุณสมบัติของน้ำลาย</b>
          </p>
          <p>
            1. มีค่า pH ระหว่าง 6.2-7.4 ประสิทธิภาพของน้ำลายสูงสุดที่ pH = 6.8
            (กรดอ่อน ๆ)
          </p>
          <p>2. มีน้ำเป็นองค์ประกอบ 97-99 %</p>
          <p>
            3. เป็นสารที่มีสภาพหนืด ประกอบด้วย ฟอสฟอรัส และแคลเซียมในปริมาณสูง
          </p>
          <p>
            4. ประกอบด้วยน้ำย่อย (enzyme) ที่ทำหน้าที่ย่อยแป้ง คือ
            เอนไซม์ไทยาลินหรือเอนไซม์อะไมเลส(ptyalin or amylase)
          </p>
          <p>5. มีสารเมือก (mucus) ช่อยในการหล่อลื่น</p>
          <p>
            <b>หน้าที่ของน้ำลาย</b>
          </p>
          <p>1. ช่วยกลืนอาหารได้ง่ายขึ้น</p>
          <p>2. ควบคุมปริมาณน้ำในร่างกาย</p>
          <p>3. ทำหน้าที่ย่อยอาหารประเภทคาร์โบไฮเดรท</p>
          <p>
            4. ทำหน้าที่ทำลายอาหาร ให้ต่อมรับรส (tast bud)
            รับรสอาหารได้ช่วยทำความสะอาดปากและฟัน
          </p>
          <p>5. ช่วยให้เกิดการเคลื่อนไหวของลิ้นขณะพูด</p>
          <p>
            6. ขับสารบางชนิดออกมา (excretory) ได้แก่ ยูเรีย น้ำตาล ละสารพิษต่าง
            ๆ เช่น ปรอท (Hg) ตะกั่ว (Pb)
          </p>
        </section>
        <p>
          1.5 ลิ้น (tongue) ประกอบด้วยกล้ามเนื้อเรียบ
          ผนังของลิ้นเป็นตุ่มนูนขึ้นมาซึ่งประกอบด้วยเซลล์ประสาทมากมาย
          ลิ้นช่วยในการคลุกเคล้าอาหารและให้น้ำลายคลุกเคล้าอาหารได้ทั่วถึง
          และช่วยในการกลืน นอกจากนี้ยังช่วยในการให้เกิดเสียงและช่วยรับรสอีกด้วย
        </p>
        <p>
          ตำแหน่งของลิ้นที่ช่วยในการรับรส ปลายลิ้น รับรส หวาน ขอบลิ้นส่วนหน้า
          รับรส เค็ม ขอบลิ้นส่วนล่าง รับรส เปรี้ยว โคนลิ้น รับรส ขม
        </p>
        <p>1.6 ฟัน ประกอบด้วย</p>
        <p>
          1.6.1 ตัวฟัน เป็นส่วนที่โผล่ออกจากขากรรไกร เมื่อนำมาผ่าตามแนวยาวจะเห็น
          ส่วนประกอบดังนี้
        </p>
        <section className="bg-muted rounded-md p-4">
          <p>
            1. ชั้นเคลือบฟัน(enamel) ประกอบด้วย แคลเซียมฟลูออไรด์ (CaF2 )
            มีสีขาวเนื้อแน่นเป็นส่วนที่แข็งที่สุดในร่างกาย
            ทำหน้าที่ปกป้องเนื้อฟันไว้สำหรับบดเคี้ยวอาหาร
          </p>
          <p>
            2. ชั้นเนื้อฟัน (dentine) อยู่ในชั้นใต้ชั้นเคลือบฟัน
            ในส่วนนี้ประกอบด้วย cell ที่มีชีวิตทำหน้าที่สร้างเนื้อฟันได้
          </p>
          <p>
            3. ชั้นโพรงประสาทฟัน (neck) เนื้อคอฟัน ส่วนนี้ประกอบด้วย cell ประสาท
            และหลอดเลือดโยผ่านมาทางคลองรากฟัน
          </p>
        </section>
        <p>1.6.2 รากฟัน (root) เป็นส่วนที่ติดกับขากรรไกร หุ้มด้วยเหงือก</p>
        <section className="bg-muted rounded-md p-4">
          <p>
            <b>สาเหตุที่ทำให้เกิดฟันผุ</b>
            เนื่องจากมีจุลินทรีย์ในช่องปากย่อยสลายเศษอาหาร เช่น น้ำตาล
            เมื่อถูกย่อยจะได้กรด แล้วจะไปทำลายฟัน ดังนี้
          </p>
          <p>1. กัดสารเคลือบฟัน ทำให้เกิดร่อง</p>
          <p>2. กรดจะเจาะเข้าไปถึงชั้นเนื้อฟันและโพรงประสาทฟัน ทำให้ปวด</p>
          <p>3. เมื่อลามถึงรากฟัน ฟันจะหลุดออก</p>
          <p>
            <i className="text-muted-foreground">
              * จุลินทรีย์ใช้น้ำตาลสร้างเมือกเหนียวให้ติดกับตัวฟันเรียกว่า พลัค
              (plaque)
            </i>
          </p>
        </section>
        <section className="bg-muted rounded-md p-4">
          <p>
            <b>ชนิดของฟัน</b>
          </p>
          <p>
            1. ฟันน้ำนม (Temporary teeth) มีทั้งหมด 20 ซี่ บน 10 ล่าง 10
            ฟันน้ำนมจะงอกตั้งแต่ 6 เดือน - 12 ปี
            ฟันน้ำนมจะเริ่มหลุดตั้งแต่อายุประมาณ 2 ปีครึ่ง ถึง 12 ปี
          </p>
          <p>
            2. ฟันแท้ (Permanent teeth) มีทั้งหมด 28-32 ซี่
            แล้วแต่ฟันกรามหลังจะงอกครบหรือไม่ อยู่ขากรรไกรบน 16 ซี่ และ ขากรรไกร
            16 ซี่
          </p>
        </section>
        <hr />
        <img
          className="w-full rounded-md"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Illu01_head_neck.jpg/330px-Illu01_head_neck.jpg"
        />
        <p>
          2. <b>คอหอย</b> (pharynx)
          เป็นท่ออยู่ระหว่างด้านหลังของช่องปากและหลอดลม
          บริเวณนนี้เป็นจุดเชื่อมระหว่างหลอดลมกับหลอดอาหารโดยมีกลไกควบคุมการส่งอาหารหรืออากาศคนละเวลากัน
          นอกจากนี้ยังประกอบด้วยต่อน้ำเหลือง 3 คู่อยู่รอบ ๆ คอหอย
          มีหน้าที่ดักจับเชื้อโรค เรียกว่า “ต่อมทอนซิล” (tonsil)
        </p>
        <hr />
        <img
          className="w-full rounded-md"
          src="https://chgcancercenter.com/wp-content/uploads/2024/05/69249_gut-ts-Ts-100830420.jpg_86d5e6b8-c287-4379-8040-170217fb1160.jpeg"
        />
        <p>
          3. <b>หลอดอาหาร</b> (oesophagus) อยู่ต่อจากคอหอยอยู่ด้านหลังหลอดลม
          (trachea) ส่วนบนเป็นกล้ามเนื้อลายมีหูรูด
          ช่วยปิดเปิดหลอดอาหารระหว่างกลืนอาหารส่วนท้ายเป็นกล้ามเนื้อเรียบ
          ช่วยบีบส่งอาหารเป็นระยะ เรียกว่า เพอรีสตัลซีส (peristalsis)
          ช่วยให้อาหารเคลื่อนที่ได้สะดวก
        </p>
        <hr />
        <img
          className="w-full rounded-md"
          src="https://www.scimath.org/images/uploads/upload2/Digestivesystemwithliver_accessible_2012.jpg"
        />
        <p>
          4. <b>กระเพาะอาหาร</b> (stomach)
          อยู่บริเวณด้านซ้ายของช่องท้องกว้างประมาณ 5 นิ้ว ยาว 10 นิ้ว
          แบ่งออกเป็น 3 ส่วน
        </p>
        <p>4.1. คาร์ดิแอค (Cardiac) เป็นส่วนที่ต่อจากหลอดอาหาร</p>
        <p>
          4.2. ส่วนฟันดัส (Fundus) เป็นส่วนมีขนาดใหญ่เรียกว่า “บอดี้” (body)
        </p>
        <p>
          4.3. ไพโลรัส (Pylorus) เป็นส่วนท้ายของกระเพาะที่ต่อกับลำไส้เล็กตรง
          ทำหน้าที่ส่งอาหารสู่ลำไส้เล็กเป็นระยะ ๆ
        </p>
        <p>
          การย่อยในกระเพาะอาหาร อาหารจะถูกคลุกเคล้าอยู่ในกระเพาะด้วยการหดตัว
          และคลายตัวของกล้ามเนื้อที่แข็งแรงของกระเพาะ โปรตีนจะถูกย่อยในกระเพาะ
          โดยน้ำย่อยเพปซิน ซึ่งย่อยพันธะบางชนิดของเพปไทด์เท่านั้น
          ดังนั้นโปรตีนที่ถูกเพปซินย่อยส่วนใหญ่จึงเป็นพอลิเพปไทด์ที่สั้นลง
          ส่วนเรนนินช่วยเปลี่ยนเคซีน (Casein) ซึ่งเป็นโปรตีนในน้ำนมแล้ว
          รวมกับแคลเซียมทำให้มีลักษณะเป็นลิ่ม ๆ จากนั้นจะถูกเพปซินย่อยต่อไป
          ในกระเพาะอาหาร น้ำย่อยลิเพสไม่สามารถทำงานได้ เนื่องจากมีสภาพเป็นกรด
          โดยปกติอาหารจะอยู่ในกระเพาะอาหารนาน 30 นาทีถึง 3 ชั่วโมง
          ซึ่งขึ้นอยู่กับชนิดของอาหารนั้น ๆ
          กระเพาะอาหารก็มีการดูดซึมอาหารบางชนิดได้ แต่ปริมาณน้อยมาก เช่น น้ำ
          แร่ธาตุ น้ำตาลโมเลกุลเดี่ยว กระเพาะอาหารดูดซึมแอลกอฮอล์ได้ดี
          อาหารโปรตีน เช่น เนื้อวัว ย่อยยากกว่าเนื้อปลา
          ในการปรุงอาหารเพื่อให้ย่อยง่าย
          อาจใช้การหมักหรือใส่สารบางอย่างลงไปในเนื้อสัตว์เหล่านั้น เช่น
          ยางมะละกอ หรือสับปะรด
        </p>
        <hr />
        <img
          className="w-full rounded-md"
          src="https://media.istockphoto.com/id/1169433352/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%A5%E0%B8%B3%E0%B9%84%E0%B8%AA%E0%B9%89%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%81-%E0%B8%AD%E0%B8%A7%E0%B8%B1%E0%B8%A2%E0%B8%A7%E0%B8%B0%E0%B8%A0%E0%B8%B2%E0%B8%A2%E0%B9%83%E0%B8%99%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%A1%E0%B8%99%E0%B8%B8%E0%B8%A9%E0%B8%A2%E0%B9%8C.jpg?s=612x612&w=0&k=20&c=BoZUfcuqMLurKDCSom4IlipNlFW64rPOQOMoOj7HHyw="
        />
        <p>
          5. <b>ลำไส้เล็ก</b> (Small Intestine) ทำหน้าที่ย่อยอาหาร
          สารอาหารแทบทุกชนิดจะถูกย่อยและดูดซึมที่นี่ ได้แก่
        </p>
        <p>
          5.1 น้ำตาลโมเลกุลคู่ ที่ได้จากการย่อยแป้ง
          จะถูกย่อยต่อด้วยเอนไซม์มอลเทส (Maltase) ซูเครส (Sucrase) แลกเทส
          (Lactase) กลายเป็นน้ำตาลโมเลกุลเดี่ยว ได้แก่ กลูโคส (Glucose) ฟรักโทส
          (Fructose) กาแลกโทส (Galactose) และถูกดูดซึมเข้าสู่กระแสเลือด
        </p>
        <p>
          5.2 โปรตีนและเปปไทด์ จะถูกย่อยต่อด้วย เอนไซม์ทริปซิน (Trypsin)
          เอนไซม์คาร์บอกซิเพปทิเดส (Carboxypeptidase) ซึ่งสร้างจากตับอ่อน
          ได้เป็นกรดอะมิโนที่มีขนาดเล็ก สามารถดูดซึมได้
        </p>
        <p>
          5.3 ไขมัน จะถูกน้ำดีซึ่งสร้างจากตับ ย่อยให้แตกตัวเป็นเม็ดไขมันเล็กๆ
          จากนั้นจะถูกย่อยต่อด้วยเอนไซม์ลิเพส (Lipase) ซึ่งสร้างจากตับอ่อน
          ได้เป็นกรดไขมันและกลีเซอรอล (Glycerol)
        </p>
        <hr />
        <img
          className="w-full rounded-md"
          src="https://img.kapook.com/u/2018/patcharin/event/health/thon/ma6.jpg"
        />
        <p>
          6. <b>ลำไส้ใหญ่</b> (Large Intestine) ยาวประมาณ 1.5 เมตร
          เริ่มตั้งแต่ส่วนของอิเลียมจนถึงทวารหนัก แบ่งเป็น 4 ส่วน
        </p>
        <p>
          6.1. ซีกัม (Cecum) ต่อจากอิเลียมยาวประมาณ 5-8 เซนติเมตร
          ตรงรอยต่อมีหูรูด บริเวณนี้มีไส้เล็ก ๆ เรียกว่า “ไส้ติ่ง” (Appendix)
          ส่วน
        </p>
        <p>6.2. โคลอน (Colon) แบ่งเป็น 3 ตอน ตั้งฉากกันเป็นส่วนที่ยาวที่สุด</p>
        <p>
          6.3. ส่วนของเร็กตัม (Rectum) หรือเรียกว่าไส้ตรง
          สิ้นสุดที่ทวารหนักยาวประมาณ 12-15 ซม.
          อยู่ด้านหลังกระเพาะปัสสาวะหรือมดลูก
          บริเวณนี้มีแนวโน้มให้เกิดโรคมะเร็งมากที่สุด
        </p>
        <p>
          6.4. ช่องทวารหนัก (Anal Canal) ยาวประมาณ 2.5 - 3.5 ซม.
          ปลายสุดเปิดออกนอกร่างกายเรียกว่า “ทวารหนัก (Anus)”
          ประกอบด้วยหูรูด(sphincter) 2 แห่ง คือ ด้านนอกและด้านใน
          หูรูดด้านในอยู่นอกเหนืออำนาจควบคุมของจิตใจ
          หูรูดส่วนนอกอยู่ภายใต้อำนาจจิตใจ
        </p>
        <hr className="border-foreground" />
        <h2 className="text-xl font-bold">
          <b>อวัยวะที่เกี่ยวข้องโดยอ้อม ประกอบด้วย</b>
        </h2>
        <img
          className="w-full rounded-md"
          src="https://website-storage.princhealth.com/psuv/20221126121800-2%E0%B8%95%E0%B8%B1%E0%B8%9A%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3.jpg"
        />
        <p>
          1. <b>ตับ</b> (Liver) เป็นอวัยวะที่ใหญ่ที่สุดของร่างกายมี 2 ซีก
          ซ้าย-ขวา มีสีน้ำตาลเนื้อแน่น หนักประมาณ 3.3 - 3.5 ปอนด์
          ภายในประกอบด้วยก้อนเล็ก ๆ มากมายเรียกว่า “โลบุล (Lobul)”
          ระหว่างโลบุลมีช่องว่างเล็ก ๆ เป็นทางผ่านของเลือด เรียกว่า “ไซนูซอยด์
          (Sinusiod)” นอกจากนี้ยังมีถุงน้ำดีอยู่ด้วย
        </p>
        <section className="bg-muted rounded-md p-4">
          <p>
            <b>หน้าที่ของตับ</b>
          </p>
          <p>1. สร้างน้ำดีจากเม็ดเลือกแดงที่หมดอายุคือ ประมาณ 120 วัน</p>
          <p>2. สร้างเลือดในขณะที่ยังเป็นตัวอ่อนอยู่ (Fetus)</p>
          <p>3. ทำลายเม็ดเลือดแดง</p>
          <p>
            4. เปลี่ยนกลูโคสเป็นไกลโคเจน
            หรือสลายไกลโคเจนให้เป็นกลูโคสเมื่อร่างกายขาดแคลน
          </p>
          <p>
            5. ทำลายพิษที่ร่างกายรับเข้ามาหรือสร้างขึ้น เช่น แอลกอฮอล์ โลหะหนัก
            อะฟลาทอกซิล
          </p>
          <p>6. สร้างน้ำเหลืองประกอบด้วยเม็ดเลือดขาว ภูมิคุ้มกัน</p>
        </section>
        <hr />
        <img className="w-full rounded-md" src="" />
        <p>
          2. <b>ตับอ่อน</b> (Pancreas) มีลักษณะคล้ายใบไม้ยาวประมาณ 20-25 ซม.
          สีแดงหรือสีเทา มีต่อเปิดสู่ส่วนโค้งของดูโอดีนัม
          ทำหน้าที่เป็นต่อมมีท่อและต่อมไร้ท่อ ผลิตของเหลวได้ประมาณ 2 ลิตร
          ซึ่งประกอบด้วย
        </p>
        <p>2.1. น้ำย่อย ซึ่งทำหน้าที่ย่อยโปรตีน คาร์โบไฮเดรท และไขมัน</p>
        <p>
          2.2. โซเดียมไบคาร์บอเนต มีคุณสมบัติเป็นเบส (ด่าง)
          เพื่อปรับสภาพอาหารที่มาจากกระเพาะอาหารซึ่งมีสภาพเป็นกรด
          ให้มีสภาพเป็นกลางหรือเป็นเบสอ่อน ๆ เพื่อจะไม่ทำลายเยื่อบุของลำไส้เล็ก
          (Villi)
        </p>
        <hr className="border-foreground" />
        <section>
          <QuizSection />
        </section>

        <hr className="border-foreground" />

        <iframe
          width="560"
          height="315"
          className="w-full rounded-md"
          src="https://www.youtube.com/embed/chaQpz9EXtU?si=pdLTeTscphxvTLNK&amp;controls=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          className="w-full rounded-md"
          src="https://www.youtube.com/embed/Og5xAdC8EUI?si=uBIdVuFxjCj1Rjx0&amp;controls=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          className="w-full rounded-md"
          src="https://www.youtube.com/embed/P4hHgUvUHk4?si=GPElcZoqavfK31co&amp;controls=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <section className="rounded-md border p-4">
          <div className="space-y-2">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 0,
                paddingTop: "56.25%",
                paddingBottom: 0,
                overflow: "hidden",
                borderRadius: 8,
                willChange: "transform",
              }}
            >
              <iframe
                loading="lazy"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  border: "none",
                  padding: 0,
                  margin: 0,
                }}
                src="https://www.canva.com/design/DAGr6_AnRFY/sAJWdVfzRbSeEEHaAJW8dQ/view?embed"
                allowFullScreen
                allow="fullscreen"
              ></iframe>
            </div>

            <Button
              className="h-auto w-full justify-start overflow-hidden p-0"
              variant="link"
              asChild
            >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfOuP_5Dps205ivcrQG54Xoxc9X_2KKK5Ldd9afjZxM-UOTUA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
              >
                ลิงค์ : แบบทดสอบก่อนเรียน
              </Link>
            </Button>
          </div>
        </section>
        <div>
          <p>
            <b>ที่มา</b>
          </p>

          <Button
            className="h-auto w-full justify-start overflow-hidden p-0"
            variant="link"
            asChild
          >
            <Link
              href="https://www.scimath.org/lesson-biology/item/7036-digestive-system-7036"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.scimath.org/lesson-biology/item/7036-digestive-system-7036{" "}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function QuizSection() {
  // 10 questions (with choices and answer index)
  const questions = [
    {
      question:
        "อวัยวะใดต่อไปนี้เป็นอวัยวะที่เกี่ยวข้องโดยตรงกับระบบย่อยอาหาร?",
      choices: ["ตับ", "ลำไส้เล็ก", "ตับอ่อน", "ถุงน้ำดี"],
      answer: 1,
    },
    {
      question: "หน้าที่หลักของน้ำลายคืออะไร?",
      choices: [
        "ช่วยดูดซึมไขมัน",
        "ช่วยกลืนอาหารและย่อยคาร์โบไฮเดรต",
        "สร้างเม็ดเลือดขาว",
        "ย่อยโปรตีน",
      ],
      answer: 1,
    },
    {
      question: "ฟันแท้ของมนุษย์มีจำนวนกี่ซี่?",
      choices: ["20 ซี่", "28-32 ซี่", "16 ซี่", "24 ซี่"],
      answer: 1,
    },
    {
      question: "เอนไซม์ใดในน้ำลายที่ช่วยย่อยแป้ง?",
      choices: ["เพปซิน", "ลิเพส", "ไทยาลิน (ptyalin)", "ทริปซิน"],
      answer: 2,
    },
    {
      question: "อวัยวะใดทำหน้าที่ผลิตน้ำดี?",
      choices: ["ตับ", "กระเพาะอาหาร", "ลำไส้เล็ก", "ไต"],
      answer: 0,
    },
    {
      question: "ส่วนใดของลำไส้ใหญ่ที่มีแนวโน้มเกิดโรคมะเร็งมากที่สุด?",
      choices: [
        "ซีกัม (Cecum)",
        "โคลอน (Colon)",
        "เร็กตัม (Rectum)",
        "ไส้ติ่ง (Appendix)",
      ],
      answer: 2,
    },
    {
      question: "หน้าที่ของตับอ่อนคืออะไร?",
      choices: [
        "สร้างน้ำดี",
        "สร้างน้ำย่อยและโซเดียมไบคาร์บอเนต",
        "ดูดซึมสารอาหาร",
        "สร้างเม็ดเลือดแดง",
      ],
      answer: 1,
    },
    {
      question: "เอนไซม์ใดที่ช่วยย่อยโปรตีนในกระเพาะอาหาร?",
      choices: ["เพปซิน", "มอลเทส", "ลิเพส", "ซูเครส"],
      answer: 0,
    },
    {
      question: "ไส้ติ่ง (Appendix) อยู่ในส่วนใดของลำไส้ใหญ่?",
      choices: ["โคลอน", "ซีกัม", "เร็กตัม", "ไส้ตรง"],
      answer: 1,
    },
    {
      question: "สารใดในน้ำลายที่ช่วยหล่อลื่นอาหาร?",
      choices: ["ฟอสฟอรัส", "แคลเซียม", "เมือก (mucus)", "เอนไซม์"],
      answer: 2,
    },
  ];

  // สุ่ม index หลัง mount เท่านั้น
  const [randomIndex, setRandomIndex] = useState<number | null>(null);

  // สุ่มหลัง mount เพื่อป้องกัน hydration mismatch
  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * questions.length));
  }, [questions.length]);

  // State สำหรับคำตอบและผลลัพธ์
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // ถ้ายังไม่สุ่ม index ให้แสดง loading
  if (randomIndex === null) {
    return (
      <div className="mt-8 rounded-md border p-4">
        <h2 className="mb-2 text-lg font-bold">แบบทดสอบท้ายบท (สุ่ม 1 ข้อ)</h2>
        <div className="text-muted-foreground">กำลังโหลด...</div>
      </div>
    );
  }

  const q = questions[randomIndex];
  const handleSubmit = () => {
    if (selected !== null) setSubmitted(true);
  };
  const isCorrect = submitted && Number(selected) === q.answer;

  return (
    <div
      className={cn(
        "rounded-md border p-4",
        submitted ? (isCorrect ? "border-green-600" : "border-red-600") : null,
      )}
    >
      <h2 className="mb-2 text-lg font-bold">แบบทดสอบท้ายบท (สุ่ม 1 ข้อ)</h2>
      <div>
        <p className="mb-2">{q.question}</p>
        <RadioGroup
          value={selected ?? ""}
          onValueChange={(v) => {
            setSelected(v);
            setSubmitted(false);
          }}
          className="mb-4 space-y-2"
        >
          {q.choices.map((choice, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <RadioGroupItem
                value={String(idx)}
                id={`choice-${idx}`}
                disabled={submitted}
              />
              <label htmlFor={`choice-${idx}`} className="cursor-pointer">
                {choice}
              </label>
            </div>
          ))}
        </RadioGroup>
        {!submitted ? (
          <Button
            className="w-full"
            onClick={handleSubmit}
            disabled={selected === null}
          >
            ตอบ
          </Button>
        ) : (
          <div className="mt-2">
            {isCorrect ? (
              <span className="font-semibold text-green-600">ถูกต้อง!</span>
            ) : (
              <span className="font-semibold text-red-600">
                ไม่ถูกต้อง เฉลย: {q.choices[q.answer]}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
