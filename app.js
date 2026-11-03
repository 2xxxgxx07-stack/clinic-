/**
 * OPHTHALMOLOGY COURSE MANAGEMENT (ระบบจัดการคอร์สจักษุ)
 * Core Application Logic & State Management
 */

// 1. Initial Mock Data adhering to specification
let coursesData = [
  {
    id: 1,
    lastActionDate: "25 ต.ค. 69 (10:00 น.)",
    courseCode: "CRS-096",
    hn: "HN-690124",
    patientName: "นาย ชัยรัตน์ โสภณ",
    phone: "087-123-9876",
    packageName: "คอร์สเลเซอร์รักษาตาแห้ง (IPL Dry Eye)",
    eyeLaterality: "OU", // OU: Both, OD: Right, OS: Left
    usedSessions: 2,
    totalSessions: 4,
    expireDate: "25 ต.ค. 70",
    nextAppointment: "8 พ.ย. 69",
    status: "ready", // ready | pending-payment | finished
    statusLabel: "✓ พร้อมใช้สิทธิ์",
    isTodayActive: true,
    isWaiting: true,
    doctor: "นพ. วินัย เลิศเวชกุล"
  },
  {
    id: 2,
    lastActionDate: "25 ต.ค. 69 (09:15 น.)",
    courseCode: "CRS-097",
    hn: "HN-690188",
    patientName: "ด.ช. ปัณณธร วงศ์เจริญ",
    phone: "081-456-7890",
    packageName: "คอร์สกระตุ้นกล้ามเนื้อตาเด็ก (Vision Therapy)",
    eyeLaterality: "OU",
    usedSessions: 5,
    totalSessions: 8,
    expireDate: "15 ม.ค. 70",
    nextAppointment: "25 ต.ค. 69 (วันนี้)",
    status: "ready",
    statusLabel: "✓ พร้อมใช้สิทธิ์",
    isTodayActive: true,
    isWaiting: true,
    doctor: "พญ. สุภัทรา รักษ์ดวงตา"
  },
  {
    id: 3,
    lastActionDate: "24 ต.ค. 69 (14:30 น.)",
    courseCode: "CRS-098",
    hn: "HN-690045",
    patientName: "นาง วิไลพร มิ่งขวัญ",
    phone: "089-987-6543",
    packageName: "แพ็กเกจฉีดยาน้ำวุ้นตา (Anti-VEGF)",
    eyeLaterality: "OD",
    usedSessions: 2,
    totalSessions: 3,
    expireDate: "30 พ.ย. 69",
    nextAppointment: "25 ต.ค. 69 (วันนี้)",
    status: "ready",
    statusLabel: "✓ พร้อมใช้สิทธิ์",
    isTodayActive: true,
    isWaiting: false,
    doctor: "พญ. รัชดาพร เกียรติไพบูลย์"
  },
  {
    id: 4,
    lastActionDate: "22 ต.ค. 69 (11:00 น.)",
    courseCode: "CRS-099",
    hn: "HN-689912",
    patientName: "นาย สมศักดิ์ กิจเจริญ",
    phone: "086-332-1144",
    packageName: "แพ็กเกจตรวจติดตามต้อหินประจำปี (Glaucoma Care)",
    eyeLaterality: "OU",
    usedSessions: 1,
    totalSessions: 4,
    expireDate: "22 ต.ค. 70",
    nextAppointment: "22 ม.ค. 70",
    status: "pending-payment",
    statusLabel: "ค้างชำระงวด 2",
    isTodayActive: false,
    isWaiting: false,
    doctor: "นพ. วินัย เลิศเวชกุล"
  },
  {
    id: 5,
    lastActionDate: "25 ต.ค. 69 (08:45 น.)",
    courseCode: "CRS-100",
    hn: "HN-690215",
    patientName: "นาง พรรณี เด่นดวง",
    phone: "082-778-9900",
    packageName: "คอร์สเลเซอร์รักษาตาแห้ง (IPL Dry Eye)",
    eyeLaterality: "OU",
    usedSessions: 3,
    totalSessions: 4,
    expireDate: "10 ธ.ค. 69",
    nextAppointment: "10 พ.ย. 69",
    status: "ready",
    statusLabel: "✓ พร้อมใช้สิทธิ์",
    isTodayActive: true,
    isWaiting: true,
    doctor: "นพ. วินัย เลิศเวชกุล"
  },
  {
    id: 6,
    lastActionDate: "23 ต.ค. 69 (15:20 น.)",
    courseCode: "CRS-101",
    hn: "HN-690089",
    patientName: "นาย เกรียงไกร มั่นคง",
    phone: "084-112-2334",
    packageName: "แพ็กเกจเลเซอร์รักษาเบาหวานขึ้นจอตา (PRP Laser)",
    eyeLaterality: "OS",
    usedSessions: 2,
    totalSessions: 3,
    expireDate: "28 พ.ย. 69",
    nextAppointment: "2 พ.ย. 69",
    status: "ready",
    statusLabel: "✓ พร้อมใช้สิทธิ์",
    isTodayActive: false,
    isWaiting: false,
    doctor: "พญ. รัชดาพร เกียรติไพบูลย์"
  },
  {
    id: 7,
    lastActionDate: "25 ต.ค. 69 (11:15 น.)",
    courseCode: "CRS-102",
    hn: "HN-690230",
    patientName: "นาง สมพร สิทธิโชค",
    phone: "085-667-8899",
    packageName: "คอร์สสลายต้อกระจกและเปลี่ยนเลนส์ตา (Phaco)",
    eyeLaterality: "OD",
    usedSessions: 0,
    totalSessions: 1,
    expireDate: "25 พ.ย. 69",
    nextAppointment: "25 ต.ค. 69 (วันนี้)",
    status: "ready",
    statusLabel: "✓ พร้อมใช้สิทธิ์",
    isTodayActive: true,
    isWaiting: true,
    doctor: "นพ. ภัทรดนัย พิชิตชัย"
  },
  {
    id: 8,
    lastActionDate: "20 ต.ค. 69 (13:10 น.)",
    courseCode: "CRS-103",
    hn: "HN-689840",
    patientName: "นาย อนันต์ รัตนเมธา",
    phone: "083-445-5667",
    packageName: "คอร์สกระตุ้นกล้ามเนื้อตาเด็ก (Vision Therapy)",
    eyeLaterality: "OU",
    usedSessions: 7,
    totalSessions: 8,
    expireDate: "5 พ.ย. 69",
    nextAppointment: "28 ต.ค. 69",
    status: "ready",
    statusLabel: "✓ พร้อมใช้สิทธิ์",
    isTodayActive: false,
    isWaiting: false,
    doctor: "พญ. สุภัทรา รักษ์ดวงตา"
  }
];

// Initial History Log (ประวัติการตัดคอร์สย้อนหลัง)
let deductionHistory = [
  {
    id: 101,
    timestamp: "25 ต.ค. 69 | 13:45 น.",
    courseCode: "CRS-094",
    hn: "HN-690110",
    patientName: "นาง นภา อมรวิเชียร",
    packageName: "คอร์สเลเซอร์รักษาตาแห้ง (IPL Dry Eye)",
    sessionNumber: 3,
    totalSessions: 4,
    eyeLaterality: "OU",
    doctor: "นพ. วินัย เลิศเวชกุล",
    nurse: "พว. สมศรี สีแดง",
    room: "ห้องเลเซอร์ตาแห้ง IPL Room 1",
    param: "IOP: R=15, L=14 mmHg | Laser 12.5 J/cm²",
    notes: "คนไข้รู้สึกสบายตาขึ้นหลังทำ ไม่พบรอยแดงหรือการระคายเคือง"
  },
  {
    id: 102,
    timestamp: "25 ต.ค. 69 | 11:20 น.",
    courseCode: "CRS-091",
    hn: "HN-690055",
    patientName: "นาย ทนง รุ่งอรุณ",
    packageName: "แพ็กเกจฉีดยาน้ำวุ้นตา (Anti-VEGF)",
    sessionNumber: 2,
    totalSessions: 3,
    eyeLaterality: "OD",
    doctor: "พญ. รัชดาพร เกียรติไพบูลย์",
    nurse: "พว. กัลยา นวลผ่อง",
    room: "ห้องหัตถการปลอดเชื้อ Minor OR-Eye 2",
    param: "IOP ก่อนฉีด: 16 mmHg, หยอดตาชาและ Antiseptic 3 รอบ",
    notes: "ฉีดยาเข้าวุ้นตาขวาเรียบร้อยดี ไม่มีภาวะแทรกซ้อน"
  },
  {
    id: 103,
    timestamp: "25 ต.ค. 69 | 10:15 น.",
    courseCode: "CRS-088",
    hn: "HN-689970",
    patientName: "ด.ญ. กวิตา แสนสุข",
    packageName: "คอร์สกระตุ้นกล้ามเนื้อตาเด็ก (Vision Therapy)",
    sessionNumber: 4,
    totalSessions: 8,
    eyeLaterality: "OU",
    doctor: "พญ. สุภัทรา รักษ์ดวงตา",
    nurse: "พว. สมศรี สีแดง",
    room: "ห้องฝึกการมองเห็น Vision Therapy Room",
    param: "Accommodation Amplitude +2.50 D",
    notes: "ฝึก Binocular Fusion ผู้ป่วยให้ความร่วมมือดีมาก"
  }
];

// App State
let currentFilter = 'all'; // all | ready | pending-payment | ou | od-os
let currentSearch = '';
let activeKpiFilter = null; // 'today' | 'waiting' | 'completed' | 'expiring' | null
let activeDeductCourse = null;

// Canvas Drawing State
let canvas, ctx;
let isDrawing = false;
let hasSigned = false;

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  initLiveClock();
  initCanvas();
  renderKPIs();
  renderTable();
  setupEventListeners();
  updateTotalBadges();
  initAppointments();
  initQueue();
  initBilling();
  initRecords();
  renderPharmacyInventory();
  if (typeof renderPharmacyOrderQueue === 'function') renderPharmacyOrderQueue();
  renderHomeDashboard();
  triggerHomeEnterAnimation();
  if (typeof initAccessControlSystem === 'function') {
    initAccessControlSystem();
  }
  if (typeof renderSettingsMasterDataView === 'function') {
    renderSettingsMasterDataView();
  }
});

// Setup Live Clock
function initLiveClock() {
  const clockEl = document.getElementById('liveClock');
  const updateTime = () => {
    const now = new Date();
    const thaiMonths = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
    const day = now.getDate();
    const month = thaiMonths[now.getMonth()];
    const year = now.getFullYear() + 543;
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    if (clockEl) {
      clockEl.textContent = `${day} ${month} ${year} | ${hours}:${mins} น.`;
    }
  };
  updateTime();
  setInterval(updateTime, 30000);
}

// Setup Event Listeners
function setupEventListeners() {
  // Search input with debounce
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      if (clearSearchBtn) {
        clearSearchBtn.style.display = currentSearch ? 'flex' : 'none';
      }
      renderTable();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearch = '';
      clearSearchBtn.style.display = 'none';
      renderTable();
    });
  }

  // Filter chips
  document.querySelectorAll('.filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      activeKpiFilter = null;
      updateFilterBanner();
      renderTable();
    });
  });

  // Drawer search
  const drawerSearchInput = document.getElementById('drawerSearchInput');
  if (drawerSearchInput) {
    drawerSearchInput.addEventListener('input', (e) => {
      renderHistoryTimeline(e.target.value.trim().toLowerCase());
    });
  }
}

// Render KPI Cards Numbers
function renderKPIs() {
  const countToday = coursesData.filter(c => c.isTodayActive).length + 18; // base realistic clinic stats
  const countWaiting = coursesData.filter(c => c.isWaiting).length + 4;
  const countSuccess = deductionHistory.length + 13;
  const countExpiring = coursesData.filter(c => (c.totalSessions - c.usedSessions <= 1)).length + 8;

  const elToday = document.getElementById('kpiCountToday');
  const elWaiting = document.getElementById('kpiCountWaiting');
  const elSuccess = document.getElementById('kpiCountSuccess');
  const elExpiring = document.getElementById('kpiCountExpiring');

  if (elToday) elToday.textContent = countToday;
  if (elWaiting) elWaiting.textContent = countWaiting;
  if (elSuccess) elSuccess.textContent = countSuccess;
  if (elExpiring) elExpiring.textContent = countExpiring;
}

// Update Filter Counters on Chips
function updateTotalBadges() {
  const elAll = document.getElementById('countFilterAll');
  if (elAll) elAll.textContent = coursesData.length;
}

// Filter By KPI Card Click
function filterByKpi(type) {
  activeKpiFilter = type;
  
  // Update banner
  const banner = document.getElementById('activeFilterBanner');
  const bannerLabel = document.getElementById('activeFilterLabel');

  let labelText = '';
  if (type === 'today') labelText = 'คอร์สที่มีการใช้งาน/นัดตรวจในวันนี้';
  else if (type === 'waiting') labelText = 'คนไข้ที่รอทำหัตถการตาในคลินิกขณะนี้';
  else if (type === 'completed') labelText = 'รายการที่ทำหัตถการตัดคอร์สสำเร็จแล้ว';
  else if (type === 'expiring') labelText = 'คอร์สใกล้หมด (เหลือ 1 ครั้ง หรือใกล้หมดอายุ)';

  if (banner && bannerLabel) {
    bannerLabel.textContent = `กำลังกรองข้อมูลจาก KPI: ${labelText}`;
    banner.style.display = 'flex';
  }

  // Highlight card visual
  document.querySelectorAll('.kpi-card').forEach(c => c.classList.remove('ring-focus'));
  if (type === 'today') document.getElementById('kpiCard1')?.classList.add('ring-focus');
  if (type === 'waiting') document.getElementById('kpiCard2')?.classList.add('ring-focus');
  if (type === 'completed') document.getElementById('kpiCard3')?.classList.add('ring-focus');
  if (type === 'expiring') document.getElementById('kpiCard4')?.classList.add('ring-focus');

  renderTable();
}

// Reset all filters
function resetAllFilters() {
  currentFilter = 'all';
  currentSearch = '';
  activeKpiFilter = null;

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  if (clearSearchBtn) clearSearchBtn.style.display = 'none';

  document.querySelectorAll('.filter-chip').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === 'all');
  });

  const banner = document.getElementById('activeFilterBanner');
  if (banner) banner.style.display = 'none';

  renderTable();
}

function updateFilterBanner() {
  const banner = document.getElementById('activeFilterBanner');
  const bannerLabel = document.getElementById('activeFilterLabel');
  if (!banner || !bannerLabel) return;

  if (activeKpiFilter) {
    banner.style.display = 'flex';
  } else if (currentFilter !== 'all') {
    let name = '';
    if (currentFilter === 'ready') name = 'เฉพาะคอร์สที่พร้อมใช้สิทธิ์';
    else if (currentFilter === 'pending-payment') name = 'เฉพาะคอร์สที่ค้างชำระงวด';
    else if (currentFilter === 'ou') name = 'เฉพาะหัตถการตาทั้งสองข้าง (OU)';
    else if (currentFilter === 'od-os') name = 'เฉพาะหัตถการตาข้างเดียว (OD/OS)';
    
    bannerLabel.textContent = `กำลังกรองข้อมูล: ${name}`;
    banner.style.display = 'flex';
  } else {
    banner.style.display = 'none';
  }
}

// Main Table Render Function
function renderTable() {
  const tbody = document.getElementById('courseTableBody');
  const emptyState = document.getElementById('emptyState');
  const showingCount = document.getElementById('showingCount');
  const totalCount = document.getElementById('totalCount');

  if (!tbody) return;

  // Filter Logic
  let filtered = coursesData.filter(item => {
    // 1. Search Query Match
    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      const match = item.courseCode.toLowerCase().includes(q) ||
                    item.hn.toLowerCase().includes(q) ||
                    item.patientName.toLowerCase().includes(q) ||
                    item.phone.toLowerCase().includes(q) ||
                    item.packageName.toLowerCase().includes(q);
      if (!match) return false;
    }

    // 2. Chip Filter Match
    if (currentFilter === 'ready' && item.status !== 'ready') return false;
    if (currentFilter === 'pending-payment' && item.status !== 'pending-payment') return false;
    if (currentFilter === 'ou' && item.eyeLaterality !== 'OU') return false;
    if (currentFilter === 'od-os' && (item.eyeLaterality !== 'OD' && item.eyeLaterality !== 'OS')) return false;

    // 3. KPI Filter Match
    if (activeKpiFilter === 'today' && !item.isTodayActive) return false;
    if (activeKpiFilter === 'waiting' && !item.isWaiting) return false;
    if (activeKpiFilter === 'completed' && item.usedSessions === 0) return false;
    if (activeKpiFilter === 'expiring' && (item.totalSessions - item.usedSessions > 1)) return false;

    return true;
  });

  if (showingCount) showingCount.textContent = filtered.length;
  if (totalCount) totalCount.textContent = coursesData.length;

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    if (emptyState) emptyState.style.display = 'flex';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  let html = '';
  filtered.forEach(item => {
    // Eye Tag Styling
    let eyeClass = 'eye-ou';
    let eyeText = 'OU ทั้งสองข้าง';
    if (item.eyeLaterality === 'OD') {
      eyeClass = 'eye-od';
      eyeText = 'OD ตาขวา';
    } else if (item.eyeLaterality === 'OS') {
      eyeClass = 'eye-os';
      eyeText = 'OS ตาซ้าย';
    }

    // Progress percentage
    const percent = Math.min(100, Math.round((item.usedSessions / item.totalSessions) * 100));
    const remaining = item.totalSessions - item.usedSessions;
    let progressFillClass = 'progress-bar-fill';
    if (percent === 100) progressFillClass += ' complete';
    else if (remaining === 1) progressFillClass += ' warning';

    // Status Badge
    let statusClass = 'status-ready';
    if (item.status === 'pending-payment') statusClass = 'status-pending';
    else if (remaining === 0) statusClass = 'status-finished';

    const isFinished = remaining === 0;

    html += `
      <tr>
        <!-- 1. วันที่ทำรายการล่าสุด -->
        <td>
          <div class="date-cell">
            <span class="date-main">${item.lastActionDate.split(' ')[0]} ${item.lastActionDate.split(' ')[1]} ${item.lastActionDate.split(' ')[2]}</span>
            <span class="date-sub">${item.lastActionDate.split(' ')[3] || ''}</span>
          </div>
        </td>

        <!-- 2. รหัสคอร์ส / HN -->
        <td>
          <div class="code-cell">
            <span class="course-code">${item.courseCode}</span>
            <span class="hn-code">${item.hn}</span>
          </div>
        </td>

        <!-- 3. ชื่อ - นามสกุล -->
        <td>
          <div class="patient-cell">
            <span class="patient-name">${item.patientName}</span>
            <span class="patient-phone">
              <i data-lucide="phone" style="width: 12px; height: 12px;"></i>
              ${item.phone}
            </span>
          </div>
        </td>

        <!-- 4. ชื่อคอร์สจักษุ (Package) + Eye Tag Pill -->
        <td>
          <div class="package-cell">
            <span class="package-name">${item.packageName}</span>
            <div class="tag-pills">
              <span class="eye-tag ${eyeClass}">
                <i data-lucide="eye" style="width: 12px; height: 12px;"></i>
                ${eyeText}
              </span>
              ${item.isWaiting ? '<span class="kpi-badge alert-pill" style="font-size: 10px;">รอคิวหัตถการ</span>' : ''}
            </div>
          </div>
        </td>

        <!-- 5. ความคืบหน้า (Usage Progress) -->
        <td>
          <div class="progress-cell">
            <div class="progress-header">
              <span class="progress-text">ใช้ไป ${item.usedSessions} / ${item.totalSessions} ครั้ง</span>
              <span class="progress-remain">(คงเหลือ ${remaining})</span>
            </div>
            <div class="progress-bar-track" title="${percent}%">
              <div class="${progressFillClass}" style="width: ${percent}%;"></div>
            </div>
          </div>
        </td>

        <!-- 6. วันหมดอายุ / นัดถัดไป -->
        <td>
          <div class="expiry-cell">
            <span class="expiry-date">หมดอายุ ${item.expireDate}</span>
            <span class="next-appt ${item.nextAppointment.includes('วันนี้') ? 'urgent' : ''}">
              <i data-lucide="calendar" style="width: 12px; height: 12px;"></i>
              นัดถัดไป: ${item.nextAppointment}
            </span>
          </div>
        </td>

        <!-- 7. สถานะ / การจัดการ (Action) -->
        <td style="text-align: center;">
          <div class="action-cell">
            <span class="status-badge ${statusClass}">
              ${item.status === 'ready' ? '✓ พร้อมใช้สิทธิ์' : (isFinished ? '✓ ครบตามจำนวน' : item.statusLabel)}
            </span>
            <button 
              class="btn-deduct" 
              onclick="openDeductModal(${item.id})"
              ${isFinished ? 'disabled title="สิทธิ์การรักษาครบจำนวนแล้ว"' : ''}
            >
              <i data-lucide="scissors"></i>
              <span>ตัดคอร์ส</span>
            </button>
          </div>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;

  // Re-run Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ==========================================================
// DEDUCT MODAL CONTROLS & LOGIC (ตัดคอร์สจักษุ)
// ==========================================================
function openDeductModal(courseId) {
  const course = coursesData.find(c => c.id === courseId);
  if (!course) return;

  activeDeductCourse = course;

  // Populate Summary Strip
  document.getElementById('modalPatientName').textContent = course.patientName;
  document.getElementById('modalPatientHn').textContent = `${course.hn} (${course.phone})`;
  document.getElementById('modalCourseCode').textContent = course.courseCode;
  document.getElementById('modalPackageName').textContent = course.packageName;
  
  const currentUsageText = `ใช้ไป ${course.usedSessions} / ${course.totalSessions} ครั้ง`;
  const nextSessionNum = course.usedSessions + 1;
  const nextUsageText = `เป็น ${nextSessionNum} / ${course.totalSessions} ครั้ง`;
  const remainingAfter = course.totalSessions - nextSessionNum;

  document.getElementById('modalCurrentUsage').textContent = currentUsageText;
  document.getElementById('modalNextUsage').textContent = nextUsageText;
  document.getElementById('modalRemainingText').textContent = remainingAfter > 0 
    ? `คงเหลือ ${remainingAfter} ครั้งหลังตัดรายการ`
    : 'หัตถการครั้งสุดท้ายของแพ็กเกจนี้';

  document.getElementById('modalDeductNum').textContent = nextSessionNum;

  // Select eye laterality radio matching course default
  const radios = document.getElementsByName('eyeLaterality');
  radios.forEach(r => {
    if (r.value === course.eyeLaterality) {
      r.checked = true;
    }
  });

  // Doctor select default
  const doctorSelect = document.getElementById('modalDoctorSelect');
  if (doctorSelect) {
    for (let opt of doctorSelect.options) {
      if (opt.value.includes(course.doctor)) {
        opt.selected = true;
        break;
      }
    }
  }

  // Clear signature canvas
  clearSignatureCanvas();

  // Show Modal
  const modal = document.getElementById('deductModal');
  if (modal) {
    modal.style.display = 'flex';
  }

  if (window.lucide) window.lucide.createIcons();
}


function closeDeductModal() {
  const modal = document.getElementById('deductModal');
  if (modal) modal.style.display = 'none';
  activeDeductCourse = null;
}

// Handle Deduct Form Submission
function handleConfirmDeduct(e) {
  e.preventDefault();

  if (!activeDeductCourse) return;

  const eyeSelected = document.querySelector('input[name="eyeLaterality"]:checked')?.value || activeDeductCourse.eyeLaterality;
  const doctorSelected = document.getElementById('modalDoctorSelect').value;
  const nurseSelected = document.getElementById('modalNurseSelect').value;
  const roomSelected = document.getElementById('modalRoomSelect').value;
  const eyeParam = document.getElementById('modalEyeParam').value || 'IOP ปกติ (14 mmHg)';
  const notes = document.getElementById('modalNotes').value || 'ตัดสิทธิ์และส่งตัวทำหัตถการเรียบร้อย';

  // Update Course Data
  activeDeductCourse.usedSessions += 1;
  const now = new Date();
  const thaiMonths = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
  const timeStr = `${now.getDate()} ${thaiMonths[now.getMonth()]} 69 (${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} น.)`;
  
  activeDeductCourse.lastActionDate = timeStr;
  activeDeductCourse.isWaiting = false;

  if (activeDeductCourse.usedSessions >= activeDeductCourse.totalSessions) {
    activeDeductCourse.status = 'finished';
    activeDeductCourse.statusLabel = 'ครบตามจำนวน';
  }

  // Add into deduction history log
  const newLog = {
    id: Date.now(),
    timestamp: `${now.getDate()} ${thaiMonths[now.getMonth()]} 69 | ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} น.`,
    courseCode: activeDeductCourse.courseCode,
    hn: activeDeductCourse.hn,
    patientName: activeDeductCourse.patientName,
    packageName: activeDeductCourse.packageName,
    sessionNumber: activeDeductCourse.usedSessions,
    totalSessions: activeDeductCourse.totalSessions,
    eyeLaterality: eyeSelected,
    doctor: doctorSelected.split(' ')[0] + ' ' + doctorSelected.split(' ')[1],
    nurse: nurseSelected.split(' ')[0] + ' ' + nurseSelected.split(' ')[1],
    room: roomSelected,
    param: eyeParam,
    notes: notes
  };

  deductionHistory.unshift(newLog);

  // Close Modal
  closeDeductModal();

  // Re-render
  renderKPIs();
  renderTable();
  updateTotalBadges();

  // Show Toast
  showToast(
    `ตัดคอร์สสำเร็จ (${eyeSelected})`, 
    `บันทึกการใช้สิทธิ์ครั้งที่ ${newLog.sessionNumber}/${newLog.totalSessions} ของ ${activeDeductCourse.patientName} ส่งตัวเข้า ${roomSelected} แล้ว`,
    'success'
  );
}

// ==========================================================
// NEW COURSE MODAL (เปิดคอร์สใหม่ / ขายแพ็กเกจ)
// ==========================================================
function openNewCourseModal() {
  const modal = document.getElementById('newCourseModal');
  if (modal) modal.style.display = 'flex';

  // Sync package dropdown with masterCoursesData
  const pkgSel = document.getElementById('newPackageSelect');
  if (pkgSel && typeof masterCoursesData !== 'undefined') {
    const activePkgs = masterCoursesData.filter(c => c.status !== 'inactive');
    if (activePkgs.length > 0) {
      pkgSel.innerHTML = activePkgs.map(c =>
        `<option value="${c.name}" data-sessions="${c.sessions}" data-eye="${c.defaultEye || 'OU'}" data-price="${c.price}">${c.name} (${c.sessions} ครั้ง - ฿${Number(c.price).toLocaleString()})</option>`
      ).join('');
      autoFillPackageDefaults();
    }
  }

  // Set default expire date (1 year ahead)
  const expireInput = document.getElementById('newExpireDate');
  if (expireInput) {
    const nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    expireInput.value = nextYear.toISOString().split('T')[0];
  }

  if (window.lucide) window.lucide.createIcons();
}


function closeNewCourseModal() {
  const modal = document.getElementById('newCourseModal');
  if (modal) modal.style.display = 'none';
}

function autoFillPackageDefaults() {
  const sel = document.getElementById('newPackageSelect');
  const opt = sel.options[sel.selectedIndex];
  if (opt) {
    const sessions = opt.getAttribute('data-sessions');
    const eye = opt.getAttribute('data-eye');
    if (sessions) document.getElementById('newTotalSessions').value = sessions;
    if (eye) document.getElementById('newEyeSelect').value = eye;
  }
}

function handleCreateNewCourse(e) {
  e.preventDefault();

  const hn = document.getElementById('newHn').value.trim();
  const name = document.getElementById('newName').value.trim();
  const phone = document.getElementById('newPhone').value.trim();
  const packageName = document.getElementById('newPackageSelect').value;
  const eye = document.getElementById('newEyeSelect').value;
  const totalSessions = parseInt(document.getElementById('newTotalSessions').value, 10) || 4;
  const payment = document.getElementById('newPaymentStatus').value;
  const expireRaw = document.getElementById('newExpireDate').value;

  // Format expire date
  let expireText = "25 ต.ค. 70";
  if (expireRaw) {
    const d = new Date(expireRaw);
    const thaiMonths = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
    expireText = `${d.getDate()} ${thaiMonths[d.getMonth()]} ${String(d.getFullYear() + 543).slice(-2)}`;
  }

  const nextCodeNum = 104 + coursesData.length;
  const newCourse = {
    id: Date.now(),
    lastActionDate: "25 ต.ค. 69 (เพิ่งสร้าง)",
    courseCode: `CRS-${nextCodeNum}`,
    hn: hn,
    patientName: name,
    phone: phone,
    packageName: packageName,
    eyeLaterality: eye,
    usedSessions: 0,
    totalSessions: totalSessions,
    expireDate: expireText,
    nextAppointment: "นัดหมายตามแผน",
    status: payment,
    statusLabel: payment === 'ready' ? '✓ พร้อมใช้สิทธิ์' : 'ค้างชำระงวด 2',
    isTodayActive: true,
    isWaiting: true,
    doctor: "นพ. วินัย เลิศเวชกุล"
  };

  coursesData.unshift(newCourse);

  // Close Modal
  closeNewCourseModal();
  document.getElementById('newCourseForm').reset();

  // Re-render
  renderKPIs();
  renderTable();
  updateTotalBadges();

  showToast(
    `เปิดคอร์สใหม่สำเร็จ`, 
    `สร้างรหัส ${newCourse.courseCode} สำหรับ ${newCourse.patientName} เรียบร้อยแล้ว`,
    'info'
  );
}

// ==========================================================
// HISTORY DRAWER (ประวัติการตัดคอร์ส)
// ==========================================================
function openHistoryDrawer() {
  const drawer = document.getElementById('historyDrawer');
  const backdrop = document.getElementById('historyDrawerBackdrop');
  if (drawer && backdrop) {
    drawer.classList.add('open');
    backdrop.style.display = 'block';
  }
  renderHistoryTimeline();
}

function closeHistoryDrawer() {
  const drawer = document.getElementById('historyDrawer');
  const backdrop = document.getElementById('historyDrawerBackdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('open');
    backdrop.style.display = 'none';
  }
}

function renderHistoryTimeline(filterQuery = '') {
  const container = document.getElementById('historyTimeline');
  const badge = document.getElementById('historyTotalBadge');
  if (!container) return;

  let list = deductionHistory;
  if (filterQuery) {
    list = list.filter(item => 
      item.patientName.toLowerCase().includes(filterQuery) ||
      item.hn.toLowerCase().includes(filterQuery) ||
      item.courseCode.toLowerCase().includes(filterQuery) ||
      item.doctor.toLowerCase().includes(filterQuery) ||
      item.packageName.toLowerCase().includes(filterQuery)
    );
  }

  if (badge) badge.textContent = `${list.length} รายการ`;

  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: #94A3B8;">
        <i data-lucide="file-question" style="width: 32px; height: 32px; margin-bottom: 8px;"></i>
        <div>ไม่พบบันทึกประวัติที่ตรงกับคำค้นหา</div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  let html = '';
  list.forEach(item => {
    let eyeTag = item.eyeLaterality === 'OU' ? 'ทั้งสองข้าง (OU)' : (item.eyeLaterality === 'OD' ? 'ตาขวา (OD)' : 'ตาซ้าย (OS)');

    html += `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <span class="timeline-time">${item.timestamp}</span>
            <span class="timeline-session-badge">ครั้งที่ ${item.sessionNumber} / ${item.totalSessions} (${item.eyeLaterality})</span>
          </div>
          <div class="timeline-patient">${item.patientName} (${item.hn})</div>
          <div class="timeline-course">
            <span>${item.packageName}</span>
            <span class="badge" style="font-size: 11px; color: #0284C7;">${eyeTag}</span>
          </div>
          <div class="timeline-notes">
            <strong>บันทึก:</strong> ${item.notes} <br>
            <span style="font-size: 11px; color: #64748B;">⚡ ${item.param}</span>
          </div>
          <div class="timeline-meta">
            <span>แพทย์: ${item.doctor}</span>
            <span>•</span>
            <span>พยาบาล: ${item.nurse}</span>
            <span>•</span>
            <span>${item.room}</span>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}


function printHistoryReport() {
  window.print();
}

// ==========================================================
// CANVAS SIGNATURE DRAWING LOGIC
// ==========================================================
function initCanvas() {
  canvas = document.getElementById('signatureCanvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');

  ctx.lineWidth = 2.5;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = '#0D3B5E';

  const getPos = (e) => {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  };

  const startDraw = (e) => {
    isDrawing = true;
    hasSigned = true;
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    const hint = document.getElementById('canvasHint');
    if (hint) hint.style.display = 'none';
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const pos = getPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  };

  const stopDraw = () => {
    isDrawing = false;
  };

  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mousemove', draw);
  window.addEventListener('mouseup', stopDraw);

  canvas.addEventListener('touchstart', startDraw, { passive: false });
  canvas.addEventListener('touchmove', draw, { passive: false });
  canvas.addEventListener('touchend', stopDraw);
}

function clearSignatureCanvas() {
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hasSigned = false;
  const hint = document.getElementById('canvasHint');
  if (hint) hint.style.display = 'flex';
}

// ==========================================================
// TOAST NOTIFICATIONS
// ==========================================================
function showToast(title, desc, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check-circle' : 'info'}" class="toast-icon"></i>
    <div class="toast-content">
      <span class="toast-title">${title}</span>
      <span class="toast-desc">${desc}</span>
    </div>
  `;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Export Data Simulation
function exportData() {
  showToast('ส่งออกข้อมูลสำเร็จ', 'ระบบสร้างไฟล์ Excel เรียบร้อยแล้ว', 'info');
}

// ==========================================================
// APPOINTMENT MANAGEMENT SYSTEM (ระบบนัดหมาย)
// ==========================================================

let appointmentsData = [
  {
    id: 1,
    code: "APT-6701",
    hn: "HN 67-041920",
    patientName: "นาย ชัยรัตน์ โสภณ",
    phone: "087-123-9876",
    doctor: "ว. ทพ. ธีระศิลป์ สมบูรณ์ผล",
    reason: "ตรวจติดตามความดันโลหิตสูงและเบาหวาน",
    date: "7 ต.ค. 69",
    time: "10:00 น.",
    status: "confirmed",
    statusLabel: "ยืนยันนัด"
  },
  {
    id: 2,
    code: "APT-6701",
    hn: "HN 67-041920",
    patientName: "นาย ชัยรัตน์ โสภณ",
    phone: "087-123-9876",
    doctor: "ว. ทพ. ธีระศิลป์ สมบูรณ์ผล",
    reason: "ตรวจติดตามความดันโลหิตสูงและเบาหวาน",
    date: "7 ต.ค. 69",
    time: "10:00 น.",
    status: "confirmed",
    statusLabel: "ยืนยันนัด"
  },
  {
    id: 3,
    code: "APT-6701",
    hn: "HN 67-041920",
    patientName: "นาย ชัยรัตน์ โสภณ",
    phone: "087-123-9876",
    doctor: "ว. ทพ. ธีระศิลป์ สมบูรณ์ผล",
    reason: "ตรวจติดตามความดันโลหิตสูงและเบาหวาน",
    date: "7 ต.ค. 69",
    time: "10:00 น.",
    status: "confirmed",
    statusLabel: "ยืนยันนัด"
  },
  {
    id: 4,
    code: "APT-6701",
    hn: "HN 67-041920",
    patientName: "นาย ชัยรัตน์ โสภณ",
    phone: "087-123-9876",
    doctor: "ว. ทพ. ธีระศิลป์ สมบูรณ์ผล",
    reason: "ตรวจติดตามความดันโลหิตสูงและเบาหวาน",
    date: "7 ต.ค. 69",
    time: "10:00 น.",
    status: "confirmed",
    statusLabel: "ยืนยันนัด"
  },
  {
    id: 5,
    code: "APT-6701",
    hn: "HN 67-041920",
    patientName: "นาย ชัยรัตน์ โสภณ",
    phone: "087-123-9876",
    doctor: "ว. ทพ. ธีระศิลป์ สมบูรณ์ผล",
    reason: "ตรวจติดตามความดันโลหิตสูงและเบาหวาน",
    date: "7 ต.ค. 69",
    time: "10:00 น.",
    status: "confirmed",
    statusLabel: "ยืนยันนัด"
  },
  {
    id: 6,
    code: "APT-6701",
    hn: "HN 67-041920",
    patientName: "นาย ชัยรัตน์ โสภณ",
    phone: "087-123-9876",
    doctor: "ว. ทพ. ธีระศิลป์ สมบูรณ์ผล",
    reason: "ตรวจติดตามความดันโลหิตสูงและเบาหวาน",
    date: "7 ต.ค. 69",
    time: "10:00 น.",
    status: "confirmed",
    statusLabel: "ยืนยันนัด"
  },
  {
    id: 7,
    code: "APT-6701",
    hn: "HN 67-041920",
    patientName: "นาย ชัยรัตน์ โสภณ",
    phone: "087-123-9876",
    doctor: "ว. ทพ. ธีระศิลป์ สมบูรณ์ผล",
    reason: "ตรวจติดตามความดันโลหิตสูงและเบาหวาน",
    date: "7 ต.ค. 69",
    time: "10:00 น.",
    status: "confirmed",
    statusLabel: "ยืนยันนัด"
  },
  {
    id: 8,
    code: "APT-6701",
    hn: "HN 67-041920",
    patientName: "นาย ชัยรัตน์ โสภณ",
    phone: "087-123-9876",
    doctor: "ว. ทพ. ธีระศิลป์ สมบูรณ์ผล",
    reason: "ตรวจติดตามความดันโลหิตสูงและเบาหวาน",
    date: "7 ต.ค. 69",
    time: "10:00 น.",
    status: "confirmed",
    statusLabel: "ยืนยันนัด"
  },
  {
    id: 9,
    code: "APT-6702",
    hn: "HN 67-041921",
    patientName: "นาง กานดา สว่างเนตร",
    phone: "089-555-1234",
    doctor: "พญ. รัชดาพร เกียรติไพบูลย์",
    reason: "ขอเลื่อนวันนัดหมายแล้ว (คนไข้ติดภารกิจต่างจังหวัด)",
    date: "7 ต.ค. 69",
    time: "11:00 น.",
    status: "rescheduled",
    statusLabel: "ขอเลื่อนนัด"
  },
  {
    id: 10,
    code: "APT-6703",
    hn: "HN 67-041922",
    patientName: "ด.ช. ปัณณธร วงศ์เจริญ",
    phone: "081-456-7890",
    doctor: "พญ. สุภัทรา รักษ์ดวงตา",
    reason: "ขอเลื่อนวันนัดหมายแล้ว (ขอตรวจหลังสอบเสร็จ)",
    date: "8 ต.ค. 69",
    time: "13:30 น.",
    status: "rescheduled",
    statusLabel: "ขอเลื่อนนัด"
  },
  {
    id: 11,
    code: "APT-6704",
    hn: "HN 67-041923",
    patientName: "นาย สมศักดิ์ กิจเจริญ",
    phone: "086-332-1144",
    doctor: "นพ. วินัย เลิศเวชกุล",
    reason: "ขอเลื่อนวันนัดหมายแล้ว (รอผลตรวจทางห้องปฏิบัติการ)",
    date: "9 ต.ค. 69",
    time: "14:00 น.",
    status: "rescheduled",
    statusLabel: "ขอเลื่อนนัด"
  },
  {
    id: 12,
    code: "APT-6705",
    hn: "HN 67-041924",
    patientName: "นาง วิไลพร มิ่งขวัญ",
    phone: "089-987-6543",
    doctor: "นพ. ภัทรดนัย พิชิตชัย",
    reason: "ยกเลิกนัดหมาย (คนไข้แจ้งอาการปกติแล้ว)",
    date: "7 ต.ค. 69",
    time: "15:00 น.",
    status: "cancelled",
    statusLabel: "ยกเลิก"
  }
];

let apptKpiFilter = 'all'; // 'all' | 'confirmed' | 'rescheduled' | 'cancelled'
let apptSearchQuery = '';
let activeQueueAppt = null;

// Initialize Appointment View
function initAppointments() {
  setupApptEventListeners();
}

// Switch between Main Views
function switchView(viewName) {
  const viewHome = document.getElementById('view-home');
  const viewRecords = document.getElementById('view-records');
  const viewRecordsCreate = document.getElementById('view-records-create');
  const viewRecordsDetail = document.getElementById('view-records-detail');
  const viewBilling = document.getElementById('view-billing');
  const viewBillingHistory = document.getElementById('view-billing-history');
  const viewBillingExecutive = document.getElementById('view-billing-executive');
  const viewQueue = document.getElementById('view-queue');
  const viewQueueHistory = document.getElementById('view-queue-history');
  const viewExamRoom = document.getElementById('view-exam-room');
  const viewExamHistory = document.getElementById('view-exam-history');
  const viewExamDetail = document.getElementById('view-exam-detail');
  const viewPatientSummary = document.getElementById('view-patient-summary');
  const viewAppointments = document.getElementById('view-appointments');
  const viewPharmacy = document.getElementById('view-pharmacy');
  const viewCourses = document.getElementById('view-courses');
  const viewPatientRights = document.getElementById('view-patient-rights');
  const viewAccessControl = document.getElementById('view-access-control');
  const viewRefer = document.getElementById('view-refer');
  const viewUserProfile = document.getElementById('view-user-profile');
  const viewSettings = document.getElementById('view-settings');
  const navHome = document.getElementById('navHome');
  const navRecords = document.getElementById('navRecords');
  const navBilling = document.getElementById('navBilling');
  const navPharmacy = document.getElementById('navPharmacy');
  const navQueue = document.getElementById('navQueue');
  const navExamRoom = document.getElementById('navExamRoom');
  const navAppointments = document.getElementById('navAppointments');
  const navCourses = document.getElementById('navCourses');
  const navRefer = document.getElementById('navRefer');
  const navAccessControl = document.getElementById('navAccessControl');
  const navSettings = document.getElementById('navSettings');
  const pageTitle = document.getElementById('pageTitle');
  const pageSubtitle = document.getElementById('pageSubtitle');
  const quickStatus = document.getElementById('headerQuickStatus');
  const bellBtn = document.getElementById('btnNotifications');

  // Check RBAC permission if active
  if (typeof checkModuleViewPermission === 'function' && !checkModuleViewPermission(viewName)) {
    return;
  }

  // Hide all views first
  if (viewHome) viewHome.style.display = 'none';
  if (viewRecords) viewRecords.style.display = 'none';
  if (viewRecordsCreate) viewRecordsCreate.style.display = 'none';
  if (viewRecordsDetail) viewRecordsDetail.style.display = 'none';
  if (viewBilling) viewBilling.style.display = 'none';
  if (viewBillingHistory) viewBillingHistory.style.display = 'none';
  if (viewBillingExecutive) viewBillingExecutive.style.display = 'none';
  if (viewQueue) viewQueue.style.display = 'none';
  if (viewQueueHistory) viewQueueHistory.style.display = 'none';
  if (viewExamRoom) viewExamRoom.style.display = 'none';
  if (viewExamHistory) viewExamHistory.style.display = 'none';
  if (viewExamDetail) viewExamDetail.style.display = 'none';
  if (viewPatientSummary) viewPatientSummary.style.display = 'none';
  if (viewAppointments) viewAppointments.style.display = 'none';
  if (viewPharmacy) viewPharmacy.style.display = 'none';
  if (viewCourses) viewCourses.style.display = 'none';
  if (viewPatientRights) viewPatientRights.style.display = 'none';
  if (viewAccessControl) viewAccessControl.style.display = 'none';
  if (viewRefer) viewRefer.style.display = 'none';
  if (viewUserProfile) viewUserProfile.style.display = 'none';
  if (viewSettings) viewSettings.style.display = 'none';

  // Deactivate all navs
  if (navHome) navHome.classList.remove('active');
  if (navRecords) navRecords.classList.remove('active');
  if (navBilling) navBilling.classList.remove('active');
  if (navPharmacy) navPharmacy.classList.remove('active');
  if (navQueue) navQueue.classList.remove('active');
  if (navExamRoom) navExamRoom.classList.remove('active');
  if (navAppointments) navAppointments.classList.remove('active');
  if (navCourses) navCourses.classList.remove('active');
  if (navRefer) navRefer.classList.remove('active');
  if (navAccessControl) navAccessControl.classList.remove('active');
  if (navSettings) navSettings.classList.remove('active');

  if (viewName === 'home') {
    if (viewHome) {
      viewHome.style.display = 'block';
      triggerHomeEnterAnimation();
    }
    if (navHome) navHome.classList.add('active');
    if (pageTitle) pageTitle.textContent = 'หน้าหลัก';
    if (pageSubtitle) pageSubtitle.style.display = 'flex';
    if (quickStatus) quickStatus.style.display = 'flex';
    if (bellBtn) bellBtn.style.display = 'inline-flex';

    renderHomeDashboard();
  } else if (viewName === 'records') {
    if (viewRecords) viewRecords.style.display = 'block';
    if (navRecords) navRecords.classList.add('active');
    if (pageTitle) pageTitle.textContent = 'เวชระเบียน';
    if (pageSubtitle) pageSubtitle.style.display = 'none';
    if (quickStatus) quickStatus.style.display = 'none';
    if (bellBtn) bellBtn.style.display = 'none';

    renderRecordsTable();
  } else if (viewName === 'records-create') {
    if (viewRecordsCreate) viewRecordsCreate.style.display = 'block';
    if (navRecords) navRecords.classList.add('active');
    if (pageTitle) pageTitle.textContent = 'เวชระเบียน';
    if (pageSubtitle) pageSubtitle.style.display = 'none';
    if (quickStatus) quickStatus.style.display = 'none';
    if (bellBtn) bellBtn.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (viewName === 'records-detail') {
    if (viewRecordsDetail) viewRecordsDetail.style.display = 'block';
    if (navRecords) navRecords.classList.add('active');
    if (pageTitle) pageTitle.textContent = 'เวชระเบียน';
    if (pageSubtitle) pageSubtitle.style.display = 'none';
    if (quickStatus) quickStatus.style.display = 'none';
    if (bellBtn) bellBtn.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (viewName === 'patient-rights') {
    if (viewPatientRights) viewPatientRights.style.display = 'block';
    if (navRecords) navRecords.classList.add('active');
    if (pageTitle) pageTitle.textContent = 'ราชระเบียน';
    if (pageSubtitle) pageSubtitle.style.display = 'none';
    if (quickStatus) quickStatus.style.display = 'none';
    if (bellBtn) bellBtn.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (viewName === 'billing') {
    if (viewBilling) viewBilling.style.display = 'block';
    if (navBilling) navBilling.classList.add('active');
    if (pageTitle) pageTitle.textContent = 'ระบบการเงิน';
    if (pageSubtitle) pageSubtitle.style.display = 'none';
    if (quickStatus) quickStatus.style.display = 'none';
    if (bellBtn) bellBtn.style.display = 'none';

    renderBillingBoard();
  } else if (viewName === 'billing-history') {
    if (viewBillingHistory) viewBillingHistory.style.display = 'block';
    if (navBilling) navBilling.classList.add('active');
    if (pageTitle) pageTitle.textContent = 'ระบบการเงิน';
    if (pageSubtitle) pageSubtitle.style.display = 'none';
    if (quickStatus) quickStatus.style.display = 'none';
    if (bellBtn) bellBtn.style.display = 'none';

    renderBillingHistory();
  } else if (viewName === 'billing-executive') {
    if (viewBillingExecutive) viewBillingExecutive.style.display = 'block';
    if (navBilling) navBilling.classList.add('active');
    if (pageTitle) pageTitle.textContent = 'ระบบการเงิน • สรุปข้อมูลผู้บริหาร';
    if (pageSubtitle) pageSubtitle.style.display = 'none';
    if (quickStatus) quickStatus.style.display = 'none';
    if (bellBtn) bellBtn.style.display = 'none';

    renderBillingExecutiveSummary('month');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (viewName === 'queue') {
    if (viewQueue) viewQueue.style.display = 'block';
    if (navQueue) navQueue.classList.add('active');
    if (pageTitle) pageTitle.textContent = 'ระบบคิว';
    if (pageSubtitle) pageSubtitle.style.display = 'none';
    if (quickStatus) quickStatus.style.display = 'none';
    if (bellBtn) bellBtn.style.display = 'none';

    renderQueueBoard();
  } else if (viewName === 'queue-history') {
    if (viewQueueHistory) viewQueueHistory.style.display = 'block';
    if (navQueue) navQueue.classList.add('active');
    if (pageTitle) pageTitle.textContent = 'ระบบคิว';
    if (pageSubtitle) pageSubtitle.style.display = 'none';
    if (quickStatus) quickStatus.style.display = 'none';
    if (bellBtn) bellBtn.style.display = 'none';

    renderQueueHistory();
  } else if (viewName === 'exam-room') {
    if (viewExamRoom) viewExamRoom.style.display = 'block';
    if (navExamRoom) navExamRoom.classList.add('active');
    if (pageTitle) pageTitle.textContent = 'ระบบคิว';
    if (pageSubtitle) pageSubtitle.style.display = 'flex';
    if (quickStatus) quickStatus.style.display = 'none';
    if (bellBtn) bellBtn.style.display = 'flex';

    renderExamRoomQueue();
    if (window.lucide) window.lucide.createIcons();
  } else if (viewName === 'exam-history') {
    if (viewExamHistory) viewExamHistory.style.display = 'block';
    if (navExamRoom) navExamRoom.classList.add('active');
    if (pageTitle) pageTitle.textContent = 'ห้องตรวจ • รายการประวัติการตรวจ';
    if (pageSubtitle) pageSubtitle.style.display = 'none';
    if (quickStatus) quickStatus.style.display = 'none';
    if (bellBtn) bellBtn.style.display = 'none';

    renderExamHistoryList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (viewName === 'exam-detail') {
    if (viewExamDetail) viewExamDetail.style.display = 'block';
    if (navExamRoom) navExamRoom.classList.add('active');
    if (pageTitle) pageTitle.textContent = 'ห้องตรวจ • การตรวจรักษา (Doctor Examination Workstation)';
    if (pageSubtitle) pageSubtitle.style.display = 'none';
    if (quickStatus) quickStatus.style.display = 'none';
    if (bellBtn) bellBtn.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.lucide) window.lucide.createIcons();
  } else if (viewName === 'patient-summary') {
    if (viewPatientSummary) viewPatientSummary.style.display = 'block';
    if (navExamRoom) navExamRoom.classList.add('active');
    if (pageTitle) pageTitle.textContent = 'ห้องตรวจ • สรุปประวัติการรักษา (Summary)';
    if (pageSubtitle) pageSubtitle.style.display = 'none';
    if (quickStatus) quickStatus.style.display = 'none';
    if (bellBtn) bellBtn.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.lucide) window.lucide.createIcons();
  } else if (viewName === 'appointments') {
    if (viewAppointments) viewAppointments.style.display = 'block';
    if (navAppointments) navAppointments.classList.add('active');
    if (pageTitle) pageTitle.textContent = 'ระบบนัดหมาย';
    if (pageSubtitle) pageSubtitle.style.display = 'none';
    if (quickStatus) quickStatus.style.display = 'none';
    if (bellBtn) bellBtn.style.display = 'none';

    renderApptKPIs();
    renderApptTable();
  } else if (viewName === 'pharmacy') {
    if (viewPharmacy) viewPharmacy.style.display = 'block';
    if (navPharmacy) navPharmacy.classList.add('active');
    if (pageTitle) pageTitle.textContent = 'ระบบยา';
    if (pageSubtitle) pageSubtitle.style.display = 'flex';
    if (quickStatus) quickStatus.style.display = 'none';
    if (bellBtn) bellBtn.style.display = 'inline-flex';

    renderPharmacyOrderQueue();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.lucide) window.lucide.createIcons();
  } else if (viewName === 'courses') {
    if (viewCourses) viewCourses.style.display = 'block';
    if (navCourses) navCourses.classList.add('active');
    if (pageTitle) pageTitle.textContent = 'ระบบคอร์สและแพ็กเกจ (จักษุ)';
    if (pageSubtitle) pageSubtitle.style.display = 'flex';
    if (quickStatus) quickStatus.style.display = 'flex';
    if (bellBtn) bellBtn.style.display = 'inline-flex';

    renderKPIs();
    renderTable();
  } else if (viewName === 'access-control') {
    if (viewAccessControl) viewAccessControl.style.display = 'block';
    if (navAccessControl) navAccessControl.classList.add('active');
    if (pageTitle) pageTitle.textContent = 'จัดการสิทธิการเข้าถึงระบบ (Access Control & RBAC)';
    if (pageSubtitle) pageSubtitle.style.display = 'none';
    if (quickStatus) quickStatus.style.display = 'none';
    if (bellBtn) bellBtn.style.display = 'none';

    if (typeof renderAccessControlView === 'function') {
      renderAccessControlView();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (viewName === 'refer') {
    if (viewRefer) viewRefer.style.display = 'block';
    if (navRefer) navRefer.classList.add('active');
    if (pageTitle) pageTitle.textContent = 'ระบบส่งต่อ (Refer)';
    if (pageSubtitle) pageSubtitle.style.display = 'none';
    if (quickStatus) quickStatus.style.display = 'none';
    if (bellBtn) bellBtn.style.display = 'none';

    if (typeof renderReferHistoryTable === 'function') {
      renderReferHistoryTable();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (viewName === 'user-profile') {
    if (viewUserProfile) viewUserProfile.style.display = 'block';
    if (pageTitle) pageTitle.textContent = 'ข้อมูลโปรไฟล์ผู้ใช้งาน (User Profile)';
    if (pageSubtitle) pageSubtitle.style.display = 'none';
    if (quickStatus) quickStatus.style.display = 'none';
    if (bellBtn) bellBtn.style.display = 'none';

    if (typeof renderUserProfileView === 'function') {
      renderUserProfileView();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (viewName === 'settings') {
    if (viewSettings) viewSettings.style.display = 'block';
    if (navSettings) navSettings.classList.add('active');
    if (pageTitle) pageTitle.textContent = 'การตั้งค่าระบบและข้อมูลหลัก (Master Data)';
    if (pageSubtitle) pageSubtitle.style.display = 'none';
    if (quickStatus) quickStatus.style.display = 'none';
    if (bellBtn) bellBtn.style.display = 'none';

    if (typeof renderSettingsMasterDataView === 'function') {
      renderSettingsMasterDataView();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (window.lucide) window.lucide.createIcons();
}


// Setup Event Listeners for Appointment System
function setupApptEventListeners() {
  const searchInput = document.getElementById('apptSearchInput');
  const clearBtn = document.getElementById('clearApptSearchBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      apptSearchQuery = e.target.value.trim().toLowerCase();
      if (clearBtn) clearBtn.style.display = apptSearchQuery ? 'flex' : 'none';
      renderApptTable();
    });
  }

  // Set default appointment date picker
  const newDateInput = document.getElementById('newApptDate');
  if (newDateInput) {
    const todayStr = new Date().toISOString().split('T')[0];
    newDateInput.value = todayStr;
  }
}

// Render Appointment KPI Cards
function renderApptKPIs() {
  const confirmedCount = appointmentsData.filter(a => a.status === 'confirmed' || a.status === 'attended').length;
  const rescheduledCount = appointmentsData.filter(a => a.status === 'rescheduled').length;
  const cancelledCount = appointmentsData.filter(a => a.status === 'cancelled').length;
  const totalCount = appointmentsData.length;

  const elTotal = document.getElementById('kpiApptTotal');
  const elConfirmed = document.getElementById('kpiApptConfirmed');
  const elRescheduled = document.getElementById('kpiApptRescheduled');
  const elCancelled = document.getElementById('kpiApptCancelled');

  if (elTotal) elTotal.textContent = totalCount;
  if (elConfirmed) elConfirmed.textContent = confirmedCount;
  if (elRescheduled) elRescheduled.textContent = rescheduledCount;
  if (elCancelled) elCancelled.textContent = cancelledCount;

  if (typeof renderHomeDashboard === 'function') {
    renderHomeDashboard();
  }
}

// Filter by clicking on KPI Card
function filterApptByKpi(type) {
  apptKpiFilter = type;

  // Visual card active state
  document.querySelectorAll('.appt-kpi-card').forEach(card => card.classList.remove('active-navy'));
  
  if (type === 'all') {
    document.getElementById('apptKpiCardTotal')?.classList.add('active-navy');
  } else if (type === 'confirmed') {
    document.getElementById('apptKpiCardConfirmed')?.classList.add('active-navy');
  } else if (type === 'rescheduled') {
    document.getElementById('apptKpiCardRescheduled')?.classList.add('active-navy');
  } else if (type === 'cancelled') {
    document.getElementById('apptKpiCardCancelled')?.classList.add('active-navy');
  }

  // Sync with status dropdown
  const statusSelect = document.getElementById('apptStatusFilter');
  if (statusSelect) {
    statusSelect.value = type;
  }

  renderApptTable();
}

// Handle Dropdown Filter Change
function handleApptFilterChange() {
  const statusSelect = document.getElementById('apptStatusFilter');
  if (statusSelect) {
    const selectedStatus = statusSelect.value;
    apptKpiFilter = selectedStatus;

    document.querySelectorAll('.appt-kpi-card').forEach(card => card.classList.remove('active-navy'));
    if (selectedStatus === 'all') document.getElementById('apptKpiCardTotal')?.classList.add('active-navy');
    else if (selectedStatus === 'confirmed') document.getElementById('apptKpiCardConfirmed')?.classList.add('active-navy');
    else if (selectedStatus === 'rescheduled') document.getElementById('apptKpiCardRescheduled')?.classList.add('active-navy');
    else if (selectedStatus === 'cancelled') document.getElementById('apptKpiCardCancelled')?.classList.add('active-navy');
  }

  renderApptTable();
}

// Clear Search
function clearApptSearch() {
  const searchInput = document.getElementById('apptSearchInput');
  const clearBtn = document.getElementById('clearApptSearchBtn');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  apptSearchQuery = '';
  renderApptTable();
}

// Reset all Appointment Filters
function resetApptFilters() {
  clearApptSearch();
  const dateFilter = document.getElementById('apptDateFilter');
  const statusFilter = document.getElementById('apptStatusFilter');
  if (dateFilter) dateFilter.value = 'all';
  if (statusFilter) statusFilter.value = 'all';
  filterApptByKpi('all');
}

// Render Appointment Table
function renderApptTable() {
  const tbody = document.getElementById('apptTableBody');
  const emptyState = document.getElementById('apptEmptyState');
  if (!tbody) return;

  const dateFilterEl = document.getElementById('apptDateFilter');
  const selectedDate = dateFilterEl ? dateFilterEl.value : 'all';

  let list = appointmentsData.filter(item => {
    // 1. KPI / Status filter
    if (apptKpiFilter !== 'all' && item.status !== apptKpiFilter) {
      return false;
    }

    // 2. Date filter (if specific date selected)
    if (selectedDate === '7 ต.ค. 69' && !item.date.includes('7 ต.ค. 69')) {
      // If we filtered by confirmed or all, keep the 8 items for 7 ต.ค. 69
      if (apptKpiFilter === 'all' || apptKpiFilter === 'confirmed') return false;
    }

    // 3. Search query filter
    if (apptSearchQuery) {
      const q = apptSearchQuery.toLowerCase();
      const match = item.code.toLowerCase().includes(q) ||
                    item.hn.toLowerCase().includes(q) ||
                    item.patientName.toLowerCase().includes(q) ||
                    item.phone.toLowerCase().includes(q) ||
                    item.doctor.toLowerCase().includes(q) ||
                    item.reason.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

  if (list.length === 0) {
    tbody.innerHTML = '';
    if (emptyState) emptyState.style.display = 'flex';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  let html = '';
  list.forEach(item => {
    let badgeClass = 'status-confirmed';
    let badgeIcon = 'check';
    let badgeText = '✓ ยืนยันนัด';

    if (item.status === 'rescheduled') {
      badgeClass = 'status-rescheduled';
      badgeIcon = 'clock';
      badgeText = '🕒 ขอเลื่อนนัด';
    } else if (item.status === 'cancelled') {
      badgeClass = 'status-cancelled';
      badgeIcon = 'x';
      badgeText = '✕ ยกเลิก';
    } else if (item.status === 'attended') {
      badgeClass = 'status-attended';
      badgeIcon = 'check-check';
      badgeText = '✓ รับคิวแล้ว';
    }

    html += `
      <tr>
        <!-- 1. วัน-เวลานัดหมาย -->
        <td>
          <div class="appt-datetime-cell">
            <span class="appt-date-bold">${item.date}</span>
            <span class="appt-time-sub">
              <i data-lucide="clock"></i>
              ${item.time}
            </span>
          </div>
        </td>

        <!-- 2. รหัสนัด / HN -->
        <td>
          <div class="appt-code-cell">
            <span class="appt-code-bold">${item.code}</span>
            <span class="appt-hn-sub">${item.hn}</span>
          </div>
        </td>

        <!-- 3. ชื่อ-นามสกุล / เบอร์โทร -->
        <td>
          <div class="appt-patient-cell">
            <span class="appt-patient-name">${item.patientName}</span>
            <span class="appt-patient-phone">
              <i data-lucide="phone"></i>
              ${item.phone}
            </span>
          </div>
        </td>

        <!-- 4. แผนก / แพทย์ผู้ตรวจ -->
        <td>
          <div class="appt-doctor-cell">
            ${item.doctor}
          </div>
        </td>

        <!-- 5. อาการ / สาเหตุนัด -->
        <td>
          <div class="appt-reason-cell" title="${item.reason}">
            ${item.reason}
          </div>
        </td>

        <!-- 6. สถานะนัด -->
        <td style="text-align: center;">
          <span class="appt-status-badge ${badgeClass}">
            ${badgeText}
          </span>
        </td>

        <!-- 7. การจัดการ (Actions) -->
        <td style="text-align: center;">
          <div class="appt-actions-cell" style="justify-content: center;">
            <button class="btn-action-checkin" onclick="checkInAppt(${item.id})" title="ออกบัตรคิวตรวจ">
              <i data-lucide="check"></i>
              <span>รับคิว</span>
            </button>
            <button class="btn-action-reschedule" onclick="openRescheduleModal(${item.id})" title="ขอเลื่อนวันนัดหมาย">
              <i data-lucide="clock"></i>
              <span>เลื่อนนัด</span>
            </button>
            <button class="btn-action-cancel" onclick="openCancelModal(${item.id})" title="ยกเลิกนัดหมายนี้">
              <i data-lucide="x"></i>
              <span>ยกเลิก</span>
            </button>
          </div>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}


// ==========================================================
// APPOINTMENT MODALS & ACTIONS
// ==========================================================

// Create Appointment Modal
function openCreateApptModal() {
  const modal = document.getElementById('createApptModal');
  if (modal) modal.style.display = 'flex';
  
  // Set default display date 02/10/2569 as in reference image
  const displayInput = document.getElementById('newApptDateDisplay');
  if (displayInput && !displayInput.value) {
    displayInput.value = '02/10/2569';
  }

  if (window.lucide) window.lucide.createIcons();
}


function closeCreateApptModal() {
  const modal = document.getElementById('createApptModal');
  if (modal) modal.style.display = 'none';
}

function triggerDatePicker() {
  const hiddenDate = document.getElementById('newApptDateHidden');
  if (hiddenDate) {
    if (typeof hiddenDate.showPicker === 'function') {
      hiddenDate.showPicker();
    } else {
      hiddenDate.focus();
      hiddenDate.click();
    }
  }
}

function syncApptDate(val) {
  if (!val) return;
  const parts = val.split('-');
  if (parts.length === 3) {
    const year = parseInt(parts[0], 10) + 543;
    const month = parts[1];
    const day = parts[2];
    const displayEl = document.getElementById('newApptDateDisplay');
    if (displayEl) displayEl.value = `${day}/${month}/${year}`;
  }
}

function handleCreateApptSubmit(e) {
  e.preventDefault();

  const gender = document.getElementById('newApptGender').value;
  const firstName = document.getElementById('newApptFirstName').value.trim();
  const lastName = document.getElementById('newApptLastName').value.trim();
  const phone = document.getElementById('newApptPhone').value.trim();
  const dateRaw = document.getElementById('newApptDateDisplay').value.trim();
  const time = document.getElementById('newApptTime').value;
  const doctor = document.getElementById('newApptDoctor').value;
  const reason = document.getElementById('newApptReason').value.trim();

  // Construct patient name with appropriate prefix
  let prefix = '';
  if (gender === 'ชาย') prefix = 'นาย ';
  else if (gender === 'หญิง') prefix = 'นาง ';

  const fullName = `${prefix}${firstName} ${lastName}`.trim();

  // Convert DD/MM/YYYY into Thai display date for table
  let displayDate = dateRaw;
  const parts = dateRaw.split('/');
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const monthIdx = parseInt(parts[1], 10) - 1;
    const yearStr = parts[2];
    const thaiMonths = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
    if (monthIdx >= 0 && monthIdx < 12) {
      displayDate = `${day} ${thaiMonths[monthIdx]} ${yearStr.slice(-2)}`;
    }
  }

  const nextCodeNum = 6700 + appointmentsData.length + 1;
  const nextHnNum = 41920 + appointmentsData.length + 1;

  const newAppt = {
    id: Date.now(),
    code: `APT-${nextCodeNum}`,
    hn: `HN 67-0${nextHnNum}`,
    patientName: fullName,
    gender: gender,
    phone: phone,
    doctor: doctor,
    reason: reason,
    date: displayDate,
    time: time.includes('น.') ? time : `${time} น.`,
    status: 'confirmed',
    statusLabel: 'ยืนยันนัด'
  };

  appointmentsData.unshift(newAppt);

  // Sync new patient with Medical Records (recordsData) if not already registered
  if (typeof recordsData !== 'undefined') {
    const cleanHnStr = newAppt.hn.replace(/^HN\s*/i, '').trim();
    const existsInRecords = recordsData.some(
      r => r.name === fullName || r.phone === phone || r.hn === cleanHnStr
    );
    if (!existsInRecords) {
      const newRecId = recordsData.length > 0 ? Math.max(...recordsData.map(r => r.id)) + 1 : 1;
      recordsData.unshift({
        id: newRecId,
        citizenId: "1-1037-00XX-XXXX",
        fullCitizenId: "1-1037-0099-1234",
        hn: cleanHnStr,
        gender: gender === 'ชาย' ? 'male' : 'female',
        prefix: prefix.trim() || 'คุณ',
        name: fullName,
        registeredDate: displayDate,
        isToday: true,
        phone: phone,
        age: "35 ปี",
        dob: "10 ม.ค. 2534",
        claim: "ผู้ป่วยทั่วไป / นัดหมายล่วงหน้า",
        allergy: "ไม่มีประวัติแพ้ยา",
        underlying: reason,
        bloodGroup: "O Rh+",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=240",
        detPrefixTh: prefix.trim() || 'คุณ',
        detFirstNameTh: firstName,
        detLastNameTh: lastName,
        detPatientType: "ผู้ป่วยทั่วไป",
        detRemark: `สร้างอัตโนมัติจากระบบนัดหมาย (${newAppt.code})`
      });
      if (typeof renderRecordsTable === 'function') renderRecordsTable();
    }
  }

  closeCreateApptModal();
  document.getElementById('createApptForm').reset();

  // Reset default values
  const dateInput = document.getElementById('newApptDateDisplay');
  if (dateInput) dateInput.value = '02/10/2569';
  const timeSelect = document.getElementById('newApptTime');
  if (timeSelect) timeSelect.value = '09:00';

  renderApptKPIs();
  renderApptTable();

  showToast('สร้างนัดหมายและซิงก์เวชระเบียนสำเร็จ', `สร้างรหัสนัด ${newAppt.code} สำหรับ ${newAppt.patientName} เรียบร้อยแล้ว`, 'success');
}

// Reschedule Modal
function openRescheduleModal(id) {
  const item = appointmentsData.find(a => a.id === id);
  if (!item) return;

  const modal = document.getElementById('rescheduleModal');
  document.getElementById('rescheduleApptId').value = item.id;
  document.getElementById('reschedulePatientInfo').textContent = `ผู้ป่วย: ${item.patientName} (${item.code})`;
  document.getElementById('rescheduleOldDatetime').textContent = `${item.date} (${item.time})`;

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateInput = document.getElementById('rescheduleNewDate');
  if (dateInput) dateInput.value = tomorrow.toISOString().split('T')[0];

  if (modal) modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}


function closeRescheduleModal() {
  const modal = document.getElementById('rescheduleModal');
  if (modal) modal.style.display = 'none';
}

function handleRescheduleSubmit(e) {
  e.preventDefault();
  const id = parseInt(document.getElementById('rescheduleApptId').value, 10);
  const item = appointmentsData.find(a => a.id === id);
  if (!item) return;

  const rawDate = document.getElementById('rescheduleNewDate').value;
  const newTime = document.getElementById('rescheduleNewTime').value;
  const reason = document.getElementById('rescheduleReason').value.trim();

  let dateText = item.date;
  if (rawDate) {
    const d = new Date(rawDate);
    const thaiMonths = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
    dateText = `${d.getDate()} ${thaiMonths[d.getMonth()]} ${String(d.getFullYear() + 543).slice(-2)}`;
  }

  item.date = dateText;
  item.time = newTime;
  item.reason = `ขอเลื่อนวันนัดหมายแล้ว (${reason})`;
  item.status = 'rescheduled';
  item.statusLabel = 'ขอเลื่อนนัด';

  closeRescheduleModal();
  renderApptKPIs();
  renderApptTable();

  showToast('บันทึกการขอเลื่อนนัดแล้ว', `เลื่อนนัดของ ${item.patientName} เป็นวันที่ ${dateText} (${newTime})`, 'info');
}

// Cancel Modal
function openCancelModal(id) {
  const item = appointmentsData.find(a => a.id === id);
  if (!item) return;

  document.getElementById('cancelApptId').value = item.id;
  document.getElementById('cancelPatientInfo').textContent = `ผู้ป่วย: ${item.patientName}`;
  document.getElementById('cancelCodeText').textContent = item.code;

  const modal = document.getElementById('cancelApptModal');
  if (modal) modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}


function closeCancelModal() {
  const modal = document.getElementById('cancelApptModal');
  if (modal) modal.style.display = 'none';
}

function confirmCancelAppt() {
  const id = parseInt(document.getElementById('cancelApptId').value, 10);
  const item = appointmentsData.find(a => a.id === id);
  if (!item) return;

  const reason = document.getElementById('cancelReasonSelect').value;
  item.status = 'cancelled';
  item.statusLabel = 'ยกเลิก';
  item.reason = `ยกเลิกนัดหมาย (${reason})`;

  closeCancelModal();
  renderApptKPIs();
  renderApptTable();

  showToast('ยกเลิกนัดหมายแล้ว', `ยกเลิกนัดรหัส ${item.code} เรียบร้อยแล้ว`, 'info');
}

// Check-in (รับคิว) -> เชื่อมต่อส่งเข้าหน้าระบบคิว (waitingQueueData) และหน้าห้องตรวจแพทย์ (examRoomQueueData) ทันที
function checkInAppt(id) {
  const item = appointmentsData.find(a => a.id === id);
  if (!item) return;

  activeQueueAppt = item;
  const queueNum = item.queueNo || `A-${String(waitingQueueData.length + 12).padStart(3, '0')}`;
  item.queueNo = queueNum;
  const cleanHn = item.hn.replace(/^HN\s*/i, '').trim();
  const cleanTime = item.time.includes('น.') ? item.time : `${item.time} น.`;

  document.getElementById('queueSlipNum').textContent = queueNum;
  document.getElementById('queueSlipPatient').textContent = item.patientName;
  document.getElementById('queueSlipHn').textContent = item.hn;
  document.getElementById('queueSlipTime').textContent = `${item.date} • ${cleanTime}`;
  document.getElementById('queueSlipReason').textContent = item.reason;
  document.getElementById('queueSlipRoom').textContent = `ห้องตรวจแพทย์ (${item.doctor})`;

  item.status = 'attended';
  item.statusLabel = 'รับคิวแล้ว';

  // 1. ส่งเข้าคิวรอเรียกตรวจ (waitingQueueData ในหน้าระบบคิว view-queue)
  if (typeof waitingQueueData !== 'undefined') {
    const existingWaitIdx = waitingQueueData.findIndex(q => q.queueNo === queueNum || q.patientName === item.patientName);
    const queueEntry = {
      id: Date.now(),
      queueNo: queueNum,
      patientName: item.patientName,
      hn: cleanHn,
      type: "นัดหมาย",
      apptTime: `นัด ${cleanTime}`,
      waitMinutes: 0,
      waitSeconds: 5,
      isUrgent: false,
      doctor: item.doctor,
      dept: "จักษุวิทยา",
      detail: item.reason
    };
    if (existingWaitIdx !== -1) {
      waitingQueueData[existingWaitIdx] = { ...waitingQueueData[existingWaitIdx], ...queueEntry };
    } else {
      waitingQueueData.unshift(queueEntry);
    }
    if (typeof renderQueueBoard === 'function') renderQueueBoard();
  }

  // 2. ซิงก์ขึ้นรายชื่อในหน้าห้องตรวจแพทย์ (examRoomQueueData ในหน้า view-exam-room) ทันที
  if (typeof examRoomQueueData !== 'undefined') {
    const existingExamIdx = examRoomQueueData.findIndex(q => q.queueNo === queueNum || q.patientName === item.patientName);
    const examEntry = {
      id: Date.now() + 1,
      queueNo: queueNum,
      patientName: item.patientName,
      hn: cleanHn.replace('-', '/'),
      apptTime: cleanTime,
      overdueTime: "00:00 น.",
      detail: item.reason || `นัดตรวจกับ ${item.doctor}`,
      doctor: item.doctor,
      roomName: "รอเรียกเข้าห้องตรวจ",
      status: "ready"
    };
    if (existingExamIdx !== -1) {
      examRoomQueueData[existingExamIdx] = { ...examRoomQueueData[existingExamIdx], ...examEntry };
    } else {
      examRoomQueueData.unshift(examEntry);
    }
    if (typeof renderExamRoomQueue === 'function') renderExamRoomQueue();
  }

  renderApptKPIs();
  renderApptTable();

  const modal = document.getElementById('queueSlipModal');
  if (modal) modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();

  if (typeof playHospitalChime === 'function') playHospitalChime();
  showToast('รับคิวและส่งเข้าคิวห้องตรวจสำเร็จ', `ออกคิว ${queueNum} (${item.patientName}) ซิงก์ไปยังระบบคิวและห้องตรวจแพทย์แล้ว`, 'success');
}

function closeQueueSlipModal() {
  const modal = document.getElementById('queueSlipModal');
  if (modal) modal.style.display = 'none';
}

function printQueueSlip() {
  window.print();
}

// ==========================================================
// QUEUE MANAGEMENT SYSTEM (ระบบคิว)
// Matching Reference Images 1 & 2
// ==========================================================

let waitingQueueData = [
  {
    id: 1,
    queueNo: "M-041",
    patientName: "นางสาว อารีย์ พิทักษ์ไทย",
    hn: "1252580/69",
    type: "นัดหมาย",
    apptTime: "นัด 10:15 น.",
    waitMinutes: 31,
    waitSeconds: 2,
    isUrgent: false,
    doctor: "พญ. รัชดาพร เกียรติไพบูลย์",
    dept: "จักษุวิทยา",
    detail: "ปวดตาร่วมกับตาพร่ามัวเฉียบพลันข้างขวา"
  },
  {
    id: 2,
    queueNo: "S-108",
    patientName: "นาย กิตติพงศ์ วัฒนากุล",
    hn: "1252581/69",
    type: "นัดหมาย",
    apptTime: "นัด 10:30 น.",
    waitMinutes: 26,
    waitSeconds: 18,
    isUrgent: false,
    doctor: "นพ. วินัย เลิศเวชกุล",
    dept: "จักษุวิทยา",
    detail: "ตรวจติดตามหลังยิงเลเซอร์จอประสาทตา"
  },
  {
    id: 3,
    queueNo: "E-019",
    patientName: "นาง ประภาศรี วงศ์สุวรรณ",
    hn: "1252582/69",
    type: "นัดหมาย",
    apptTime: "นัด 10:45 น.",
    waitMinutes: 22,
    waitSeconds: 40,
    isUrgent: false,
    doctor: "พญ. สุภัทรา รักษ์ดวงตา",
    dept: "จักษุวิทยา",
    detail: "วัดความดันลูกตาและลานสายตาต้อหิน"
  },
  {
    id: 4,
    queueNo: "C-054",
    patientName: "ด.ช. ณัฐภัทร ศรีวิไล",
    hn: "1252583/69",
    type: "นัดหมาย",
    apptTime: "นัด 11:00 น.",
    waitMinutes: 19,
    waitSeconds: 15,
    isUrgent: false,
    doctor: "นพ. ภัทรดนัย พิชิตชัย",
    dept: "จักษุวิทยาเด็ก",
    detail: "ตรวจประเมินภาวะตาเขซ่อนเร้นและวัดสายตา"
  },
  {
    id: 5,
    queueNo: "W-015",
    patientName: "นาย ธีรภัทร ชาญวิทย์",
    hn: "1252584/69",
    type: "Walk-in",
    apptTime: null,
    waitMinutes: 15,
    waitSeconds: 45,
    isUrgent: false,
    doctor: "นพ. วินัย เลิศเวชกุล",
    dept: "จักษุวิทยา",
    detail: "สิ่งแปลกปลอมเข้าตาซ้าย ระคายเคืองน้ำตาไหล"
  },
  {
    id: 6,
    queueNo: "M-042",
    patientName: "คุณ วิภาดา เจริญศิลป์",
    hn: "1252585/69",
    type: "นัดหมาย",
    apptTime: "นัด 11:15 น.",
    waitMinutes: 12,
    waitSeconds: 10,
    isUrgent: false,
    doctor: "พญ. รัชดาพร เกียรติไพบูลย์",
    dept: "จักษุวิทยา",
    detail: "ตาแห้งเรื้อรัง นัดอบไอน้ำและนวดเปลือกตา"
  }
];

let examRoomsData = [
  {
    id: 1,
    name: "ห้องตรวจที่ 1",
    status: "occupied",
    patient: {
      queueNo: "S-096",
      patientName: "ชัยรัตน์ โสภณ",
      hn: "123456/69",
      dept: "จักษุวิทยา",
      examDuration: "ตรวจมาแล้ว 12:40 น.",
      doctor: "พญ. รัชดาพร เกียรติไพบูลย์"
    }
  },
  { id: 2, name: "ห้องตรวจที่ 2", status: "empty", patient: null },
  { id: 3, name: "ห้องตรวจที่ 3", status: "empty", patient: null }
];

let queueHistoryData = [
  { id: 1, callDate: "7 ต.ค. 69", callTime: "09:15 น.", queueNo: "S-096", patientName: "นาย ชัยรัตน์ โสภณ", phone: "087-123-9876", type: "นัดหมาย", apptDate: "7 ต.ค. 69", apptTime: "09:00 น.", room: "ห้องตรวจที่ 1", status: "finished", statusLabel: "สิ้นสุดตรวจ" },
  { id: 2, callDate: "7 ต.ค. 69", callTime: "09:30 น.", queueNo: "A-001", patientName: "น.ส. กุลธิดา ขุนยางสิน", phone: "098-261-7481", type: "นัดหมาย", apptDate: "7 ต.ค. 69", apptTime: "09:30 น.", room: "ห้องตรวจที่ 2", status: "finished", statusLabel: "สิ้นสุดตรวจ" },
  { id: 3, callDate: "7 ต.ค. 69", callTime: "09:45 น.", queueNo: "W-012", patientName: "นาง ประไพศรี มีสุข", phone: "081-945-2310", type: "Walk-in", apptDate: "7 ต.ค. 69", apptTime: "09:40 น.", room: "ห้องตรวจที่ 3", status: "finished", statusLabel: "สิ้นสุดตรวจ" },
  { id: 4, callDate: "7 ต.ค. 69", callTime: "10:05 น.", queueNo: "G-108", patientName: "นาย สมหมาย ใจดี", phone: "089-412-5589", type: "นัดหมาย", apptDate: "7 ต.ค. 69", apptTime: "10:00 น.", room: "ห้องตรวจที่ 1", status: "finished", statusLabel: "สิ้นสุดตรวจ" },
  { id: 5, callDate: "7 ต.ค. 69", callTime: "10:20 น.", queueNo: "C-054", patientName: "ด.ช. ณัฐภัทร ศรีวิไล", phone: "086-771-3920", type: "นัดหมาย", apptDate: "7 ต.ค. 69", apptTime: "10:15 น.", room: "ห้องตรวจที่ 4", status: "finished", statusLabel: "สิ้นสุดตรวจ" },
  { id: 6, callDate: "7 ต.ค. 69", callTime: "10:35 น.", queueNo: "W-015", patientName: "นาย ธีรภัทร ชาญวิทย์", phone: "092-384-1102", type: "Walk-in", apptDate: "7 ต.ค. 69", apptTime: "10:30 น.", room: "ห้องตรวจที่ 2", status: "finished", statusLabel: "สิ้นสุดตรวจ" },
  { id: 7, callDate: "7 ต.ค. 69", callTime: "10:50 น.", queueNo: "M-042", patientName: "คุณ วิภาดา เจริญศิลป์", phone: "084-559-8214", type: "นัดหมาย", apptDate: "7 ต.ค. 69", apptTime: "10:45 น.", room: "ห้องตรวจที่ 3", status: "confirmed", statusLabel: "ยืนยันนัด" },
  { id: 8, callDate: "7 ต.ค. 69", callTime: "11:05 น.", queueNo: "S-102", patientName: "นาง กัลยาณี วงศ์สวัสดิ์", phone: "081-234-5678", type: "นัดหมาย", apptDate: "7 ต.ค. 69", apptTime: "11:00 น.", room: "ห้องตรวจที่ 5", status: "finished", statusLabel: "สิ้นสุดตรวจ" },
  { id: 9, callDate: "7 ต.ค. 69", callTime: "11:20 น.", queueNo: "G-115", patientName: "ร.ต.อ. พงศกร รัตนโชติ", phone: "095-678-1234", type: "นัดหมาย", apptDate: "7 ต.ค. 69", apptTime: "11:00 น.", room: "ห้องตรวจที่ 1", status: "overdue", statusLabel: "เกินกำหนด" },
  { id: 10, callDate: "7 ต.ค. 69", callTime: "11:35 น.", queueNo: "W-019", patientName: "น.ส. พิมพ์ชนก เลิศล้ำ", phone: "089-876-5432", type: "Walk-in", apptDate: "7 ต.ค. 69", apptTime: "11:30 น.", room: "ห้องตรวจที่ 2", status: "confirmed", statusLabel: "ยืนยันนัด" },
  { id: 11, callDate: "7 ต.ค. 69", callTime: "11:50 น.", queueNo: "C-061", patientName: "นาย อานนท์ พิทักษ์กุล", phone: "082-345-6789", type: "นัดหมาย", apptDate: "7 ต.ค. 69", apptTime: "11:45 น.", room: "ห้องตรวจที่ 6", status: "finished", statusLabel: "สิ้นสุดตรวจ" },
  { id: 12, callDate: "7 ต.ค. 69", callTime: "12:05 น.", queueNo: "M-049", patientName: "นาง สุมาลี เกียรติขจร", phone: "091-543-2198", type: "นัดหมาย", apptDate: "7 ต.ค. 69", apptTime: "12:00 น.", room: "ห้องตรวจที่ 3", status: "confirmed", statusLabel: "ยืนยันนัด" }
];

let queueWaitingFilter = 'all'; // 'all' | 'appt' | 'walkin'
let queueRoomFilter = 'all';    // 'all' | 'available' | 'examining'
let queueHistoryFilter = 'all'; // 'all' | 'finished' | 'overdue'
let queueHistoryDate = '7 ต.ค. 69';
let queueHistoryType = 'all';
let queueHistorySearch = '';
let activeAssignQueueId = null;

// Initialize Queue Module
function initQueue() {
  setupQueueEventListeners();
  switchView('queue'); // Default to Queue view

  // Live timer tick for waiting times
  setInterval(() => {
    waitingQueueData.forEach(item => {
      item.waitSeconds += 1;
      if (item.waitSeconds >= 60) {
        item.waitSeconds = 0;
        item.waitMinutes += 1;
      }
    });
    // Update waiting time strings if queue board is visible
    const viewQueue = document.getElementById('view-queue');
    if (viewQueue && viewQueue.style.display !== 'none') {
      document.querySelectorAll('.waiting-card').forEach(card => {
        const id = parseInt(card.dataset.queueId, 10);
        const item = waitingQueueData.find(q => q.id === id);
        if (item) {
          const timerEl = card.querySelector('.waiting-time-text');
          if (timerEl) {
            timerEl.textContent = `รอมาแล้ว ${String(item.waitMinutes).padStart(2, '0')}:${String(item.waitSeconds).padStart(2, '0')} นาที`;
          }
        }
      });
    }
  }, 1000);
}

// Setup Event Listeners for Queue System
function setupQueueEventListeners() {
  const histSearchInput = document.getElementById('histSearchInput');
  const clearHistSearchBtn = document.getElementById('clearHistSearchBtn');

  if (histSearchInput) {
    histSearchInput.addEventListener('input', (e) => {
      queueHistorySearch = e.target.value.trim().toLowerCase();
      if (clearHistSearchBtn) clearHistSearchBtn.style.display = queueHistorySearch ? 'flex' : 'none';
      renderQueueHistory();
    });
  }
}

// Play pleasant hospital announcement chime
function playHospitalChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;
    
    // 2-tone chime: E5 (659Hz) -> A5 (880Hz)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(659.25, now);
    gain1.gain.setValueAtTime(0.12, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.6);

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(880, now + 0.3);
    gain2.gain.setValueAtTime(0.15, now + 0.3);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.1);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.3);
    osc2.stop(now + 1.1);
  } catch (e) {
    // Audio might be blocked prior to user gesture
  }
}

// Render Queue Board (Image 1)
function renderQueueBoard() {
  // Update Top KPIs
  const kpiWaiting = document.getElementById('kpiQueueWaiting');
  const kpiExamining = document.getElementById('kpiQueueExamining');
  const kpiCompleted = document.getElementById('kpiQueueCompleted');

  if (kpiWaiting) kpiWaiting.textContent = waitingQueueData.length;
  if (kpiExamining) kpiExamining.textContent = examRoomsData.filter(r => r.status === 'occupied').length;
  if (kpiCompleted) kpiCompleted.textContent = queueHistoryData.filter(h => h.status === 'finished').length;

  renderWaitingQueueList();
  renderExamRoomsList();

  if (window.lucide) window.lucide.createIcons();
}


// Render Waiting Patients List (Left Column)
function renderWaitingQueueList() {
  const container = document.getElementById('waitingQueueList');
  if (!container) return;

  let list = waitingQueueData.filter(item => {
    if (queueWaitingFilter === 'appt') return item.type === 'นัดหมาย';
    if (queueWaitingFilter === 'walkin') return item.type === 'Walk-in';
    return true;
  });

  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px 16px; color: #94A3B8;">
        <i data-lucide="check-circle" style="width: 36px; height: 36px; margin-bottom: 8px; color: #10B981;"></i>
        <div style="font-size: 14px; font-weight: 500;">ไม่มีผู้ป่วยรอเรียกตรวจในหมวดหมู่นี้</div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  let html = '';
  list.forEach(item => {
    const isAppt = item.type === 'นัดหมาย';
    const typeBadgeClass = item.isUrgent ? 'badge-urgent' : (isAppt ? 'badge-appt' : 'badge-walkin');
    const typeLabel = item.isUrgent ? '⚡ คิวด่วน' : item.type;

    html += `
      <div class="waiting-card" data-queue-id="${item.id}">
        <div class="waiting-card-top">
          <div class="waiting-queue-num">${item.queueNo}</div>
          <div class="waiting-card-meta">
            <span class="waiting-time-text">รอมาแล้ว ${String(item.waitMinutes).padStart(2, '0')}:${String(item.waitSeconds).padStart(2, '0')} นาที</span>
            ${item.apptTime ? `
              <span class="appt-time-pill">
                <i data-lucide="clock"></i>
                <span>${item.apptTime}</span>
              </span>
            ` : ''}
            <span class="queue-type-badge ${typeBadgeClass}">${typeLabel}</span>
          </div>
        </div>

        <div class="waiting-card-body">
          <div class="waiting-patient-row">
            <span>ผู้ป่วย:</span>
            <strong>${item.patientName}</strong>
          </div>
          <div class="waiting-hn-row">
            <span>HN:</span>
            <span>${item.hn}</span>
          </div>
        </div>

        <div class="waiting-card-actions">
          <div class="waiting-actions-left">
            <button type="button" class="btn-order-arrow" onclick="moveQueueUp(${item.id})" title="เลื่อนลำดับขึ้น">
              <i data-lucide="chevron-up"></i>
            </button>
            <button type="button" class="btn-order-arrow" onclick="moveQueueDown(${item.id})" title="เลื่อนลำดับลง">
              <i data-lucide="chevron-down"></i>
            </button>
            <button type="button" class="btn-queue-skip" onclick="skipQueue(${item.id})" title="ข้ามคิวไปท้ายแถว">
              <i data-lucide="fast-forward"></i>
              <span>ข้ามคิว</span>
            </button>
            <button type="button" class="btn-queue-recall" onclick="recallQueue(${item.id})" title="กดเรียกผู้ป่วยซ้ำ">
              <i data-lucide="rotate-cw"></i>
              <span>เรียกซ้ำ</span>
            </button>
            <button type="button" class="btn-queue-urgent" onclick="urgentCallQueue(${item.id})" title="เรียกผู้ป่วยด่วน">
              <i data-lucide="zap"></i>
              <span>เรียกด่วน</span>
            </button>
          </div>

          <button type="button" class="btn-queue-enter" onclick="openAssignRoomModal(${item.id})">
            <i data-lucide="arrow-right"></i>
            <span>เข้าห้องตรวจ</span>
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}


// Render Examination Rooms (Right Column)
function renderExamRoomsList() {
  const container = document.getElementById('examRoomsList');
  if (!container) return;

  let list = examRoomsData.filter(room => {
    if (queueRoomFilter === 'available') return room.status === 'empty';
    if (queueRoomFilter === 'examining') return room.status === 'occupied';
    return true;
  });

  let html = '';
  list.forEach(room => {
    const isOccupied = room.status === 'occupied' && room.patient;
    const dotClass = isOccupied ? 'dot-examining' : 'dot-available';

    html += `
      <div class="exam-room-card ${isOccupied ? 'room-occupied' : 'room-empty'}">
        <div class="exam-room-header">
          <div class="exam-room-title-wrap">
            <span class="room-status-dot ${dotClass}"></span>
            <h3 class="exam-room-name">${room.name}</h3>
          </div>
          ${isOccupied ? `
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="room-examining-badge">แพทย์กำลังตรวจ</span>
              <button type="button" class="btn-room-finish" onclick="finishRoomExam(${room.id})" title="เสร็จสิ้นการตรวจ">
                <i data-lucide="check"></i>
                <span>เสร็จสิ้น</span>
              </button>
            </div>
          ` : ''}
        </div>

        ${isOccupied ? `
          <div class="room-body-occupied" style="cursor: pointer;" onclick="openExamDetailFromRoom('${room.patient.queueNo}')" title="คลิกเพื่อเข้าสู่หน้าตรวจรักษาของแพทย์">
            <div class="room-patient-queue">${room.patient.queueNo}</div>
            <div class="room-patient-name">${room.patient.patientName} (HN ${room.patient.hn})</div>
            <div class="room-patient-sub">
              <span class="dept-pill-blue">${room.patient.dept}</span>
              <span>${room.patient.examDuration}</span>
            </div>
          </div>
        ` : `
          <div class="room-body-empty">
            <span class="room-empty-label">ว่าง</span>
          </div>
        `}
      </div>
    `;
  });

  container.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}


// Queue Ordering & Action Controls
function moveQueueUp(id) {
  const idx = waitingQueueData.findIndex(q => q.id === id);
  if (idx > 0) {
    const temp = waitingQueueData[idx];
    waitingQueueData[idx] = waitingQueueData[idx - 1];
    waitingQueueData[idx - 1] = temp;
    renderWaitingQueueList();
  }
}

function moveQueueDown(id) {
  const idx = waitingQueueData.findIndex(q => q.id === id);
  if (idx !== -1 && idx < waitingQueueData.length - 1) {
    const temp = waitingQueueData[idx];
    waitingQueueData[idx] = waitingQueueData[idx + 1];
    waitingQueueData[idx + 1] = temp;
    renderWaitingQueueList();
  }
}

function skipQueue(id) {
  const idx = waitingQueueData.findIndex(q => q.id === id);
  if (idx !== -1) {
    const [item] = waitingQueueData.splice(idx, 1);
    waitingQueueData.push(item);
    renderWaitingQueueList();
    showToast('ข้ามคิวเรียบร้อย', `คิว ${item.queueNo} (${item.patientName}) ถูกเลื่อนไปท้ายแถว`, 'info');
  }
}

function recallQueue(id) {
  const item = waitingQueueData.find(q => q.id === id);
  if (!item) return;

  playHospitalChime();
  showToast('🔊 กำลังเรียกคิวซ้ำ', `ขอเชิญคิวหมายเลข ${item.queueNo} คุณ${item.patientName} เตรียมพร้อมหน้าห้องตรวจ`, 'info');
}

function urgentCallQueue(id) {
  const item = waitingQueueData.find(q => q.id === id);
  if (!item) return;

  playHospitalChime();
  showToast('⚡ ประกาศเรียกคิวด่วน!', `ด่วนพิเศษ: เชิญคิว ${item.queueNo} คุณ${item.patientName} พบแพทย์ทันที`, 'info');
}

// Modal: Assign Room (เข้าห้องตรวจ - New Design matching image)
let selectedAssignRoomId = null;

function openAssignRoomModal(queueId) {
  const item = waitingQueueData.find(q => q.id === queueId);
  if (!item) return;

  activeAssignQueueId = queueId;

  // Auto select first empty room by default
  const firstEmpty = examRoomsData.find(r => r.status === 'empty');
  selectedAssignRoomId = firstEmpty ? firstEmpty.id : (examRoomsData[0] ? examRoomsData[0].id : null);

  renderAssignRoomCards();

  const modal = document.getElementById('assignRoomModal');
  if (modal) modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

function selectAssignRoom(roomId) {
  selectedAssignRoomId = roomId;
  renderAssignRoomCards();
}

function renderAssignRoomCards() {
  const container = document.getElementById('assignRoomCardsGrid');
  if (!container) return;

  const displayRooms = examRoomsData.slice(0, 3);
  let html = '';
  displayRooms.forEach(room => {
    const isOccupied = room.status === 'occupied' && room.patient;
    const isSelected = selectedAssignRoomId === room.id;
    const dotClass = isOccupied ? 'dot-occupied' : 'dot-available';

    let patientNameMasked = '';
    if (isOccupied && room.patient && room.patient.patientName) {
      const rawName = room.patient.patientName.replace(/^(นาย|นางสาว|นาง|น\.ส\.|ด\.ช\.|ด\.ญ\.|คุณ)\s*/, '').trim();
      const parts = rawName.split(/\s+/);
      if (parts.length >= 2) {
        patientNameMasked = `คุณ ${parts[0]} ${parts[1].charAt(0)}***`;
      } else {
        patientNameMasked = `คุณ ${rawName}`;
      }
    }

    html += `
      <div class="assign-room-card ${isSelected ? 'selected' : ''}" 
           onclick="selectAssignRoom(${room.id})" 
           title="${isOccupied ? `${room.name} (กำลังตรวจ ${room.patient.queueNo})` : `${room.name} (ว่าง - พร้อมรับผู้ป่วย)`}">
        <div class="assign-room-card-header">
          <span class="assign-room-dot ${dotClass}"></span>
          <span class="assign-room-title">${room.name}</span>
        </div>
        <div class="assign-room-card-divider"></div>
        <div class="assign-room-card-body">
          ${isOccupied ? `
            <div class="assign-room-queue-no">${room.patient.queueNo}</div>
            <div class="assign-room-patient-name">${patientNameMasked || 'คุณ สมศักดิ์ ส***'}</div>
          ` : `
            <div class="assign-room-empty-text">ว่าง</div>
          `}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}

function closeAssignRoomModal() {
  const modal = document.getElementById('assignRoomModal');
  if (modal) modal.style.display = 'none';
  activeAssignQueueId = null;
  selectedAssignRoomId = null;
}

function confirmAssignRoom() {
  if (!activeAssignQueueId) return;

  if (!selectedAssignRoomId) {
    showToast('กรุณาเลือกห้องตรวจ', 'โปรดคลิกเลือกห้องตรวจที่ต้องการก่อนกดยืนยัน', 'info');
    return;
  }

  const room = examRoomsData.find(r => r.id === selectedAssignRoomId);
  const queueIdx = waitingQueueData.findIndex(q => q.id === activeAssignQueueId);
  if (!room || queueIdx === -1) return;

  const patientItem = waitingQueueData[queueIdx];

  // Assign to Room
  room.status = 'occupied';
  room.patient = {
    queueNo: patientItem.queueNo,
    patientName: patientItem.patientName,
    hn: patientItem.hn,
    dept: patientItem.dept || "อายุรกรรม",
    doctor: patientItem.doctor || "พญ. รัชดาพร เกียรติไพบูลย์",
    examDuration: "เพิ่งเข้าตรวจ (00:01 น.)"
  };

  // Remove from waiting queue
  waitingQueueData.splice(queueIdx, 1);

  // Sync with examRoomQueueData
  if (typeof examRoomQueueData !== 'undefined') {
    const cleanApptTime = patientItem.apptTime ? patientItem.apptTime.replace('นัด ', '').trim() : '10:30 น.';
    const overdueStr = `${String(patientItem.waitMinutes || 0).padStart(2, '0')}:${String(patientItem.waitSeconds || 0).padStart(2, '0')} น.`;
    const existingIdx = examRoomQueueData.findIndex(
      q => q.queueNo === patientItem.queueNo || q.patientName === patientItem.patientName
    );
    const updatedExamItem = {
      id: existingIdx !== -1 ? examRoomQueueData[existingIdx].id : Date.now(),
      queueNo: patientItem.queueNo,
      patientName: patientItem.patientName,
      hn: patientItem.hn.replace('-', '/'),
      apptTime: cleanApptTime,
      overdueTime: overdueStr,
      detail: patientItem.detail || `ส่งตรวจจากระบบคิว (${room.name})`,
      roomName: room.name,
      roomId: room.id,
      doctor: patientItem.doctor || "พญ. รัชดาพร เกียรติไพบูลย์",
      status: 'ready'
    };
    if (existingIdx !== -1) {
      examRoomQueueData.splice(existingIdx, 1);
    }
    examRoomQueueData.unshift(updatedExamItem);
    if (typeof renderExamRoomQueue === 'function') renderExamRoomQueue();
  }

  closeAssignRoomModal();
  renderQueueBoard();
  if (typeof renderHomeDashboard === 'function') renderHomeDashboard();
  playHospitalChime();

  showToast('ส่งผู้ป่วยเข้าห้องตรวจแล้ว', `คิว ${patientItem.queueNo} (${patientItem.patientName}) เข้า ${room.name} เรียบร้อยแล้ว`, 'success');
}

// Finish Room Examination
function finishRoomExam(roomId) {
  const room = examRoomsData.find(r => r.id === roomId);
  if (!room || room.status !== 'occupied' || !room.patient) return;

  const finishedPatient = room.patient;
  room.status = 'empty';
  room.patient = null;

  // Sync status in Doctor Examination Room Queue List (เมนูห้องตรวจ)
  if (typeof examRoomQueueData !== 'undefined') {
    const examItem = examRoomQueueData.find(
      q => q.queueNo === finishedPatient.queueNo || q.patientName === finishedPatient.patientName
    );
    if (examItem) {
      examItem.status = 'completed';
    }
    if (typeof renderExamRoomQueue === 'function') renderExamRoomQueue();
  }

  // Add to queueHistoryData
  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} น.`;
  queueHistoryData.unshift({
    id: Date.now(),
    callDate: "7 ต.ค. 69",
    callTime: timeStr,
    queueNo: finishedPatient.queueNo,
    patientName: finishedPatient.patientName,
    phone: "087-123-9876",
    type: "นัดหมาย",
    apptDate: "7 ต.ค. 69",
    apptTime: timeStr,
    room: room.name,
    status: "finished",
    statusLabel: "สิ้นสุดตรวจ"
  });

  renderQueueBoard();
  if (typeof renderHomeDashboard === 'function') renderHomeDashboard();
  showToast('สิ้นสุดการตรวจเรียบร้อย', `${room.name} พร้อมรับผู้ป่วยรายถัดไปแล้ว`, 'success');
}

// Urgent Queue Modal
function openUrgentQueueModal() {
  const modal = document.getElementById('urgentQueueModal');
  if (modal) modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}


function closeUrgentQueueModal() {
  const modal = document.getElementById('urgentQueueModal');
  if (modal) modal.style.display = 'none';
  const form = document.getElementById('urgentQueueForm');
  if (form) form.reset();
}

function handleUrgentQueueSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('urgentPatientName').value.trim();
  const hn = document.getElementById('urgentHn').value.trim() || `67-04${Math.floor(Math.random() * 8999 + 1000)}`;
  const priority = document.getElementById('urgentPriority').value;
  const reason = document.getElementById('urgentReason').value.trim();

  const newUrgentItem = {
    id: Date.now(),
    queueNo: `EM-${String(Math.floor(Math.random() * 90) + 10).padStart(3, '0')}`,
    patientName: name,
    hn: hn,
    type: "Walk-in",
    apptTime: null,
    waitMinutes: 0,
    waitSeconds: 0,
    isUrgent: true,
    doctor: "พญ. รัชดาพร เกียรติไพบูลย์",
    dept: "จักษุวิทยา",
    detail: `[ด่วน: ${priority}] ${reason}`
  };

  // Insert at top of waiting list
  waitingQueueData.unshift(newUrgentItem);

  // Also sync to Doctor Examination Room Queue List (เมนูห้องตรวจ)
  if (typeof examRoomQueueData !== 'undefined') {
    examRoomQueueData.unshift({
      id: Date.now() + 1,
      queueNo: newUrgentItem.queueNo,
      patientName: name,
      hn: hn.replace('-', '/'),
      apptTime: "คิวด่วน (STAT)",
      overdueTime: "00:00 น.",
      detail: `[ด่วน: ${priority}] ${reason}`,
      roomName: "คิวด่วนพิเศษ (รอเข้าห้องตรวจ)",
      doctor: newUrgentItem.doctor,
      status: 'ready'
    });
    if (typeof renderExamRoomQueue === 'function') renderExamRoomQueue();
  }

  closeUrgentQueueModal();
  renderQueueBoard();
  if (typeof renderHomeDashboard === 'function') renderHomeDashboard();
  playHospitalChime();

  showToast('⚡ แทรกคิวด่วนสำเร็จ', `แทรกคิว ${newUrgentItem.queueNo} (${name}) ที่ลำดับแรกและส่งแจ้งห้องตรวจแล้ว (${priority})`, 'info');
}

// Filter buttons
function filterWaitingQueue(type) {
  queueWaitingFilter = type;
  document.querySelectorAll('[data-queue-filter]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.queueFilter === type);
  });
  renderWaitingQueueList();
}

function filterExamRooms(type) {
  queueRoomFilter = type;
  document.querySelectorAll('[data-room-filter]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.roomFilter === type);
  });
  renderExamRoomsList();
}

// ==========================================================
// QUEUE HISTORY VIEW (Image 2)
// ==========================================================

function renderQueueHistory() {
  // Update KPI counters
  const totalEl = document.getElementById('kpiHistTotal');
  const finishedEl = document.getElementById('kpiHistFinished');
  const overdueEl = document.getElementById('kpiHistOverdue');

  if (totalEl) totalEl.textContent = queueHistoryData.length;
  if (finishedEl) finishedEl.textContent = queueHistoryData.filter(i => i.status === 'finished').length;
  if (overdueEl) overdueEl.textContent = queueHistoryData.filter(i => i.status === 'overdue').length;

  const tbody = document.getElementById('queueHistoryTableBody');
  if (!tbody) return;

  let filtered = queueHistoryData.filter(item => {
    // 1. KPI Filter
    if (queueHistoryFilter === 'finished' && item.status !== 'finished') return false;
    if (queueHistoryFilter === 'overdue' && item.status !== 'overdue') return false;

    // 2. Date Filter
    if (queueHistoryDate !== 'all' && item.callDate !== queueHistoryDate) return false;

    // 3. Type Filter
    if (queueHistoryType !== 'all' && item.type !== queueHistoryType) return false;

    // 4. Search Filter
    if (queueHistorySearch) {
      const q = queueHistorySearch;
      const match = item.queueNo.toLowerCase().includes(q) ||
                    item.patientName.toLowerCase().includes(q) ||
                    item.phone.toLowerCase().includes(q) ||
                    item.room.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 48px; color: #94A3B8;">
          <i data-lucide="file-question" style="width: 32px; height: 32px; margin-bottom: 8px;"></i>
          <div>ไม่พบประวัติการเรียกคิวตามเงื่อนไขที่เลือก</div>
        </td>
      </tr>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  let html = '';
  filtered.forEach(item => {
    const isOverdue = item.status === 'overdue';
    const statusIcon = isOverdue ? 'alert-circle' : 'check';
    const statusColor = isOverdue ? '#DC2626' : '#059669';

    html += `
      <tr>
        <td>
          <div style="font-weight: 500; color: #1E293B;">${item.callDate}</div>
          <div style="font-size: 12px; color: #64748B; display: flex; align-items: center; gap: 4px; margin-top: 2px;">
            <i data-lucide="clock" style="width: 12px; height: 12px;"></i>
            <span>${item.callTime}</span>
          </div>
        </td>
        <td>
          <strong style="color: #0D3B5E; font-size: 13.5px;">${item.queueNo}</strong>
        </td>
        <td>
          <div style="font-weight: 500; color: #1E293B;">${item.patientName}</div>
          <div style="font-size: 12px; color: #64748B; display: flex; align-items: center; gap: 4px; margin-top: 2px;">
            <i data-lucide="phone" style="width: 12px; height: 12px;"></i>
            <span>${item.phone}</span>
          </div>
        </td>
        <td style="text-align: center;">
          <span style="font-size: 11px; padding: 3px 8px; border-radius: 9999px; background: #E0F2FE; color: #0369A1; font-weight: 500;">
            ${item.type}
          </span>
        </td>
        <td>
          <div style="font-weight: 500; color: #1E293B;">${item.apptDate}</div>
          <div style="font-size: 12px; color: #64748B; display: flex; align-items: center; gap: 4px; margin-top: 2px;">
            <i data-lucide="clock" style="width: 12px; height: 12px;"></i>
            <span>${item.apptTime}</span>
          </div>
        </td>
        <td style="text-align: center; font-weight: 600; color: #1E293B;">
          ${item.room}
        </td>
        <td style="text-align: center;">
          <div style="display: inline-flex; align-items: center; gap: 4px; color: ${statusColor}; font-weight: 500; font-size: 12.5px;">
            <i data-lucide="${statusIcon}" style="width: 14px; height: 14px;"></i>
            <span>${item.statusLabel}</span>
          </div>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}


function filterHistoryByKpi(type) {
  queueHistoryFilter = type;
  const cardTotal = document.getElementById('histKpiTotal');
  const cardFinished = document.getElementById('histKpiFinished');
  const cardOverdue = document.getElementById('histKpiOverdue');

  if (cardTotal) cardTotal.classList.toggle('active-navy', type === 'all');
  if (cardFinished) cardFinished.classList.toggle('active-navy', type === 'finished');
  if (cardOverdue) cardOverdue.classList.toggle('active-navy', type === 'overdue');

  renderQueueHistory();
}

function handleHistFilterChange() {
  const dateSelect = document.getElementById('histDateFilter');
  const typeSelect = document.getElementById('histTypeFilter');

  if (dateSelect) queueHistoryDate = dateSelect.value;
  if (typeSelect) queueHistoryType = typeSelect.value;

  renderQueueHistory();
}

function clearHistSearch() {
  const searchInput = document.getElementById('histSearchInput');
  const clearBtn = document.getElementById('clearHistSearchBtn');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  queueHistorySearch = '';
  renderQueueHistory();
}

// ==========================================================
// BILLING & CASHIER SYSTEM (ระบบการเงิน - Matching Mockup)
// ==========================================================

let billingInvoicesData = [
  {
    id: 181154,
    receiptNo: "181154",
    hn: "500570/69",
    patientName: "น.ส. กุลธิดา ขุนยางสิน",
    gender: "female",
    age: "9 ปี 0 ด.",
    idCard: "xxx xxx",
    claim: "ประกันสังคม",
    phone: "098261748192",
    date: "10/07/2569",
    time: "15:47",
    status: "pending", // pending | paid | cancelled
    billType: "insurance", // cash | insurance
    amountDue: 1200,
    amountReceived: 1200,
    amountChange: 0,
    avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=150",
    treatmentItems: [
      {
        id: 1,
        title: "ค่าบริการทางการพยาบาล",
        amount: 500,
        credit: 0,
        discount: 0,
        claimable: 0,
        unclaimable: 0,
        isExpanded: true,
        subItems: [
          { id: 11, title: "รายละเอียด 1", amount: 250, credit: 0, discount: 0, claimable: 0, unclaimable: 0 },
          { id: 12, title: "รายละเอียด 2", amount: 250, credit: 0, discount: 0, claimable: 0, unclaimable: 0 }
        ]
      },
      {
        id: 2,
        title: "ค่าบริการทางการพยาบาล",
        amount: 1200,
        credit: 0,
        discount: 0,
        claimable: 0,
        unclaimable: 0,
        isExpanded: false,
        subItems: []
      },
      {
        id: 3,
        title: "ค่าบริการทางการพยาบาล",
        amount: 0,
        credit: 0,
        discount: 0,
        claimable: 0,
        unclaimable: 0,
        isExpanded: false,
        subItems: []
      },
      {
        id: 4,
        title: "ค่าบริการทางการพยาบาล",
        amount: 0,
        credit: 0,
        discount: 0,
        claimable: 0,
        unclaimable: 0,
        isExpanded: false,
        subItems: []
      },
      {
        id: 5,
        title: "ค่าบริการทางการพยาบาล",
        amount: 0,
        credit: 0,
        discount: 0,
        claimable: 0,
        unclaimable: 0,
        isExpanded: false,
        subItems: []
      }
    ]
  },
  {
    id: 181155,
    receiptNo: "XXXXXX",
    hn: "500741/69",
    patientName: "น.ส.ศรีนุ่น ทองคำ",
    gender: "female",
    age: "35 ปี 4 ด.",
    idCard: "xxx xxx",
    claim: "ประกันสังคม",
    phone: "0891234567",
    date: "10/07/2569",
    time: "15:47",
    status: "pending",
    billType: "insurance",
    amountDue: 1850,
    amountReceived: 2000,
    amountChange: 150,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    treatmentItems: [
      { id: 21, title: "ค่าบริการทางการพยาบาล", amount: 350, credit: 0, discount: 0, claimable: 0, unclaimable: 0, isExpanded: false, subItems: [] },
      { id: 22, title: "ค่าบริการตรวจวินิจฉัยและเลเซอร์", amount: 1500, credit: 0, discount: 0, claimable: 0, unclaimable: 0, isExpanded: false, subItems: [] }
    ]
  },
  {
    id: 181156,
    receiptNo: "XXXXXX",
    hn: "500741/69",
    patientName: "น.ส.ศรีนุ่น ทองคำ",
    gender: "female",
    age: "35 ปี 4 ด.",
    idCard: "xxx xxx",
    claim: "เงินสด",
    phone: "0891234567",
    date: "10/07/2569",
    time: "15:47",
    status: "paid",
    billType: "cash",
    amountDue: 900,
    amountReceived: 900,
    amountChange: 0,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
    treatmentItems: [
      { id: 31, title: "ค่ายาและเวชภัณฑ์หยอดตา", amount: 900, credit: 0, discount: 0, claimable: 0, unclaimable: 0, isExpanded: false, subItems: [] }
    ]
  },
  {
    id: 181157,
    receiptNo: "XXXXXX",
    hn: "500741/69",
    patientName: "น.ส.ศรีนุ่น ทองคำ",
    gender: "female",
    age: "35 ปี 4 ด.",
    idCard: "xxx xxx",
    claim: "ประกันสังคม",
    phone: "0891234567",
    date: "10/07/2569",
    time: "15:47",
    status: "cancelled",
    billType: "insurance",
    amountDue: 1200,
    amountReceived: 0,
    amountChange: 0,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    treatmentItems: [
      { id: 41, title: "ค่าบริการทางการพยาบาล", amount: 1200, credit: 0, discount: 0, claimable: 0, unclaimable: 0, isExpanded: false, subItems: [] }
    ]
  },
  {
    id: 181158,
    receiptNo: "XXXXXX",
    hn: "500741/69",
    patientName: "น.ส.ศรีนุ่น ทองคำ",
    gender: "female",
    age: "35 ปี 4 ด.",
    idCard: "xxx xxx",
    claim: "เงินสด",
    phone: "0891234567",
    date: "10/07/2569",
    time: "15:47",
    status: "pending",
    billType: "cash",
    amountDue: 650,
    amountReceived: 1000,
    amountChange: 350,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    treatmentItems: [
      { id: 51, title: "ค่าบริการตรวจตาแห้ง", amount: 650, credit: 0, discount: 0, claimable: 0, unclaimable: 0, isExpanded: false, subItems: [] }
    ]
  }
];

let selectedBillId = 181154;
let billStatusFilter = 'all'; // all | pending | paid | cancelled
let billTypeFilter = 'all';   // all | cash | insurance
let billDateFilter = 'all';
let billSearchQuery = '';

// Initialize Billing Module
function initBilling() {
  setupBillingEventListeners();
}

// Setup Event Listeners
function setupBillingEventListeners() {
  const searchInput = document.getElementById('billSearchInput');
  const clearBtn = document.getElementById('clearBillSearchBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      billSearchQuery = e.target.value.trim().toLowerCase();
      if (clearBtn) clearBtn.style.display = billSearchQuery ? 'flex' : 'none';
      renderBillingInvoicesList();
    });
  }

  const histSearch = document.getElementById('billHistSearchInput');
  const clearHistBtn = document.getElementById('clearBillHistSearchBtn');
  if (histSearch) {
    histSearch.addEventListener('input', (e) => {
      billHistSearchQuery = e.target.value.trim().toLowerCase();
      if (clearHistBtn) clearHistBtn.style.display = billHistSearchQuery ? 'flex' : 'none';
      renderBillingHistory();
    });
  }
}

// Render Billing Board
function renderBillingBoard() {
  updateBillingKPIs();
  renderBillingInvoicesList();
  renderSelectedBillDetail();

  if (window.lucide) window.lucide.createIcons();
}


// Update Top KPI Cards (Dynamic counts from billingInvoicesData)
function updateBillingKPIs() {
  const kpiTotal = document.getElementById('kpiBillTotal');
  const kpiPending = document.getElementById('kpiBillPending');
  const kpiPaid = document.getElementById('kpiBillPaid');
  const kpiCancelled = document.getElementById('kpiBillCancelled');

  const totalCount = billingInvoicesData.length;
  const pendingCount = billingInvoicesData.filter(b => b.status === 'pending').length;
  const paidCount = billingInvoicesData.filter(b => b.status === 'paid').length;
  const cancelCount = billingInvoicesData.filter(b => b.status === 'cancelled').length;

  if (kpiTotal) kpiTotal.textContent = String(totalCount);
  if (kpiPending) kpiPending.textContent = String(pendingCount);
  if (kpiPaid) kpiPaid.textContent = String(paidCount);
  if (kpiCancelled) kpiCancelled.textContent = String(cancelCount);
}

// Render Invoices List (Left Column)
function renderBillingInvoicesList() {
  const container = document.getElementById('billingInvoicesList');
  if (!container) return;

  let filtered = billingInvoicesData.filter(item => {
    // 1. Status Filter
    if (billStatusFilter === 'pending' && item.status !== 'pending') return false;
    if (billStatusFilter === 'paid' && item.status !== 'paid') return false;
    if (billStatusFilter === 'cancelled' && item.status !== 'cancelled') return false;

    // 2. Type Filter
    if (billTypeFilter === 'cash' && item.billType !== 'cash') return false;
    if (billTypeFilter === 'insurance' && item.billType !== 'insurance') return false;

    // 3. Date Filter
    if (billDateFilter !== 'all' && item.date !== billDateFilter) return false;

    // 4. Search Filter
    if (billSearchQuery) {
      const q = billSearchQuery;
      const match = item.receiptNo.toLowerCase().includes(q) ||
                    item.hn.toLowerCase().includes(q) ||
                    item.patientName.toLowerCase().includes(q) ||
                    item.phone.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: #94A3B8; background: #FFFFFF; border-radius: 8px; border: 1px dashed #CBD5E1;">
        <i data-lucide="file-question" style="width: 32px; height: 32px; margin-bottom: 8px;"></i>
        <div style="font-size: 13px;">ไม่พบรายการบิลตามเงื่อนไขที่เลือก</div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  let html = '';
  filtered.forEach(bill => {
    const isActive = bill.id === selectedBillId;
    html += `
      <div class="bill-card ${isActive ? 'active' : ''}" onclick="selectBill(${bill.id})">
        <div class="bill-card-row">
          <span class="bill-card-receipt">เลขที่ใบเสร็จ: ${bill.receiptNo}</span>
          <span class="bill-card-hn">HN: ${bill.hn}</span>
        </div>
        <div class="bill-card-row">
          <span class="bill-card-date">วันที่ออกบิล: ${bill.date} ${bill.time}</span>
          <span class="bill-card-patient">ชื่อ-นามสกุล: ${bill.patientName}</span>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}


// Select a Bill from the left column
function selectBill(id) {
  selectedBillId = id;
  renderBillingInvoicesList();
  renderSelectedBillDetail();
}

// Render Bill Detail in Right Column
function renderSelectedBillDetail() {
  const bill = billingInvoicesData.find(b => b.id === selectedBillId) || billingInvoicesData[0];
  if (!bill) return;

  // Header
  const receiptTitle = document.getElementById('detailReceiptNo');
  if (receiptTitle) receiptTitle.textContent = `เลขที่ใบเสร็จ: ${bill.receiptNo}`;

  // Patient Info
  const avatarEl = document.getElementById('detailPatientAvatar');
  const nameEl = document.getElementById('detailPatientName');
  const hnEl = document.getElementById('detailPatientHn');
  const idEl = document.getElementById('detailPatientId');
  const ageEl = document.getElementById('detailPatientAge');
  const claimEl = document.getElementById('detailPatientClaim');
  const phoneEl = document.getElementById('detailPatientPhone');

  if (avatarEl) avatarEl.src = bill.avatar;
  if (nameEl) nameEl.textContent = bill.patientName;
  if (hnEl) hnEl.textContent = `HN ${bill.hn}`;
  if (idEl) idEl.textContent = bill.idCard;
  if (ageEl) ageEl.textContent = bill.age;
  if (claimEl) claimEl.textContent = bill.claim;
  if (phoneEl) phoneEl.textContent = bill.phone;

  // Treatment Table Body
  const tbody = document.getElementById('treatmentTableBody');
  if (tbody) {
    let html = '';
    bill.treatmentItems.forEach((item) => {
      const hasSub = item.subItems && item.subItems.length > 0;
      const caretIcon = hasSub ? (item.isExpanded ? 'chevron-up' : 'chevron-down') : 'chevron-down';

      html += `
        <tr class="treatment-parent-row" onclick="toggleTreatmentRow(${bill.id}, ${item.id})">
          <td>
            <div class="treatment-title-cell">
              <button type="button" class="btn-caret-toggle">
                <i data-lucide="${caretIcon}"></i>
              </button>
              <span>${item.title}</span>
            </div>
          </td>
          <td style="text-align: right; font-weight: 500;">${item.amount.toLocaleString()}</td>
          <td style="text-align: center;">${item.discount}</td>
          <td style="text-align: center;">${item.claimable}</td>
          <td style="text-align: center;">${item.unclaimable}</td>
          <td style="text-align: center;">
            ${!hasSub ? `
              <div class="treatment-actions-cell" onclick="event.stopPropagation()">
                <button type="button" class="btn-table-delete" onclick="deleteTreatmentItem(${bill.id}, ${item.id})" title="ลบรายการ">
                  <i data-lucide="trash-2"></i>
                </button>
              </div>
            ` : ''}
          </td>
        </tr>
      `;

      // Render Sub-items if expanded
      if (hasSub && item.isExpanded) {
        item.subItems.forEach(sub => {
          html += `
            <tr class="treatment-sub-row">
              <td class="treatment-sub-title">${sub.title}</td>
              <td style="text-align: right;">${sub.amount.toLocaleString()}</td>
              <td style="text-align: center;">${sub.discount}</td>
              <td style="text-align: center;">${sub.claimable}</td>
              <td style="text-align: center;">${sub.unclaimable}</td>
              <td style="text-align: center;">
                <div class="treatment-actions-cell">
                  <button type="button" class="btn-table-edit" onclick="editTreatmentSubItem(${sub.id})" title="แก้ไข">
                    <i data-lucide="square-pen"></i>
                  </button>
                  <button type="button" class="btn-table-delete" onclick="deleteTreatmentSubItem(${bill.id}, ${item.id}, ${sub.id})" title="ลบ">
                    <i data-lucide="trash-2"></i>
                  </button>
                </div>
              </td>
            </tr>
          `;
        });
      }
    });

    tbody.innerHTML = html;
  }

  // Summary Totals & Payment Figures
  const dueEl = document.getElementById('payAmountDue');
  const receivedEl = document.getElementById('payAmountReceived');
  const changeEl = document.getElementById('payAmountChange');

  if (dueEl) dueEl.textContent = bill.amountDue.toLocaleString();
  if (receivedEl) receivedEl.textContent = bill.amountReceived.toLocaleString();
  if (changeEl) changeEl.textContent = bill.amountChange.toLocaleString();

  if (window.lucide) window.lucide.createIcons();
}


// Toggle Treatment Caret Expansion
function toggleTreatmentRow(billId, itemId) {
  const bill = billingInvoicesData.find(b => b.id === billId);
  if (!bill) return;

  const item = bill.treatmentItems.find(t => t.id === itemId);
  if (item && item.subItems && item.subItems.length > 0) {
    item.isExpanded = !item.isExpanded;
    renderSelectedBillDetail();
  }
}

// Sub-item actions
function deleteTreatmentItem(billId, itemId) {
  const bill = billingInvoicesData.find(b => b.id === billId);
  if (!bill) return;
  bill.treatmentItems = bill.treatmentItems.filter(t => t.id !== itemId);
  renderSelectedBillDetail();
  showToast('ลบรายการสำเร็จ', 'ลบรายการค่ารักษาเรียบร้อย', 'info');
}

function deleteTreatmentSubItem(billId, itemId, subId) {
  const bill = billingInvoicesData.find(b => b.id === billId);
  if (!bill) return;
  const item = bill.treatmentItems.find(t => t.id === itemId);
  if (item && item.subItems) {
    item.subItems = item.subItems.filter(s => s.id !== subId);
    renderSelectedBillDetail();
    showToast('ลบรายการย่อยสำเร็จ', 'ลบรายละเอียดเรียบร้อย', 'info');
  }
}

function editTreatmentSubItem(subId) {
  showToast('แก้ไขรายการ', 'เปิดหน้าต่างแก้ไขจำนวนเงินรายการค่ารักษา', 'info');
}

// Payment method change
function handlePaymentMethodChange() {
  const select = document.getElementById('paymentMethodSelect');
  if (!select) return;
  showToast('เปลี่ยนรูปแบบการชำระ', `เลือกชำระแบบ: ${select.options[select.selectedIndex].text}`, 'info');
}

// Confirm Payment -> ซิงก์ประวัติการเงิน (billingHistoryData), หน้าหลัก (Home Revenue), และสถานะคอร์ส (coursesData)
function handleConfirmPayment() {
  const bill = billingInvoicesData.find(b => b.id === selectedBillId);
  if (!bill) return;

  bill.status = 'paid';
  if (!bill.receiptNo || bill.receiptNo === 'XXXXXX') {
    bill.receiptNo = String(181155 + billingHistoryData.length);
  }

  const select = document.getElementById('paymentMethodSelect');
  const payMethodText = select && select.options[select.selectedIndex]
    ? select.options[select.selectedIndex].text
    : (bill.billType === 'insurance' ? 'ประกันสังคม' : 'QR PromptPay');

  // 1. บันทึกลงประวัติการเงิน (billingHistoryData)
  if (typeof billingHistoryData !== 'undefined') {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} น.`;
    const recCode = bill.receiptNo.startsWith('REC-') ? bill.receiptNo : `REC-${bill.receiptNo}`;
    const summaryTxt = (bill.treatmentItems && bill.treatmentItems.length > 0)
      ? bill.treatmentItems.filter(t => t.amount > 0).map(t => t.title).join(', ') || 'ค่ารักษาพยาบาลและเวชภัณฑ์'
      : 'ค่ารักษาพยาบาลและเวชภัณฑ์';

    billingHistoryData.unshift({
      id: Date.now(),
      payDate: "10 ก.ค. 69",
      payTime: timeStr,
      receiptNo: recCode,
      patientName: bill.patientName,
      hn: bill.hn,
      phone: bill.phone || "089-123-4567",
      itemsSummary: summaryTxt,
      payMethod: payMethodText,
      netAmount: Number(bill.amountDue) || 0,
      cashier: (typeof currentLoggedInUser !== 'undefined' && currentLoggedInUser) ? currentLoggedInUser.fullName : "พว. สมศรี ส้มแดง",
      status: "paid",
      statusLabel: "✓ จ่ายสำเร็จ"
    });
    if (typeof renderBillingHistory === 'function') renderBillingHistory();
  }

  // 2. หากผู้ป่วยมีคอร์สที่ค้างชำระ (pending-payment) ในระบบคอร์สจักษุ ให้ปลดล็อกเป็นพร้อมใช้สิทธิ์ทันที
  if (typeof coursesData !== 'undefined') {
    const pendingCourse = coursesData.find(
      c => c.status === 'pending-payment' && (c.patientName === bill.patientName || c.hn.includes(bill.hn.split('/')[0]))
    );
    if (pendingCourse) {
      pendingCourse.status = 'ready';
      pendingCourse.statusLabel = '✓ พร้อมใช้สิทธิ์';
      if (typeof renderKPIs === 'function') renderKPIs();
      if (typeof renderTable === 'function') renderTable();
    }
  }

  playHospitalChime();
  showToast('✓ บันทึกการชำระเงินสำเร็จ', `ออกใบเสร็จรับเงิน #${bill.receiptNo} สำหรับ ${bill.patientName} (฿${Number(bill.amountDue).toLocaleString()}) และอัปเดตยอดรายได้คลินิกแล้ว`, 'success');
  renderBillingBoard();
  if (typeof renderHomeDashboard === 'function') renderHomeDashboard();
}

// Cancel Bill
function handleCancelBill() {
  const bill = billingInvoicesData.find(b => b.id === selectedBillId);
  if (!bill) return;

  bill.status = 'cancelled';
  showToast('ยกเลิกบิลเรียบร้อย', `ยกเลิกบิล ${bill.receiptNo} ของ ${bill.patientName} แล้ว`, 'info');
  renderBillingBoard();
  if (typeof renderHomeDashboard === 'function') renderHomeDashboard();
}

// Medical history button
function showPatientMedicalHistory() {
  openExamHistoryModal();
}

// Print Receipt
function printReceipt() {
  window.print();
}

// KPI filters
function filterBillsByStatus(status) {
  billStatusFilter = status;
  
  const allCard = document.getElementById('billKpiAll');
  const pendingCard = document.getElementById('billKpiPending');
  const paidCard = document.getElementById('billKpiPaid');
  const cancelCard = document.getElementById('billKpiCancelled');

  if (allCard) allCard.classList.toggle('active-navy', status === 'all');
  if (pendingCard) pendingCard.classList.toggle('active-navy', status === 'pending');
  if (paidCard) paidCard.classList.toggle('active-navy', status === 'paid');
  if (cancelCard) cancelCard.classList.toggle('active-navy', status === 'cancelled');

  renderBillingInvoicesList();
}

function filterBillsByType(type) {
  billTypeFilter = type;
  document.querySelectorAll('[data-bill-type]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.billType === type);
  });
  renderBillingInvoicesList();
}

function handleBillFilterChange() {
  const dateSelect = document.getElementById('billDateFilter');
  if (dateSelect) billDateFilter = dateSelect.value;
  renderBillingInvoicesList();
}

function clearBillSearch() {
  const searchInput = document.getElementById('billSearchInput');
  const clearBtn = document.getElementById('clearBillSearchBtn');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  billSearchQuery = '';
  renderBillingInvoicesList();
}

function showBillingHistoryToast() {
  switchView('billing-history');
}

// ==========================================================
// BILLING HISTORY VIEW (หน้ารายการประวัติการเงิน)
// ==========================================================

let billingHistoryData = [
  {
    id: 1,
    payDate: "10 ก.ค. 69",
    payTime: "15:47 น.",
    receiptNo: "REC-181154",
    patientName: "น.ส. กุลธิดา ขุนยางสิน",
    hn: "500570/69",
    phone: "098-261-7481",
    itemsSummary: "ค่าบริการทางการพยาบาล, เวชภัณฑ์หยอดตา",
    payMethod: "ประกันสังคม",
    netAmount: 1200,
    cashier: "พว. สมศรี สีแดง",
    status: "paid",
    statusLabel: "✓ จ่ายสำเร็จ"
  },
  {
    id: 2,
    payDate: "10 ก.ค. 69",
    payTime: "14:30 น.",
    receiptNo: "REC-181153",
    patientName: "นาย ชัยรัตน์ โสภณ",
    hn: "67-048123",
    phone: "087-123-9876",
    itemsSummary: "เลเซอร์รักษาตาแห้ง (IPL Dry Eye) ครั้งที่ 3",
    payMethod: "เงินสด",
    netAmount: 3500,
    cashier: "พว. สมศรี สีแดง",
    status: "paid",
    statusLabel: "✓ จ่ายสำเร็จ"
  },
  {
    id: 3,
    payDate: "10 ก.ค. 69",
    payTime: "13:15 น.",
    receiptNo: "REC-181152",
    patientName: "นาง วิไลพร มิ่งขวัญ",
    hn: "67-048199",
    phone: "089-987-6543",
    itemsSummary: "ฉีดยาน้ำวุ้นตา (Anti-VEGF) ข้างขวา",
    payMethod: "QR PromptPay",
    netAmount: 8500,
    cashier: "พว. วารุณี สดใส",
    status: "paid",
    statusLabel: "✓ จ่ายสำเร็จ"
  },
  {
    id: 4,
    payDate: "10 ก.ค. 69",
    payTime: "11:50 น.",
    receiptNo: "REC-181151",
    patientName: "ด.ช. ปัณณธร วงศ์เจริญ",
    hn: "67-048201",
    phone: "081-456-7890",
    itemsSummary: "ฝึกกล้ามเนื้อตา (Vision Therapy), ยาหยอดตา",
    payMethod: "QR PromptPay",
    netAmount: 2200,
    cashier: "พว. สมศรี สีแดง",
    status: "paid",
    statusLabel: "✓ จ่ายสำเร็จ"
  },
  {
    id: 5,
    payDate: "10 ก.ค. 69",
    payTime: "11:05 น.",
    receiptNo: "REC-181150",
    patientName: "นาย สมศักดิ์ กิจเจริญ",
    hn: "68-991204",
    phone: "086-332-1144",
    itemsSummary: "ตรวจความดันลูกตาและเลนส์ตา (IOP Care)",
    payMethod: "เงินสด",
    netAmount: 900,
    cashier: "พว. วารุณี สดใส",
    status: "paid",
    statusLabel: "✓ จ่ายสำเร็จ"
  },
  {
    id: 6,
    payDate: "10 ก.ค. 69",
    payTime: "10:40 น.",
    receiptNo: "REC-181149",
    patientName: "น.ส.ศรีนุ่น ทองคำ",
    hn: "500741/69",
    phone: "089-123-4567",
    itemsSummary: "ค่าบริการทางการพยาบาล, ตรวจวินิจฉัย",
    payMethod: "ประกันสังคม",
    netAmount: 1200,
    cashier: "พว. สมศรี สีแดง",
    status: "cancelled",
    statusLabel: "✕ ยกเลิกบิล"
  },
  {
    id: 7,
    payDate: "10 ก.ค. 69",
    payTime: "10:10 น.",
    receiptNo: "REC-181148",
    patientName: "นาง พรรณี เด่นดวง",
    hn: "69-021500",
    phone: "082-778-9900",
    itemsSummary: "คอร์สเลเซอร์ตาแห้ง IPL, น้ำตาเทียมไร้สารกันเสีย",
    payMethod: "QR PromptPay",
    netAmount: 4200,
    cashier: "พว. สมศรี สีแดง",
    status: "paid",
    statusLabel: "✓ จ่ายสำเร็จ"
  },
  {
    id: 8,
    payDate: "10 ก.ค. 69",
    payTime: "09:30 น.",
    receiptNo: "REC-181147",
    patientName: "นาย ประสิทธิ์ รุ่งเรือง",
    hn: "67-046610",
    phone: "085-555-8899",
    itemsSummary: "ตรวจต้อกระจกและวัดค่าเลนส์ตา (IOL Master)",
    payMethod: "เงินสด",
    netAmount: 1800,
    cashier: "พว. วารุณี สดใส",
    status: "paid",
    statusLabel: "✓ จ่ายสำเร็จ"
  },
  {
    id: 9,
    payDate: "10 ก.ค. 69",
    payTime: "09:00 น.",
    receiptNo: "REC-181146",
    patientName: "คุณ สุภาณี วัฒนศิลป์",
    hn: "67-043321",
    phone: "091-222-3344",
    itemsSummary: "ค่ายาหยอดตาลดความดันตา (Xalatan 0.005%)",
    payMethod: "เงินสด",
    netAmount: 1200,
    cashier: "พว. สมศรี สีแดง",
    status: "cancelled",
    statusLabel: "✕ ยกเลิกบิล"
  },
  {
    id: 10,
    payDate: "10 ก.ค. 69",
    payTime: "08:45 น.",
    receiptNo: "REC-181145",
    patientName: "ด.ญ. กวิตา แสนสุข",
    hn: "68-997012",
    phone: "083-444-5566",
    itemsSummary: "คอร์สกล้ามเนื้อตา Vision Therapy (ครั้งที่ 4)",
    payMethod: "QR PromptPay",
    netAmount: 1000,
    cashier: "พว. สมศรี สีแดง",
    status: "paid",
    statusLabel: "✓ จ่ายสำเร็จ"
  }
];

let billHistStatusFilter = 'all'; // all | paid | cancelled
let billHistDateFilter = '10/07/2569';
let billHistMethodFilter = 'all';
let billHistSearchQuery = '';

function renderBillingHistory() {
  // Update KPI counters
  const totalEl = document.getElementById('kpiBillHistTotal');
  const paidEl = document.getElementById('kpiBillHistPaid');
  const cancelledEl = document.getElementById('kpiBillHistCancelled');
  const revenueEl = document.getElementById('kpiBillHistRevenue');

  const totalCount = billingHistoryData.length;
  const paidCount = billingHistoryData.filter(b => b.status === 'paid').length;
  const cancelCount = billingHistoryData.filter(b => b.status === 'cancelled').length;
  const totalRevenue = billingHistoryData
    .filter(b => b.status === 'paid')
    .reduce((sum, b) => sum + b.netAmount, 0);

  if (totalEl) totalEl.textContent = `${totalCount}`;
  if (paidEl) paidEl.textContent = `${paidCount}`;
  if (cancelledEl) cancelledEl.textContent = `${cancelCount}`;
  if (revenueEl) revenueEl.textContent = `฿ ${totalRevenue.toLocaleString()}`;

  const tbody = document.getElementById('billingHistoryTableBody');
  if (!tbody) return;

  let filtered = billingHistoryData.filter(item => {
    // 1. Status Filter
    if (billHistStatusFilter === 'paid' && item.status !== 'paid') return false;
    if (billHistStatusFilter === 'cancelled' && item.status !== 'cancelled') return false;

    // 2. Date Filter
    if (billHistDateFilter !== 'all' && item.payDate !== billHistDateFilter) {
      if (billHistDateFilter === 'today' && !item.payDate.includes('10 ก.ค.')) return false;
    }

    // 3. Payment Method Filter
    if (billHistMethodFilter !== 'all' && item.payMethod !== billHistMethodFilter) return false;

    // 4. Search Filter
    if (billHistSearchQuery) {
      const q = billHistSearchQuery;
      const match = item.receiptNo.toLowerCase().includes(q) ||
                    item.patientName.toLowerCase().includes(q) ||
                    item.hn.toLowerCase().includes(q) ||
                    item.itemsSummary.toLowerCase().includes(q) ||
                    item.phone.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" style="text-align: center; padding: 48px; color: #94A3B8;">
          <i data-lucide="file-question" style="width: 32px; height: 32px; margin-bottom: 8px;"></i>
          <div>ไม่พบประวัติการเงินตามเงื่อนไขที่เลือก</div>
        </td>
      </tr>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  let html = '';
  filtered.forEach(item => {
    const isPaid = item.status === 'paid';
    const statusColor = isPaid ? '#059669' : '#DC2626';
    const statusBg = isPaid ? '#ECFDF5' : '#FEF2F2';
    const statusBorder = isPaid ? '#A7F3D0' : '#FECACA';

    let methodStyle = 'background: #F1F5F9; color: #475569;';
    if (item.payMethod === 'เงินสด') methodStyle = 'background: #ECFDF5; color: #047857;';
    else if (item.payMethod === 'QR PromptPay') methodStyle = 'background: #FAF5FF; color: #7E22CE;';
    else if (item.payMethod === 'ประกันสังคม') methodStyle = 'background: #FEF3C7; color: #B45309;';

    html += `
      <tr>
        <td>
          <div style="font-weight: 500; color: #1E293B;">${item.payDate}</div>
          <div style="font-size: 12px; color: #64748B; display: flex; align-items: center; gap: 4px; margin-top: 2px;">
            <i data-lucide="clock" style="width: 12px; height: 12px;"></i>
            <span>${item.payTime}</span>
          </div>
        </td>
        <td>
          <strong style="color: #0284C7; font-size: 13.5px; cursor: pointer;" onclick="viewReceiptDetail('${item.receiptNo}')" title="คลิกดูรายละเอียด">${item.receiptNo}</strong>
        </td>
        <td>
          <div style="font-weight: 600; color: #0F172A;">${item.patientName}</div>
          <div style="font-size: 12px; color: #0D3B5E; margin-top: 2px;">HN: ${item.hn}</div>
          <div style="font-size: 11.5px; color: #64748B;">📞 ${item.phone}</div>
        </td>
        <td>
          <div style="font-size: 13px; color: #334155; line-height: 1.4;">${item.itemsSummary}</div>
        </td>
        <td style="text-align: center;">
          <span style="display: inline-block; font-size: 11.5px; font-weight: 500; padding: 3px 9px; border-radius: 9999px; ${methodStyle}">
            ${item.payMethod}
          </span>
        </td>
        <td style="text-align: right;">
          <span style="font-size: 14px; font-weight: 700; color: #0D3B5E;">฿ ${item.netAmount.toLocaleString()}</span>
        </td>
        <td>
          <div style="font-size: 12.5px; color: #475569;">${item.cashier}</div>
        </td>
        <td style="text-align: center;">
          <span style="display: inline-flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 600; padding: 3px 10px; border-radius: 9999px; background: ${statusBg}; color: ${statusColor}; border: 1px solid ${statusBorder};">
            ${item.statusLabel}
          </span>
        </td>
        <td style="text-align: center;">
          <div style="display: inline-flex; align-items: center; gap: 6px;">
            <button type="button" class="btn-table-edit" onclick="printSingleReceipt('${item.receiptNo}')" title="พิมพ์ใบเสร็จ">
              <i data-lucide="printer"></i>
            </button>
            <button type="button" class="btn-table-edit" style="color: #0D3B5E; border-color: #CBD5E1; background: #FFFFFF;" onclick="viewReceiptDetail('${item.receiptNo}')" title="ดูรายละเอียดบิล">
              <i data-lucide="eye"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}


function filterBillingHistoryByStatus(status) {
  billHistStatusFilter = status;
  const cardAll = document.getElementById('billHistKpiAll');
  const cardPaid = document.getElementById('billHistKpiPaid');
  const cardCancelled = document.getElementById('billHistKpiCancelled');

  if (cardAll) cardAll.classList.toggle('active-navy', status === 'all');
  if (cardPaid) cardPaid.classList.toggle('active-navy', status === 'paid');
  if (cardCancelled) cardCancelled.classList.toggle('active-navy', status === 'cancelled');

  const select = document.getElementById('billHistStatusSelect');
  if (select) select.value = status;

  renderBillingHistory();
}

function handleBillHistFilterChange() {
  const dateSelect = document.getElementById('billHistDateFilter');
  const methodSelect = document.getElementById('billHistMethodFilter');
  const statusSelect = document.getElementById('billHistStatusSelect');

  if (dateSelect) billHistDateFilter = dateSelect.value;
  if (methodSelect) billHistMethodFilter = methodSelect.value;
  if (statusSelect) {
    billHistStatusFilter = statusSelect.value;
    const cardAll = document.getElementById('billHistKpiAll');
    const cardPaid = document.getElementById('billHistKpiPaid');
    const cardCancelled = document.getElementById('billHistKpiCancelled');

    if (cardAll) cardAll.classList.toggle('active-navy', billHistStatusFilter === 'all');
    if (cardPaid) cardPaid.classList.toggle('active-navy', billHistStatusFilter === 'paid');
    if (cardCancelled) cardCancelled.classList.toggle('active-navy', billHistStatusFilter === 'cancelled');
  }

  renderBillingHistory();
}

function clearBillHistSearch() {
  const searchInput = document.getElementById('billHistSearchInput');
  const clearBtn = document.getElementById('clearBillHistSearchBtn');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  billHistSearchQuery = '';
  renderBillingHistory();
}

function printSingleReceipt(receiptNo) {
  playHospitalChime();
  showToast('พิมพ์ใบเสร็จ', `กำลังสั่งพิมพ์ใบเสร็จรับเงินเลขที่ ${receiptNo}`, 'info');
  window.print();
}

function viewReceiptDetail(receiptNo) {
  const item = billingHistoryData.find(b => b.receiptNo === receiptNo);
  if (item) {
    showToast('ข้อมูลใบเสร็จ', `ใบเสร็จ ${receiptNo} ยอด ฿${item.netAmount.toLocaleString()} (${item.payMethod})`, 'info');
  }
}

// ==========================================================
// MEDICAL RECORDS SYSTEM (ระบบเวชระเบียน - Unique Realistic Mockup)
// ==========================================================

let recordsData = [
  {
    id: 1,
    citizenId: "1-1037-0045-XXXX",
    fullCitizenId: "1-1037-0045-8912",
    hn: "1252568-69",
    gender: "female",
    prefix: "น.ส.",
    name: "น.ส. กุลธิดา ขุนยางสิน",
    registeredDate: "27 ต.ค. 69",
    isToday: true,
    phone: "089-245-6192",
    age: "28 ปี",
    dob: "14 พ.ค. 2541",
    claim: "สิทธิประกันสังคม (รพ.จุฬาลงกรณ์)",
    allergy: "ไม่มีประวัติแพ้ยา",
    underlying: "สายตาสั้นและภาวะตาแห้งเรื้อรัง",
    bloodGroup: "O Rh+",
    avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=240",
    detPrefixTh: "นางสาว",
    detFirstNameTh: "กุลธิดา",
    detLastNameTh: "ขุนยางสิน",
    detPrefixEn: "Miss",
    detFirstNameEn: "Kultida",
    detLastNameEn: "Khunyangsin",
    detNationality: "ไทย",
    detRace: "ไทย",
    detReligion: "พุทธ",
    detCardType: "บัตรประชาชน",
    detPatientType: "สิทธิประกันสังคม",
    detRemark: "คนไข้ใส่คอนแทคเลนส์ประจำ แนะนำงดใส่ก่อนตรวจ",
    detAgeYear: "28 ปี",
    detAgeMonth: "5 เดือน",
    detAgeDay: "13 วัน",
    detEducation: "ปริญญาตรี",
    detOccupation: "พนักงานบริษัทเอกชน",
    detIncome: "30,001 - 50,000 บาท",
    detTel: "02-652-1190",
    detEmail: "kultida.k@email.com",
    detProvince: "กรุงเทพมหานคร",
    detDistrict: "ปทุมวัน",
    detSubdistrict: "ลุมพินี",
    detZipcode: "10330",
    detRoad: "พระราม 4",
    detIntersection: "ศาลาแดง",
    detVillage: "ลุมพินีพาร์ค",
    detHouseNo: "98/142",
    detAddrLine: "@kultida_k",
    detFatherFirst: "สมพงษ์",
    detFatherLast: "ขุนยางสิน",
    detFatherCid: "3-1005-0021-4589",
    detMotherFirst: "อารีย์",
    detMotherLast: "ขุนยางสิน",
    detMotherCid: "3-1005-0021-4590",
    detSpouseFirst: "-",
    detSpouseLast: "-",
    detSpouseCid: "-",
    detContactFirst: "อารีย์",
    detContactLast: "ขุนยางสิน",
    detContactCid: "3-1005-0021-4590",
    detContactTel: "02-652-1190",
    detContactMobile: "081-842-9910",
    detContactRelation: "มารดา",
    detContactAddress: "98/142 ถ.พระราม 4 แขวงลุมพินี เขตปทุมวัน กรุงเทพฯ 10330",
    detContactSameHouse: "ใช่",
    detHasAllergy: "ไม่ใช่",
    detDrugAllergy: "ไม่มีประวัติแพ้ยา",
    detOtherAllergy: "ฝุ่นละออง / เกสรดอกไม้",
    detClinicalNote: "ตรวจวัดความดันตาปกติ IOP 14 mmHg",
    detSurgicalNote: "ไม่เคยผ่าตัดบริเวณดวงตา"
  },
  {
    id: 2,
    citizenId: "3-1012-0089-XXXX",
    fullCitizenId: "3-1012-0089-4152",
    hn: "1252569-69",
    gender: "male",
    prefix: "นาย",
    name: "นาย ชัยรัตน์ โสภณ",
    registeredDate: "27 ต.ค. 69",
    isToday: true,
    phone: "087-123-9876",
    age: "45 ปี",
    dob: "5 ส.ค. 2524",
    claim: "สิทธิประกันสังคม (รพ.ศิริราช)",
    allergy: "ไม่มีประวัติแพ้ยา",
    underlying: "ความดันโลหิตสูง / ตาแห้ง",
    bloodGroup: "A Rh+",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=240",
    detPrefixTh: "นาย",
    detFirstNameTh: "ชัยรัตน์",
    detLastNameTh: "โสภณ",
    detPrefixEn: "Mr.",
    detFirstNameEn: "Chairat",
    detLastNameEn: "Sophon",
    detNationality: "ไทย",
    detRace: "ไทย",
    detReligion: "พุทธ",
    detCardType: "บัตรประชาชน",
    detPatientType: "สิทธิประกันสังคม",
    detRemark: "คนไข้คอร์ส IPL รักษาตาแห้ง ต่อเนื่อง",
    detAgeYear: "45 ปี",
    detAgeMonth: "2 เดือน",
    detAgeDay: "22 วัน",
    detEducation: "ปริญญาโท",
    detOccupation: "วิศวกรโยธา",
    detIncome: "มากกว่า 50,000 บาท",
    detTel: "02-411-3088",
    detEmail: "chairat.sophon@email.com",
    detProvince: "กรุงเทพมหานคร",
    detDistrict: "บางกอกน้อย",
    detSubdistrict: "ศิริราช",
    detZipcode: "10700",
    detRoad: "วังหลัง",
    detIntersection: "พรานนก",
    detVillage: "บ้านสวนธน",
    detHouseNo: "45/12",
    detAddrLine: "chairat_eng",
    detFatherFirst: "ประเสริฐ",
    detFatherLast: "โสภณ",
    detFatherCid: "3-1012-0010-2214",
    detMotherFirst: "ประภา",
    detMotherLast: "โสภณ",
    detMotherCid: "3-1012-0010-2215",
    detSpouseFirst: "กานดา",
    detSpouseLast: "โสภณ",
    detSpouseCid: "1-1014-0052-8819",
    detContactFirst: "กานดา",
    detContactLast: "โสภณ",
    detContactCid: "1-1014-0052-8819",
    detContactTel: "02-411-3088",
    detContactMobile: "089-412-5566",
    detContactRelation: "คู่สมรส",
    detContactAddress: "45/12 ถ.วังหลัง แขวงศิริราช เขตบางกอกน้อย กรุงเทพฯ 10700",
    detContactSameHouse: "ใช่",
    detHasAllergy: "ไม่ใช่",
    detDrugAllergy: "ไม่มีประวัติแพ้ยา",
    detOtherAllergy: "ไม่มี",
    detClinicalNote: "รับประทานยาลดความดัน Amlodipine 5 mg วันละ 1 เม็ด",
    detSurgicalNote: "ไม่มีประวัติผ่าตัด"
  },
  {
    id: 3,
    citizenId: "1-5099-0124-XXXX",
    fullCitizenId: "1-5099-0124-3301",
    hn: "1252570-69",
    gender: "female",
    prefix: "นาง",
    name: "นาง วิไลพร มิ่งขวัญ",
    registeredDate: "26 ต.ค. 69",
    isToday: false,
    phone: "089-987-6543",
    age: "58 ปี",
    dob: "20 มี.ค. 2511",
    claim: "จ่ายตรงกรมบัญชีกลาง",
    allergy: "แพ้ Penicillin (ผื่นคันลมพิษ)",
    underlying: "จุดภาพชัดจอประสาทตาบวม (DME)",
    bloodGroup: "B Rh+",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=240",
    detPrefixTh: "นาง",
    detFirstNameTh: "วิไลพร",
    detLastNameTh: "มิ่งขวัญ",
    detPrefixEn: "Mrs.",
    detFirstNameEn: "Wilaiporn",
    detLastNameEn: "Mingkhwan",
    detNationality: "ไทย",
    detRace: "ไทย",
    detReligion: "พุทธ",
    detCardType: "บัตรประชาชน",
    detPatientType: "จ่ายตรงกรมบัญชีกลาง",
    detRemark: "ระวังการใช้ยากลุ่ม Penicillin ทุกชนิด",
    detAgeYear: "58 ปี",
    detAgeMonth: "7 เดือน",
    detAgeDay: "7 วัน",
    detEducation: "ปริญญาตรี",
    detOccupation: "ข้าราชการครูบำนาญ",
    detIncome: "30,001 - 50,000 บาท",
    detTel: "02-513-7741",
    detEmail: "wilaiporn.m@email.com",
    detProvince: "กรุงเทพมหานคร",
    detDistrict: "จตุจักร",
    detSubdistrict: "ลาดยาว",
    detZipcode: "10900",
    detRoad: "พหลโยธิน",
    detIntersection: "เกษตร",
    detVillage: "เสนานิเวศน์ 1",
    detHouseNo: "118/9",
    detAddrLine: "wilai_mk",
    detFatherFirst: "ทองดี",
    detFatherLast: "เจริญสุข",
    detFatherCid: "3-5001-0041-1120",
    detMotherFirst: "คำปัน",
    detMotherLast: "เจริญสุข",
    detMotherCid: "3-5001-0041-1121",
    detSpouseFirst: "เกรียงศักดิ์",
    detSpouseLast: "มิ่งขวัญ",
    detSpouseCid: "3-1009-0088-7412",
    detContactFirst: "เกรียงศักดิ์",
    detContactLast: "มิ่งขวัญ",
    detContactCid: "3-1009-0088-7412",
    detContactTel: "02-513-7741",
    detContactMobile: "081-775-6622",
    detContactRelation: "คู่สมรส",
    detContactAddress: "118/9 หมู่บ้านเสนานิเวศน์ 1 แขวงลาดยาว เขตจตุจักร กรุงเทพฯ 10900",
    detContactSameHouse: "ใช่",
    detHasAllergy: "ใช่",
    detDrugAllergy: "แพ้ยา Penicillin และ Amoxicillin (ผื่นคัน)",
    detOtherAllergy: "อาหารทะเล (กุ้ง)",
    detClinicalNote: "ฉีดยา Anti-VEGF ตาขวา (OD) ครั้งที่ 2 เรียบร้อย",
    detSurgicalNote: "ผ่าตัดคลอดบุตร พ.ศ. 2539"
  },
  {
    id: 4,
    citizenId: "1-1004-0218-XXXX",
    fullCitizenId: "1-1004-0218-7654",
    hn: "1252571-69",
    gender: "male",
    prefix: "ด.ช.",
    name: "ด.ช. ปัณณธร วงศ์เจริญ",
    registeredDate: "25 ต.ค. 69",
    isToday: false,
    phone: "081-456-7890",
    age: "9 ปี",
    dob: "11 ม.ค. 2560",
    claim: "ชำระเงินสด / ประกันสุขภาพครอบครัว",
    allergy: "ไม่มีประวัติแพ้ยา",
    underlying: "กล้ามเนื้อตาอ่อนแรง (Amblyopia)",
    bloodGroup: "O Rh+",
    avatar: "https://images.unsplash.com/photo-1545696968-1a5245650b36?auto=format&fit=crop&q=80&w=240",
    detPrefixTh: "ด.ช.",
    detFirstNameTh: "ปัณณธร",
    detLastNameTh: "วงศ์เจริญ",
    detPrefixEn: "Master",
    detFirstNameEn: "Pannathorn",
    detLastNameEn: "Wongcharoen",
    detNationality: "ไทย",
    detRace: "ไทย",
    detReligion: "พุทธ",
    detCardType: "บัตรประชาชน",
    detPatientType: "ผู้ป่วยทั่วไป",
    detRemark: "ผู้ปกครองพามาฝึกกล้ามเนื้อตาทุกวันเสาร์",
    detAgeYear: "9 ปี",
    detAgeMonth: "9 เดือน",
    detAgeDay: "16 วัน",
    detEducation: "ประถมศึกษา",
    detOccupation: "นักเรียน",
    detIncome: "ต่ำกว่า 15,000 บาท",
    detTel: "02-391-8820",
    detEmail: "parent.wongcharoen@email.com",
    detProvince: "กรุงเทพมหานคร",
    detDistrict: "วัฒนา",
    detSubdistrict: "คลองตันเหนือ",
    detZipcode: "10110",
    detRoad: "สุขุมวิท 55",
    detIntersection: "ทองหล่อ",
    detVillage: "โนเบิล โซโล",
    detHouseNo: "88/305",
    detAddrLine: "mom_pannathorn",
    detFatherFirst: "ธนากร",
    detFatherLast: "วงศ์เจริญ",
    detFatherCid: "1-1004-0019-5541",
    detMotherFirst: "พิมพ์ชนก",
    detMotherLast: "วงศ์เจริญ",
    detMotherCid: "1-1004-0023-8812",
    detSpouseFirst: "-",
    detSpouseLast: "-",
    detSpouseCid: "-",
    detContactFirst: "พิมพ์ชนก",
    detContactLast: "วงศ์เจริญ",
    detContactCid: "1-1004-0023-8812",
    detContactTel: "02-391-8820",
    detContactMobile: "081-456-7890",
    detContactRelation: "มารดา",
    detContactAddress: "88/305 ถ.สุขุมวิท 55 แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพฯ 10110",
    detContactSameHouse: "ใช่",
    detHasAllergy: "ไม่ใช่",
    detDrugAllergy: "ไม่มีประวัติแพ้ยา",
    detOtherAllergy: "ไม่มี",
    detClinicalNote: "VA: OD 20/25, OS 20/30 ตอบสนองต่อ Vision Therapy ดี",
    detSurgicalNote: "ไม่เคยผ่าตัด"
  },
  {
    id: 5,
    citizenId: "3-1201-0054-XXXX",
    fullCitizenId: "3-1201-0054-9081",
    hn: "1252572-69",
    gender: "male",
    prefix: "นาย",
    name: "นาย สมศักดิ์ กิจเจริญ",
    registeredDate: "22 ต.ค. 69",
    isToday: false,
    phone: "086-332-1144",
    age: "62 ปี",
    dob: "18 พ.ย. 2507",
    claim: "ชำระเงินสด / ประกันสุขภาพ AIA",
    allergy: "แพ้ยากลุ่ม Sulfa",
    underlying: "ต้อหินมุมเปิดเรื้อรัง (POAG) และเบาหวานชนิดที่ 2",
    bloodGroup: "AB Rh+",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=240",
    detPrefixTh: "นาย",
    detFirstNameTh: "สมศักดิ์",
    detLastNameTh: "กิจเจริญ",
    detPrefixEn: "Mr.",
    detFirstNameEn: "Somsak",
    detLastNameEn: "Kitcharoen",
    detNationality: "ไทย",
    detRace: "จีน",
    detReligion: "พุทธ",
    detCardType: "บัตรประชาชน",
    detPatientType: "ผู้ป่วยทั่วไป",
    detRemark: "ตรวจลานสายตา (Visual Field) และ OCT ทุก 3 เดือน",
    detAgeYear: "61 ปี",
    detAgeMonth: "11 เดือน",
    detAgeDay: "9 วัน",
    detEducation: "ปริญญาตรี",
    detOccupation: "ธุรกิจส่วนตัว / ค้าขาย",
    detIncome: "มากกว่า 50,000 บาท",
    detTel: "02-589-4410",
    detEmail: "somsak.kit@email.com",
    detProvince: "นนทบุรี",
    detDistrict: "เมืองนนทบุรี",
    detSubdistrict: "บางกระสอ",
    detZipcode: "11000",
    detRoad: "รัตนาธิเบศร์",
    detIntersection: "แคราย",
    detVillage: "ศุภาลัย พาร์ค",
    detHouseNo: "219/45",
    detAddrLine: "somsak_k",
    detFatherFirst: "กิมเฮง",
    detFatherLast: "กิจเจริญ",
    detFatherCid: "3-1201-0001-1189",
    detMotherFirst: "ซิวหลาน",
    detMotherLast: "กิจเจริญ",
    detMotherCid: "3-1201-0001-1190",
    detSpouseFirst: "วันเพ็ญ",
    detSpouseLast: "กิจเจริญ",
    detSpouseCid: "3-1201-0048-3321",
    detContactFirst: "วันเพ็ญ",
    detContactLast: "กิจเจริญ",
    detContactCid: "3-1201-0048-3321",
    detContactTel: "02-589-4410",
    detContactMobile: "089-112-3344",
    detContactRelation: "คู่สมรส",
    detContactAddress: "219/45 ถ.รัตนาธิเบศร์ ต.บางกระสอ อ.เมือง จ.นนทบุรี 11000",
    detContactSameHouse: "ใช่",
    detHasAllergy: "ใช่",
    detDrugAllergy: "แพ้ยาปฏิชีวนะกลุ่ม Sulfonamides",
    detOtherAllergy: "ไม่มี",
    detClinicalNote: "หยอดยาลดความดันตา Latanoprost ก่อนนอนทุกวัน",
    detSurgicalNote: "เคยทำเลเซอร์ SLT ทั้งสองข้าง พ.ศ. 2567"
  },
  {
    id: 6,
    citizenId: "1-1015-0073-XXXX",
    fullCitizenId: "1-1015-0073-6429",
    hn: "1252573-69",
    gender: "female",
    prefix: "นาง",
    name: "นาง พรรณี เด่นดวง",
    registeredDate: "19 ต.ค. 69",
    isToday: false,
    phone: "082-778-9900",
    age: "41 ปี",
    dob: "30 มิ.ย. 2528",
    claim: "สิทธิประกันสังคม",
    allergy: "ไม่มีประวัติแพ้ยา",
    underlying: "ต่อมไขมันเปลือกตาอุดตัน (MGD)",
    bloodGroup: "O Rh+",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=240",
    detPrefixTh: "นาง",
    detFirstNameTh: "พรรณี",
    detLastNameTh: "เด่นดวง",
    detPrefixEn: "Mrs.",
    detFirstNameEn: "Pannee",
    detLastNameEn: "Denduong",
    detNationality: "ไทย",
    detRace: "ไทย",
    detReligion: "พุทธ",
    detCardType: "บัตรประชาชน",
    detPatientType: "สิทธิประกันสังคม",
    detRemark: "ประคบอุ่นเปลือกตาเช้า-เย็นอาการดีขึ้นมาก",
    detAgeYear: "41 ปี",
    detAgeMonth: "3 เดือน",
    detAgeDay: "27 วัน",
    detEducation: "ปริญญาตรี",
    detOccupation: "นักบัญชี",
    detIncome: "30,001 - 50,000 บาท",
    detTel: "02-234-9012",
    detEmail: "pannee.den@email.com",
    detProvince: "กรุงเทพมหานคร",
    detDistrict: "บางรัก",
    detSubdistrict: "สีลม",
    detZipcode: "10500",
    detRoad: "สีลม",
    detIntersection: "นราธิวาส",
    detVillage: "เดอะ แบงค็อก",
    detHouseNo: "14/88",
    detAddrLine: "pannee_acct",
    detFatherFirst: "วิชาญ",
    detFatherLast: "สายทอง",
    detFatherCid: "3-1015-0012-7741",
    detMotherFirst: "รัตนา",
    detMotherLast: "สายทอง",
    detMotherCid: "3-1015-0012-7742",
    detSpouseFirst: "อนุชา",
    detSpouseLast: "เด่นดวง",
    detSpouseCid: "1-1015-0069-1123",
    detContactFirst: "อนุชา",
    detContactLast: "เด่นดวง",
    detContactCid: "1-1015-0069-1123",
    detContactTel: "02-234-9012",
    detContactMobile: "081-909-4455",
    detContactRelation: "คู่สมรส",
    detContactAddress: "14/88 ถ.สีลม แขวงสีลม เขตบางรัก กรุงเทพฯ 10500",
    detContactSameHouse: "ใช่",
    detHasAllergy: "ไม่ใช่",
    detDrugAllergy: "ไม่มีประวัติแพ้ยา",
    detOtherAllergy: "ไม่มี",
    detClinicalNote: "ทำ IPL Dry Eye ครบ 3/4 ครั้งแล้ว",
    detSurgicalNote: "ไม่มี"
  },
  {
    id: 7,
    citizenId: "3-4001-0092-XXXX",
    fullCitizenId: "3-4001-0092-1548",
    hn: "1252574-69",
    gender: "male",
    prefix: "นาย",
    name: "นาย เกรียงไกร มั่นคง",
    registeredDate: "15 ต.ค. 69",
    isToday: false,
    phone: "084-112-2334",
    age: "54 ปี",
    dob: "14 ก.พ. 2515",
    claim: "บัตรทอง 30 บาท (รพ.รามาธิบดี)",
    allergy: "ไม่มีประวัติแพ้ยา",
    underlying: "เบาหวานขึ้นจอประสาทตา (PDR)",
    bloodGroup: "A Rh+",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=240",
    detPrefixTh: "นาย",
    detFirstNameTh: "เกรียงไกร",
    detLastNameTh: "มั่นคง",
    detPrefixEn: "Mr.",
    detFirstNameEn: "Kriangkrai",
    detLastNameEn: "Mankhong",
    detNationality: "ไทย",
    detRace: "ไทย",
    detReligion: "พุทธ",
    detCardType: "บัตรประชาชน",
    detPatientType: "บัตรทอง 30 บาท",
    detRemark: "นัดยิงเลเซอร์จอประสาทตาตาซ้าย (OS) ครั้งถัดไป 2 พ.ย. 69",
    detAgeYear: "54 ปี",
    detAgeMonth: "8 เดือน",
    detAgeDay: "13 วัน",
    detEducation: "มัธยมศึกษา",
    detOccupation: "ธุรกิจส่วนตัว / ค้าขาย",
    detIncome: "15,000 - 30,000 บาท",
    detTel: "043-221-890",
    detEmail: "kriangkrai.mk@email.com",
    detProvince: "ขอนแก่น",
    detDistrict: "เมืองขอนแก่น",
    detSubdistrict: "ในเมือง",
    detZipcode: "40000",
    detRoad: "มิตรภาพ",
    detIntersection: "สามเหลี่ยม",
    detVillage: "พิมานชล",
    detHouseNo: "312/7",
    detAddrLine: "kriangkrai_kk",
    detFatherFirst: "บุญมี",
    detFatherLast: "มั่นคง",
    detFatherCid: "3-4001-0011-2091",
    detMotherFirst: "บัวผัน",
    detMotherLast: "มั่นคง",
    detMotherCid: "3-4001-0011-2092",
    detSpouseFirst: "สมหมาย",
    detSpouseLast: "มั่นคง",
    detSpouseCid: "3-4001-0085-4410",
    detContactFirst: "สมหมาย",
    detContactLast: "มั่นคง",
    detContactCid: "3-4001-0085-4410",
    detContactTel: "043-221-890",
    detContactMobile: "084-112-2335",
    detContactRelation: "คู่สมรส",
    detContactAddress: "312/7 ถ.มิตรภาพ ต.ในเมือง อ.เมือง จ.ขอนแก่น 40000",
    detContactSameHouse: "ใช่",
    detHasAllergy: "ไม่ใช่",
    detDrugAllergy: "ไม่มีประวัติแพ้ยา",
    detOtherAllergy: "ไม่มี",
    detClinicalNote: "HbA1c ล่าสุด 7.1% ควบคุมระดับน้ำตาลได้ดีขึ้น",
    detSurgicalNote: "ยิงเลเซอร์ PRP ตาซ้าย 2 ครั้ง"
  },
  {
    id: 8,
    citizenId: "3-2001-0038-XXXX",
    fullCitizenId: "3-2001-0038-5566",
    hn: "1252575-69",
    gender: "female",
    prefix: "นาง",
    name: "นาง สมพร สิทธิโชค",
    registeredDate: "12 ต.ค. 69",
    isToday: false,
    phone: "085-667-8899",
    age: "67 ปี",
    dob: "21 ธ.ค. 2501",
    claim: "จ่ายตรงกรมบัญชีกลาง",
    allergy: "แพ้ Ibuprofen (เปลือกตาบวม)",
    underlying: "ต้อกระจกตาขวา (Senile Cataract OD) และไขมันในเลือดสูง",
    bloodGroup: "B Rh+",
    avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=240",
    detPrefixTh: "นาง",
    detFirstNameTh: "สมพร",
    detLastNameTh: "สิทธิโชค",
    detPrefixEn: "Mrs.",
    detFirstNameEn: "Somporn",
    detLastNameEn: "Sitthichok",
    detNationality: "ไทย",
    detRace: "ไทย",
    detReligion: "พุทธ",
    detCardType: "บัตรประชาชน",
    detPatientType: "จ่ายตรงกรมบัญชีกลาง",
    detRemark: "วัดเลนส์แก้วตาเทียม (IOL Master) เรียบร้อย เตรียมผ่าตัด Phaco",
    detAgeYear: "67 ปี",
    detAgeMonth: "10 เดือน",
    detAgeDay: "6 วัน",
    detEducation: "ปริญญาตรี",
    detOccupation: "ข้าราชการบำนาญ",
    detIncome: "30,001 - 50,000 บาท",
    detTel: "038-274-512",
    detEmail: "somporn.sit@email.com",
    detProvince: "ชลบุรี",
    detDistrict: "เมืองชลบุรี",
    detSubdistrict: "แสนสุข",
    detZipcode: "20130",
    detRoad: "ลงหาดบางแสน",
    detIntersection: "บางแสนสาย 2",
    detVillage: "มณีรินทร์",
    detHouseNo: "59/18",
    detAddrLine: "somporn_s",
    detFatherFirst: "ช้วน",
    detFatherLast: "สุขสวัสดิ์",
    detFatherCid: "3-2001-0004-1920",
    detMotherFirst: "ละม่อม",
    detMotherLast: "สุขสวัสดิ์",
    detMotherCid: "3-2001-0004-1921",
    detSpouseFirst: "วิชัย",
    detSpouseLast: "สิทธิโชค",
    detSpouseCid: "3-2001-0035-8810",
    detContactFirst: "พัชราภรณ์",
    detContactLast: "สิทธิโชค",
    detContactCid: "1-2001-0098-4412",
    detContactTel: "038-274-512",
    detContactMobile: "089-665-4411",
    detContactRelation: "บุตร",
    detContactAddress: "59/18 ถ.ลงหาดบางแสน ต.แสนสุข อ.เมือง จ.ชลบุรี 20130",
    detContactSameHouse: "ใช่",
    detHasAllergy: "ใช่",
    detDrugAllergy: "แพ้ยากลุ่ม NSAIDs (Ibuprofen)",
    detOtherAllergy: "ไม่มี",
    detClinicalNote: "ไม่ต้องหยุดยาไขมันก่อนผ่าตัดต้อกระจก",
    detSurgicalNote: "เตรียมผ่าตัด Phacoemulsification with IOL (OD)"
  },
  {
    id: 9,
    citizenId: "1-1301-0064-XXXX",
    fullCitizenId: "1-1301-0064-7788",
    hn: "1252576-69",
    gender: "male",
    prefix: "นาย",
    name: "นาย อนันต์ รัตนเมธา",
    registeredDate: "10 ต.ค. 69",
    isToday: false,
    phone: "083-445-5667",
    age: "36 ปี",
    dob: "8 พ.ค. 2533",
    claim: "สิทธิประกันสังคม",
    allergy: "ไม่มีประวัติแพ้ยา",
    underlying: "สายตาเอียงและตาล้าจากคอมพิวเตอร์ (CVS)",
    bloodGroup: "O Rh+",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=240",
    detPrefixTh: "นาย",
    detFirstNameTh: "อนันต์",
    detLastNameTh: "รัตนเมธา",
    detPrefixEn: "Mr.",
    detFirstNameEn: "Anan",
    detLastNameEn: "Rattanametha",
    detNationality: "ไทย",
    detRace: "ไทย",
    detReligion: "พุทธ",
    detCardType: "บัตรประชาชน",
    detPatientType: "สิทธิประกันสังคม",
    detRemark: "ทำงานหน้าจอวันละ 10 ชม. แนะนำน้ำตาเทียมไร้สารกันเสีย",
    detAgeYear: "36 ปี",
    detAgeMonth: "5 เดือน",
    detAgeDay: "19 วัน",
    detEducation: "ปริญญาโท",
    detOccupation: "โปรแกรมเมอร์ / IT",
    detIncome: "มากกว่า 50,000 บาท",
    detTel: "02-901-3345",
    detEmail: "anan.dev@email.com",
    detProvince: "ปทุมธานี",
    detDistrict: "คลองหลวง",
    detSubdistrict: "คลองหนึ่ง",
    detZipcode: "12120",
    detRoad: "พหลโยธิน",
    detIntersection: "รังสิต",
    detVillage: "เพอร์เฟค พาร์ค",
    detHouseNo: "104/52",
    detAddrLine: "anan_rtm",
    detFatherFirst: "สุรชัย",
    detFatherLast: "รัตนเมธา",
    detFatherCid: "3-1301-0018-9901",
    detMotherFirst: "จินตนา",
    detMotherLast: "รัตนเมธา",
    detMotherCid: "3-1301-0018-9902",
    detSpouseFirst: "-",
    detSpouseLast: "-",
    detSpouseCid: "-",
    detContactFirst: "จินตนา",
    detContactLast: "รัตนเมธา",
    detContactCid: "3-1301-0018-9902",
    detContactTel: "02-901-3345",
    detContactMobile: "081-334-5566",
    detContactRelation: "มารดา",
    detContactAddress: "104/52 หมู่บ้านเพอร์เฟคพาร์ค ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี 12120",
    detContactSameHouse: "ใช่",
    detHasAllergy: "ไม่ใช่",
    detDrugAllergy: "ไม่มีประวัติแพ้ยา",
    detOtherAllergy: "ไม่มี",
    detClinicalNote: "ค่าสายตา OD -2.75 -1.00x180, OS -2.50 -0.75x175",
    detSurgicalNote: "ไม่มี"
  },
  {
    id: 10,
    citizenId: "1-1101-0095-XXXX",
    fullCitizenId: "1-1101-0095-9900",
    hn: "1252577-69",
    gender: "male",
    prefix: "นาย",
    name: "นาย ทนง รุ่งอรุณ",
    registeredDate: "9 ต.ค. 69",
    isToday: false,
    phone: "084-332-1100",
    age: "51 ปี",
    dob: "3 ต.ค. 2518",
    claim: "สิทธิประกันสังคม",
    allergy: "ไม่มีประวัติแพ้ยา",
    underlying: "เส้นเลือดดำจอประสาทตาอุดตัน (BRVO)",
    bloodGroup: "A Rh+",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=240",
    detPrefixTh: "นาย",
    detFirstNameTh: "ทนง",
    detLastNameTh: "รุ่งอรุณ",
    detPrefixEn: "Mr.",
    detFirstNameEn: "Thanong",
    detLastNameEn: "Rungarun",
    detNationality: "ไทย",
    detRace: "ไทย",
    detReligion: "พุทธ",
    detCardType: "บัตรประชาชน",
    detPatientType: "สิทธิประกันสังคม",
    detRemark: "ติดตามผล OCT Macula หลังฉีดยาเข้าวุ้นตา",
    detAgeYear: "51 ปี",
    detAgeMonth: "0 เดือน",
    detAgeDay: "24 วัน",
    detEducation: "ปริญญาตรี",
    detOccupation: "ผู้จัดการฝ่ายขาย",
    detIncome: "30,001 - 50,000 บาท",
    detTel: "02-384-7712",
    detEmail: "thanong.r@email.com",
    detProvince: "สมุทรปราการ",
    detDistrict: "เมืองสมุทรปราการ",
    detSubdistrict: "ปากน้ำ",
    detZipcode: "10270",
    detRoad: "สุขุมวิท",
    detIntersection: "ศรีนครินทร์",
    detVillage: "ลัดดารมย์",
    detHouseNo: "77/19",
    detAddrLine: "thanong_sale",
    detFatherFirst: "สำราญ",
    detFatherLast: "รุ่งอรุณ",
    detFatherCid: "3-1101-0022-4100",
    detMotherFirst: "ประทุม",
    detMotherLast: "รุ่งอรุณ",
    detMotherCid: "3-1101-0022-4101",
    detSpouseFirst: "สุนิสา",
    detSpouseLast: "รุ่งอรุณ",
    detSpouseCid: "1-1101-0088-3210",
    detContactFirst: "สุนิสา",
    detContactLast: "รุ่งอรุณ",
    detContactCid: "1-1101-0088-3210",
    detContactTel: "02-384-7712",
    detContactMobile: "089-771-2233",
    detContactRelation: "คู่สมรส",
    detContactAddress: "77/19 ถ.สุขุมวิท ต.ปากน้ำ อ.เมือง จ.สมุทรปราการ 10270",
    detContactSameHouse: "ใช่",
    detHasAllergy: "ไม่ใช่",
    detDrugAllergy: "ไม่มีประวัติแพ้ยา",
    detOtherAllergy: "ไม่มี",
    detClinicalNote: "จอประสาทตาขวาบวมยุบลงจาก 420 เหลือ 265ไมครอน",
    detSurgicalNote: "ฉีดยา Intravitreal Anti-VEGF (OD) 2 ครั้ง"
  },
  {
    id: 11,
    citizenId: "1-5001-0096-XXXX",
    fullCitizenId: "1-5001-0096-1212",
    hn: "1252578-69",
    gender: "female",
    prefix: "น.ส.",
    name: "น.ส. นภา อมรวิเชียร",
    registeredDate: "8 ต.ค. 69",
    isToday: false,
    phone: "088-776-5544",
    age: "31 ปี",
    dob: "19 ก.ย. 2538",
    claim: "ประกันกลุ่มบริษัท Bupa",
    allergy: "ไม่มีประวัติแพ้ยา",
    underlying: "ต้อลมและตาแห้งจากการใส่คอนแทคเลนส์",
    bloodGroup: "O Rh+",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=240",
    detPrefixTh: "นางสาว",
    detFirstNameTh: "นภา",
    detLastNameTh: "อมรวิเชียร",
    detPrefixEn: "Miss",
    detFirstNameEn: "Napha",
    detLastNameEn: "Amornwichian",
    detNationality: "ไทย",
    detRace: "ไทย",
    detReligion: "พุทธ",
    detCardType: "บัตรประชาชน",
    detPatientType: "ผู้ป่วยทั่วไป",
    detRemark: "สนใจทำ ReLEx SMILE นัดตรวจความหนากระจกตาเดือนหน้า",
    detAgeYear: "31 ปี",
    detAgeMonth: "1 เดือน",
    detAgeDay: "8 วัน",
    detEducation: "ปริญญาโท",
    detOccupation: "สถาปนิก",
    detIncome: "มากกว่า 50,000 บาท",
    detTel: "053-214-889",
    detEmail: "napha.arch@email.com",
    detProvince: "เชียงใหม่",
    detDistrict: "เมืองเชียงใหม่",
    detSubdistrict: "สุเทพ",
    detZipcode: "50200",
    detRoad: "นิมมานเหมินท์",
    detIntersection: "รินคำ",
    detVillage: "กุลพันธ์วิลล์",
    detHouseNo: "165/24",
    detAddrLine: "napha_arch",
    detFatherFirst: "อดิศักดิ์",
    detFatherLast: "อมรวิเชียร",
    detFatherCid: "3-5001-0032-8810",
    detMotherFirst: "ดารณี",
    detMotherLast: "อมรวิเชียร",
    detMotherCid: "3-5001-0032-8811",
    detSpouseFirst: "-",
    detSpouseLast: "-",
    detSpouseCid: "-",
    detContactFirst: "ดารณี",
    detContactLast: "อมรวิเชียร",
    detContactCid: "3-5001-0032-8811",
    detContactTel: "053-214-889",
    detContactMobile: "081-992-4411",
    detContactRelation: "มารดา",
    detContactAddress: "165/24 ถ.นิมมานเหมินท์ ต.สุเทพ อ.เมือง จ.เชียงใหม่ 50200",
    detContactSameHouse: "ใช่",
    detHasAllergy: "ไม่ใช่",
    detDrugAllergy: "ไม่มีประวัติแพ้ยา",
    detOtherAllergy: "ไรฝุ่น",
    detClinicalNote: "Pachymetry OD 545 um, OS 548 um",
    detSurgicalNote: "ไม่เคยผ่าตัด"
  },
  {
    id: 12,
    citizenId: "1-1024-0097-XXXX",
    fullCitizenId: "1-1024-0097-3434",
    hn: "1252579-69",
    gender: "female",
    prefix: "ด.ญ.",
    name: "ด.ญ. กวิตา แสนสุข",
    registeredDate: "7 ต.ค. 69",
    isToday: false,
    phone: "082-114-5599",
    age: "11 ปี",
    dob: "27 ก.ค. 2558",
    claim: "ชำระเงินสด",
    allergy: "ไม่มีประวัติแพ้ยา",
    underlying: "ภาวะเพ่งสายตาผิดปกติในเด็ก (Accommodation Spasm)",
    bloodGroup: "B Rh+",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=240",
    detPrefixTh: "ด.ญ.",
    detFirstNameTh: "กวิตา",
    detLastNameTh: "แสนสุข",
    detPrefixEn: "Miss",
    detFirstNameEn: "Kawita",
    detLastNameEn: "Saensuk",
    detNationality: "ไทย",
    detRace: "ไทย",
    detReligion: "พุทธ",
    detCardType: "บัตรประชาชน",
    detPatientType: "ผู้ป่วยทั่วไป",
    detRemark: "หยอดยา Atropine 0.01% ชะลอสายตาสั้นก่อนนอน",
    detAgeYear: "11 ปี",
    detAgeMonth: "3 เดือน",
    detAgeDay: "0 วัน",
    detEducation: "ประถมศึกษา",
    detOccupation: "นักเรียน",
    detIncome: "ต่ำกว่า 15,000 บาท",
    detTel: "02-712-9080",
    detEmail: "saensuk.family@email.com",
    detProvince: "กรุงเทพมหานคร",
    detDistrict: "วัฒนา",
    detSubdistrict: "คลองเตยเหนือ",
    detZipcode: "10110",
    detRoad: "อโศกมนตรี",
    detIntersection: "อโศก-เพชรบุรี",
    detVillage: "ศุภาลัย พรีเมียร์",
    detHouseNo: "299/112",
    detAddrLine: "mom_kawita",
    detFatherFirst: "วรพจน์",
    detFatherLast: "แสนสุข",
    detFatherCid: "1-1024-0041-2290",
    detMotherFirst: "นันทิดา",
    detMotherLast: "แสนสุข",
    detMotherCid: "1-1024-0045-6612",
    detSpouseFirst: "-",
    detSpouseLast: "-",
    detSpouseCid: "-",
    detContactFirst: "นันทิดา",
    detContactLast: "แสนสุข",
    detContactCid: "1-1024-0045-6612",
    detContactTel: "02-712-9080",
    detContactMobile: "082-114-5599",
    detContactRelation: "มารดา",
    detContactAddress: "299/112 ถ.อโศกมนตรี แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพฯ 10110",
    detContactSameHouse: "ใช่",
    detHasAllergy: "ไม่ใช่",
    detDrugAllergy: "ไม่มีประวัติแพ้ยา",
    detOtherAllergy: "ไม่มี",
    detClinicalNote: "ฝึก Binocular Fusion ครั้งที่ 4/8 ผู้ป่วยให้ความร่วมมือดีมาก",
    detSurgicalNote: "ไม่เคยผ่าตัด"
  }
];

let recordsFilterState = 'all'; // 'all' | 'today' | 'existing'
let recordsSearchQuery = '';
let activeRecordPatient = null;
let pendingDeleteRecordId = null;
let editingRecordId = null;

function initRecords() {
  setupRecordsEventListeners();
  setupExamRoomEventListeners();
  switchView('home'); // Default view to หน้าหลัก (First Menu)
}

function setupRecordsEventListeners() {
  const searchInput = document.getElementById('recordsSearchInput');
  const clearBtn = document.getElementById('clearRecordsSearchBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      recordsSearchQuery = e.target.value.trim().toLowerCase();
      if (clearBtn) clearBtn.style.display = recordsSearchQuery ? 'flex' : 'none';
      renderRecordsTable();
    });
  }
}

function clearRecordsSearch() {
  const searchInput = document.getElementById('recordsSearchInput');
  const clearBtn = document.getElementById('clearRecordsSearchBtn');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  recordsSearchQuery = '';
  renderRecordsTable();
}

function filterRecordsByStatus(filterType) {
  recordsFilterState = filterType;
  const cardAll = document.getElementById('recordsKpiAll');
  const cardNew = document.getElementById('recordsKpiNewToday');
  const cardExist = document.getElementById('recordsKpiExisting');

  if (cardAll) cardAll.classList.toggle('active-navy', filterType === 'all');
  if (cardNew) cardNew.classList.toggle('active-navy', filterType === 'today');
  if (cardExist) cardExist.classList.toggle('active-navy', filterType === 'existing');

  renderRecordsTable();
}

function renderRecordsTable() {
  const tbody = document.getElementById('recordsTableBody');
  if (!tbody) return;

  const totalCountEl = document.getElementById('kpiRecordsTotal');
  const newTodayEl = document.getElementById('kpiRecordsNewToday');
  const existingEl = document.getElementById('kpiRecordsExisting');

  const todayCount = recordsData.filter(r => r.isToday).length;
  const existingCount = recordsData.filter(r => !r.isToday).length;
  if (totalCountEl) totalCountEl.textContent = recordsData.length;
  if (newTodayEl) newTodayEl.textContent = todayCount;
  if (existingEl) existingEl.textContent = existingCount;

  let filtered = recordsData.filter(item => {
    if (recordsFilterState === 'today' && !item.isToday) return false;
    if (recordsFilterState === 'existing' && item.isToday) return false;

    if (recordsSearchQuery) {
      const q = recordsSearchQuery;
      const match = item.citizenId.toLowerCase().includes(q) ||
                    item.fullCitizenId.toLowerCase().includes(q) ||
                    item.hn.toLowerCase().includes(q) ||
                    item.name.toLowerCase().includes(q) ||
                    item.phone.toLowerCase().includes(q) ||
                    item.claim.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 48px; color: #94A3B8;">
          <i data-lucide="file-question" style="width: 32px; height: 32px; margin-bottom: 8px;"></i>
          <div>ไม่พบข้อมูลผู้ป่วยเวชระเบียนตามคำค้นหา</div>
        </td>
      </tr>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  let html = '';
  filtered.forEach(item => {
    const isFemale = item.gender === 'female';
    const genderSymbol = isFemale ? '♀' : '♂';

    html += `
      <tr>
        <td style="padding-left: 24px; font-weight: 500; letter-spacing: 0.5px; color: #1E293B;">
          ${item.citizenId}
        </td>
        <td style="font-weight: 500; color: #334155;">
          ${item.hn}
        </td>
        <td style="text-align: center;">
          <span class="records-gender-sym" title="${isFemale ? 'เพศหญิง' : 'เพศชาย'}">
            ${genderSymbol}
          </span>
        </td>
        <td>
          <div style="display: flex; align-items: center; gap: 10px;">
            <img src="${item.avatar}" alt="${item.name}" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover; border: 1.5px solid #E2E8F0; flex-shrink: 0;">
            <span style="font-weight: 500; color: #0F172A;">${item.name}</span>
          </div>
        </td>
        <td style="color: #475569;">
          ${item.registeredDate}
        </td>
        <td style="text-align: center;">
          <div class="records-action-group">
            <button type="button" class="btn-records-view" onclick="viewPatientRecord(${item.id})" title="ดูรายละเอียดเวชระเบียน">
              <i data-lucide="eye"></i>
              <span>ดูเพิ่ม</span>
            </button>
            <button type="button" class="btn-records-delete" onclick="deletePatientRecord(${item.id})" title="ลบรายการเวชระเบียน">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}


function deletePatientRecord(patientId) {
  const target = recordsData.find(p => p.id === patientId);
  if (!target) return;

  pendingDeleteRecordId = patientId;

  const avatarEl = document.getElementById('delRecordAvatar');
  const nameEl = document.getElementById('delRecordName');
  const nameInlineEl = document.getElementById('delRecordNameInline');
  const hnEl = document.getElementById('delRecordHn');
  const cidEl = document.getElementById('delRecordCid');
  const modal = document.getElementById('deleteRecordModal');

  if (avatarEl) avatarEl.src = target.avatar;
  if (nameEl) nameEl.textContent = target.name;
  if (nameInlineEl) nameInlineEl.textContent = `${target.name} (HN: ${target.hn})`;
  if (hnEl) hnEl.textContent = `HN: ${target.hn}`;
  if (cidEl) cidEl.textContent = `เลขบัตร: ${target.fullCitizenId || target.citizenId}`;

  if (modal) modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}


function closeDeleteRecordModal() {
  const modal = document.getElementById('deleteRecordModal');
  if (modal) modal.style.display = 'none';
  pendingDeleteRecordId = null;
}

function confirmDeletePatientRecord() {
  if (pendingDeleteRecordId === null) return;
  const target = recordsData.find(p => p.id === pendingDeleteRecordId);
  if (!target) {
    closeDeleteRecordModal();
    return;
  }

  recordsData = recordsData.filter(p => p.id !== pendingDeleteRecordId);
  closeDeleteRecordModal();
  renderRecordsTable();
  playHospitalChime();
  showToast('ลบข้อมูลสำเร็จ', `ลบรายชื่อผู้ป่วย ${target.name} (HN: ${target.hn}) ออกจากระบบเวชระเบียนเรียบร้อยแล้ว`, 'info');
}

function viewPatientRecord(patientId) {
  const patient = recordsData.find(p => p.id === patientId) || recordsData[0];
  activeRecordPatient = patient;

  const setDetText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  const avatarImg = document.getElementById('detAvatarImg');
  if (avatarImg) {
    avatarImg.src = patient.customAvatar || patient.avatar || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=240";
  }

  // 1. ข้อมูลพื้นฐาน
  setDetText('detPrefixTh', patient.detPrefixTh || patient.prefix || 'นาง');
  setDetText('detFirstNameTh', patient.detFirstNameTh || 'สมเจต');
  setDetText('detLastNameTh', patient.detLastNameTh || 'ส้มแดง');
  setDetText('detPrefixEn', patient.detPrefixEn || 'ระบุรายละเอียด');
  setDetText('detFirstNameEn', patient.detFirstNameEn || 'รายละเอียด');
  setDetText('detLastNameEn', patient.detLastNameEn || 'รายละเอียด');

  setDetText('detNationality', patient.detNationality || 'ไทย');
  setDetText('detRace', patient.detRace || 'ไทย');
  setDetText('detReligion', patient.detReligion || 'พุทธ');
  setDetText('detCitizenId', patient.fullCitizenId || patient.citizenId || 'ระบุรายละเอียด');
  setDetText('detCardType', patient.detCardType || 'บัตรประชาชน');
  setDetText('detBloodGroup', patient.bloodGroup || 'O Rh+');
  setDetText('detPatientType', patient.detPatientType || patient.claim || 'ระบุรายละเอียด');
  setDetText('detRemark', patient.detRemark || 'รายละเอียด');

  setDetText('detAlertUnderlying', patient.underlying || '');
  setDetText('detAlertAllergy', patient.allergy || '');

  // 2. ข้อมูลทั่วไป
  setDetText('detBirthDate', patient.dob || 'ระบุรายละเอียด');
  setDetText('detAgeYear', patient.detAgeYear || patient.age || '20 ปี');
  setDetText('detAgeMonth', patient.detAgeMonth || '3 เดือน');
  setDetText('detAgeDay', patient.detAgeDay || '20 วัน');
  setDetText('detEducation', patient.detEducation || 'ปริญญาตรี');
  setDetText('detOccupation', patient.detOccupation || 'พนักงานบริษัท');
  setDetText('detIncome', patient.detIncome || '30,001 - 50,000 บาท');
  setDetText('detTel', patient.detTel || '-');
  setDetText('detMobile', patient.phone || 'ระบุรายละเอียด');
  setDetText('detEmail', patient.detEmail || 'ระบุรายละเอียด');

  // 3. ที่อยู่ และการติดต่อ
  setDetText('detProvince', patient.detProvince || 'กรุงเทพมหานคร');
  setDetText('detDistrict', patient.detDistrict || 'ปทุมวัน');
  setDetText('detSubdistrict', patient.detSubdistrict || 'ลุมพินี');
  setDetText('detZipcode', patient.detZipcode || '10330');
  setDetText('detRoad', patient.detRoad || 'พระราม 4');
  setDetText('detIntersection', patient.detIntersection || '-');
  setDetText('detVillage', patient.detVillage || '-');
  setDetText('detHouseNo', patient.detHouseNo || '98/12');
  setDetText('detAddrMobile', patient.phone || 'ระบุรายละเอียด');
  setDetText('detAddrEmail', patient.detEmail || 'ระบุรายละเอียด');
  setDetText('detAddrLine', patient.detAddrLine || 'ระบุรายละเอียด');

  // 4. ญาติผู้ป่วย
  setDetText('detFatherFirst', patient.detFatherFirst || 'ระบุรายละเอียด');
  setDetText('detFatherLast', patient.detFatherLast || 'ระบุรายละเอียด');
  setDetText('detFatherCid', patient.detFatherCid || 'ระบุรายละเอียด');
  setDetText('detFatherAlien', patient.detFatherAlien || 'ไม่ใช่');

  setDetText('detMotherFirst', patient.detMotherFirst || 'ระบุรายละเอียด');
  setDetText('detMotherLast', patient.detMotherLast || 'ระบุรายละเอียด');
  setDetText('detMotherCid', patient.detMotherCid || 'ระบุรายละเอียด');
  setDetText('detMotherAlien', patient.detMotherAlien || 'ไม่ใช่');

  setDetText('detSpouseFirst', patient.detSpouseFirst || '-');
  setDetText('detSpouseLast', patient.detSpouseLast || '-');
  setDetText('detSpouseCid', patient.detSpouseCid || '-');
  setDetText('detSpouseAlien', patient.detSpouseAlien || 'ไม่ใช่');

  setDetText('detContactFirst', patient.detContactFirst || 'ระบุรายละเอียด');
  setDetText('detContactLast', patient.detContactLast || 'ระบุรายละเอียด');
  setDetText('detContactCid', patient.detContactCid || 'ระบุรายละเอียด');
  setDetText('detContactAlien', patient.detContactAlien || 'ไม่ใช่');
  setDetText('detContactTel', patient.detContactTel || '-');
  setDetText('detContactMobile', patient.detContactMobile || patient.phone || 'ระบุรายละเอียด');
  setDetText('detContactRelation', patient.detContactRelation || 'มารดา');
  setDetText('detContactAddress', patient.detContactAddress || 'ระบุรายละเอียด');
  setDetText('detContactSameHouse', patient.detContactSameHouse || 'ใช่');

  // 5. โรคประจำตัว
  setDetText('detHasAllergy', patient.detHasAllergy || (patient.allergy && patient.allergy.includes('แพ้') && !patient.allergy.includes('ไม่มี') ? 'ใช่' : 'ไม่ใช่'));
  setDetText('detDrugAllergy', patient.detDrugAllergy || patient.allergy || 'ไม่มีประวัติแพ้ยา');
  setDetText('detOtherAllergy', patient.detOtherAllergy || 'ไม่มี');
  setDetText('detUnderlying', patient.underlying || 'ไม่มีโรคประจำตัว');
  setDetText('detClinicalNote', patient.detClinicalNote || 'ระบุรายละเอียด');
  setDetText('detSurgicalNote', patient.detSurgicalNote || 'ระบุรายละเอียด');

  switchView('records-detail');
}

function scrollToDetailMedicalSection() {
  const section = document.getElementById('detMedicalSection');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// ==========================================================
// PATIENT TREATMENT & INSURANCE RIGHTS (สิทธิการรักษาของผู้ป่วย)
// ==========================================================

let activePatientRightsFilter = 'treatment'; // 'treatment' | 'insurance'

// Mock Patient Rights data store (keyed by patient id)
let patientRightsData = {
  1: [
    {
      id: 101,
      type: 'treatment',
      rightName: 'สิทธิประกันสังคม (ม.33)',
      isPrimary: true,
      lastVerifiedDate: '27 ต.ค. 2569',
      cardNo: '1-1037-0045-8912',
      mainHospital: 'รพ.จุฬาลงกรณ์',
      subHospital: 'รพ.ตำรวจ',
      regularHospital: 'รพ.จุฬาลงกรณ์',
      affiliationOrg: 'สนง.ประกันสังคม กทม.พื้นที่ 1',
      ownerCitizenId: '1-1037-0045-8912',
      startDate: '01 ม.ค. 2569',
      endDate: '31 ธ.ค. 2569',
      createdAt: '02 ม.ค. 2569',
      editor: 'สมศรี ส้มแดง',
      editedAt: '27 ต.ค. 2569'
    }
  ]
};

function openPatientRightsView() {
  const patient = activeRecordPatient || (typeof recordsData !== 'undefined' && recordsData[0]);
  if (!patient) return;
  activeRecordPatient = patient;

  renderPatientRightsInfo(patient);
  filterPatientRights('treatment');
  switchView('patient-rights');
}

function renderPatientRightsInfo(patient) {
  if (!patient) return;

  const setRightsText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  const avatarImg = document.getElementById('rightsAvatarImg');
  if (avatarImg) {
    avatarImg.src = patient.customAvatar || patient.avatar || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=240";
  }

  // Row 1
  setRightsText('rightsPrefixTh', patient.detPrefixTh || patient.prefix || 'นาง');
  setRightsText('rightsFirstNameTh', patient.detFirstNameTh || (patient.name ? patient.name.replace(/^.*\s/, '') : 'สมเจต'));
  setRightsText('rightsLastNameTh', patient.detLastNameTh || 'ส้มแดง');
  setRightsText('rightsPrefixEn', patient.detPrefixEn || 'ระบุรายละเอียด');
  setRightsText('rightsFirstNameEn', patient.detFirstNameEn || 'รายละเอียด');
  setRightsText('rightsLastNameEn', patient.detLastNameEn || 'รายละเอียด');

  // Row 2
  setRightsText('rightsNationality', patient.detNationality || 'ไทย');
  setRightsText('rightsRace', patient.detRace || 'ไทย');
  setRightsText('rightsReligion', patient.detReligion || 'พุทธ');
  setRightsText('rightsCitizenId', patient.fullCitizenId || patient.citizenId || 'ระบุรายละเอียด');
  setRightsText('rightsCardType', patient.detCardType || 'บัตรประชาชน');
  setRightsText('rightsBloodGroup', patient.bloodGroup || 'O Rh+');
  setRightsText('rightsPatientType', patient.detPatientType || patient.claim || 'ระบุรายละเอียด');

  // Row 3
  setRightsText('rightsRemark', patient.detRemark || 'รายละเอียด');

  // Red alert boxes
  setRightsText('rightsAlertUnderlying', patient.underlying || 'ไม่มีโรคประจำตัว');
  setRightsText('rightsAlertAllergy', patient.allergy || 'ไม่มีประวัติแพ้ยา');
}

function filterPatientRights(filterType) {
  activePatientRightsFilter = filterType;

  const tabTreatment = document.getElementById('tabRightsTreatment');
  const tabInsurance = document.getElementById('tabRightsInsurance');

  if (tabTreatment) tabTreatment.classList.toggle('active', filterType === 'treatment');
  if (tabInsurance) tabInsurance.classList.toggle('active', filterType === 'insurance');

  renderPatientRightsTable();
}

function renderPatientRightsTable() {
  const tbody = document.getElementById('patientRightsTableBody');
  if (!tbody) return;

  const patientId = activeRecordPatient ? activeRecordPatient.id : 1;
  const patientRightsList = (patientRightsData[patientId] || []).filter(r => r.type === activePatientRightsFilter);

  if (patientRightsList.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="15" style="text-align: center; padding: 70px 20px; color: #94A3B8; font-size: 14px; font-weight: 500;">
          ไม่มีข้อมูล
        </td>
      </tr>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  tbody.innerHTML = patientRightsList.map(item => {
    const primaryBadge = item.isPrimary
      ? `<span class="rights-primary-badge"><i data-lucide="check" style="width: 12px; height: 12px;"></i> ใช่</span>`
      : `<span class="rights-secondary-badge" onclick="setPrimaryPatientRight(${item.id})" style="cursor: pointer;" title="คลิกเพื่อตั้งเป็นสิทธิหลัก">ไม่ใช่</span>`;

    return `
      <tr>
        <td style="font-weight: 600; color: #0D3B5E;">${item.rightName || '-'}</td>
        <td style="text-align: center;">${primaryBadge}</td>
        <td style="text-align: center; color: #475569;">${item.lastVerifiedDate || '-'}</td>
        <td style="font-family: monospace; font-size: 12px; color: #1E293B;">${item.cardNo || '-'}</td>
        <td style="color: #334155;">${item.mainHospital || '-'}</td>
        <td style="color: #64748B;">${item.subHospital || '-'}</td>
        <td style="color: #334155;">${item.regularHospital || '-'}</td>
        <td style="color: #475569;">${item.affiliationOrg || '-'}</td>
        <td style="font-family: monospace; font-size: 12px; color: #64748B;">${item.ownerCitizenId || '-'}</td>
        <td style="text-align: center; color: #475569;">${item.startDate || '-'}</td>
        <td style="text-align: center; color: #475569;">${item.endDate || '-'}</td>
        <td style="text-align: center; color: #64748B; font-size: 11.5px;">${item.createdAt || '-'}</td>
        <td style="color: #334155;">${item.editor || '-'}</td>
        <td style="text-align: center; color: #64748B; font-size: 11.5px;">${item.editedAt || '-'}</td>
        <td style="text-align: center;">
          <button type="button" class="btn-rights-row-action delete" title="ลบสิทธินี้" onclick="deletePatientRight(${item.id})">
            <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function openAddPatientRightModal() {
  const modal = document.getElementById('modalAddPatientRight');
  const typeSelect = document.getElementById('rightFormType');
  const nameInput = document.getElementById('rightFormName');
  const cardNoInput = document.getElementById('rightFormCardNo');
  const ownerCidInput = document.getElementById('rightFormOwnerCitizenId');
  const mainHospInput = document.getElementById('rightFormMainHosp');
  const subHospInput = document.getElementById('rightFormSubHosp');
  const regHospInput = document.getElementById('rightFormRegHosp');
  const affilInput = document.getElementById('rightFormAffiliation');
  const startInput = document.getElementById('rightFormStartDate');
  const endInput = document.getElementById('rightFormEndDate');

  if (typeSelect) typeSelect.value = activePatientRightsFilter;
  if (nameInput) nameInput.value = '';
  if (cardNoInput) cardNoInput.value = activeRecordPatient ? (activeRecordPatient.fullCitizenId || activeRecordPatient.citizenId || '') : '';
  if (ownerCidInput) ownerCidInput.value = activeRecordPatient ? (activeRecordPatient.fullCitizenId || activeRecordPatient.citizenId || '') : '';
  if (mainHospInput) mainHospInput.value = 'รพ.จุฬาลงกรณ์';
  if (subHospInput) subHospInput.value = 'รพ.ตำรวจ';
  if (regHospInput) regHospInput.value = 'รพ.จุฬาลงกรณ์';
  if (affilInput) affilInput.value = activePatientRightsFilter === 'treatment' ? 'สำนักงานประกันสังคม กทม.พื้นที่ 1' : 'บมจ.กรุงเทพประกันภัย (AIA)';
  if (startInput) startInput.value = '01 ม.ค. 2569';
  if (endInput) endInput.value = '31 ธ.ค. 2569';

  if (modal) modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

function closeAddPatientRightModal() {
  const modal = document.getElementById('modalAddPatientRight');
  if (modal) modal.style.display = 'none';
}

function savePatientRight() {
  const patientId = activeRecordPatient ? activeRecordPatient.id : 1;
  const type = document.getElementById('rightFormType') ? document.getElementById('rightFormType').value : 'treatment';
  const name = document.getElementById('rightFormName') ? document.getElementById('rightFormName').value.trim() : '';
  const isPrimaryVal = document.getElementById('rightFormIsPrimary') ? document.getElementById('rightFormIsPrimary').value : 'yes';
  const cardNo = document.getElementById('rightFormCardNo') ? document.getElementById('rightFormCardNo').value.trim() : '-';
  const ownerCid = document.getElementById('rightFormOwnerCitizenId') ? document.getElementById('rightFormOwnerCitizenId').value.trim() : '-';
  const mainHosp = document.getElementById('rightFormMainHosp') ? document.getElementById('rightFormMainHosp').value.trim() : '-';
  const subHosp = document.getElementById('rightFormSubHosp') ? document.getElementById('rightFormSubHosp').value.trim() : '-';
  const regHosp = document.getElementById('rightFormRegHosp') ? document.getElementById('rightFormRegHosp').value.trim() : '-';
  const affiliation = document.getElementById('rightFormAffiliation') ? document.getElementById('rightFormAffiliation').value.trim() : '-';
  const startDate = document.getElementById('rightFormStartDate') ? document.getElementById('rightFormStartDate').value.trim() : '-';
  const endDate = document.getElementById('rightFormEndDate') ? document.getElementById('rightFormEndDate').value.trim() : '-';

  if (!name) {
    alert('กรุณาระบุชื่อสิทธิการรักษา');
    return;
  }

  if (!patientRightsData[patientId]) {
    patientRightsData[patientId] = [];
  }

  const isPrimary = isPrimaryVal === 'yes';

  // If set to primary, toggle off other primary rights of same type
  if (isPrimary) {
    patientRightsData[patientId].forEach(r => {
      if (r.type === type) r.isPrimary = false;
    });
  }

  const newRight = {
    id: Date.now(),
    type: type,
    rightName: name,
    isPrimary: isPrimary,
    lastVerifiedDate: '28 ต.ค. 2569',
    cardNo: cardNo,
    mainHospital: mainHosp,
    subHospital: subHosp,
    regularHospital: regHosp,
    affiliationOrg: affiliation,
    ownerCitizenId: ownerCid,
    startDate: startDate,
    endDate: endDate,
    createdAt: '28 ต.ค. 2569',
    editor: 'สมศรี ส้มแดง',
    editedAt: '28 ต.ค. 2569'
  };

  patientRightsData[patientId].push(newRight);

  closeAddPatientRightModal();
  filterPatientRights(type);
  if (typeof playHospitalChime === 'function') playHospitalChime();
  if (typeof showToast === 'function') {
    showToast('เพิ่มสิทธิสำเร็จ', `บันทึก "${name}" ให้กับผู้ป่วยเรียบร้อยแล้ว`, 'success');
  }
}

function deletePatientRight(rightId) {
  const patientId = activeRecordPatient ? activeRecordPatient.id : 1;
  if (!patientRightsData[patientId]) return;

  if (confirm('คุณต้องการลบข้อมูลสิทธินี้หรือไม่?')) {
    patientRightsData[patientId] = patientRightsData[patientId].filter(r => r.id !== rightId);
    renderPatientRightsTable();
    if (typeof showToast === 'function') {
      showToast('ลบสิทธิแล้ว', 'นำข้อมูลสิทธิออกจากระบบเรียบร้อย', 'info');
    }
  }
}

function setPrimaryPatientRight(rightId) {
  const patientId = activeRecordPatient ? activeRecordPatient.id : 1;
  if (!patientRightsData[patientId]) return;

  const targetRight = patientRightsData[patientId].find(r => r.id === rightId);
  if (!targetRight) return;

  patientRightsData[patientId].forEach(r => {
    if (r.type === targetRight.type) {
      r.isPrimary = (r.id === rightId);
    }
  });

  renderPatientRightsTable();
  if (typeof showToast === 'function') {
    showToast('ตั้งค่าสิทธิหลัก', `ตั้ง "${targetRight.rightName}" เป็นสิทธิหลักเรียบร้อย`, 'success');
  }
}

function closePatientRecordModal() {
  const modalBackdrop = document.getElementById('patientRecordModalBackdrop');
  const modalDialog = document.getElementById('patientRecordModal');
  if (modalBackdrop) modalBackdrop.style.display = 'none';
  if (modalDialog) modalDialog.style.display = 'none';
}

function printPatientRecordModal() {
  if (activeRecordPatient) {
    showToast('พิมพ์เวชระเบียน', `กำลังสั่งพิมพ์ประวัติเวชระเบียน ${activeRecordPatient.name} (HN: ${activeRecordPatient.hn})`, 'info');
    window.print();
  }
}

function sendRecordToQueue() {
  if (activeRecordPatient) {
    const p = activeRecordPatient;
    const qNo = `W-${String((typeof waitingQueueData !== 'undefined' ? waitingQueueData.length : 10) + 15).padStart(3, '0')}`;
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} น.`;

    if (typeof waitingQueueData !== 'undefined') {
      const existsInWait = waitingQueueData.some(q => q.patientName === p.name || q.hn === p.hn);
      if (!existsInWait) {
        waitingQueueData.unshift({
          id: Date.now(),
          queueNo: qNo,
          patientName: p.name,
          hn: p.hn,
          type: "Walk-in",
          apptTime: `รับคิว ${timeStr}`,
          waitMinutes: 0,
          waitSeconds: 0,
          isUrgent: false,
          doctor: "นพ. วินัย เลิศเวชกุล",
          dept: "จักษุวิทยา",
          detail: p.underlying || "ส่งตรวจจากห้องเวชระเบียน"
        });
      }
      if (typeof renderQueueBoard === 'function') renderQueueBoard();
    }

    if (typeof examRoomQueueData !== 'undefined') {
      const existsInExam = examRoomQueueData.some(q => q.patientName === p.name || q.hn.replace('/', '-') === p.hn);
      if (!existsInExam) {
        examRoomQueueData.unshift({
          id: Date.now() + 1,
          queueNo: qNo,
          patientName: p.name,
          hn: p.hn.replace('-', '/'),
          apptTime: timeStr,
          overdueTime: "00:00 น.",
          detail: p.underlying || "ส่งตรวจจากห้องเวชระเบียน",
          roomName: "รอเรียกเข้าห้องตรวจ",
          doctor: "นพ. วินัย เลิศเวชกุล",
          status: "ready"
        });
      }
      if (typeof renderExamRoomQueue === 'function') renderExamRoomQueue();
    }

    if (typeof renderHomeDashboard === 'function') renderHomeDashboard();
    playHospitalChime();
    showToast('ส่งเข้าคิวและห้องตรวจสำเร็จ', `ออกคิว ${qNo} ส่งคุณ ${p.name} (HN: ${p.hn}) ไปยังระบบคิวและห้องตรวจแพทย์เรียบร้อยแล้ว`, 'success');
    closePatientRecordModal();
  }
}

// ==========================================================
// REGISTER / EDIT PATIENT (เพิ่ม / แก้ไขรายชื่อผู้ป่วย - Full Page View)
// ==========================================================

function openNewPatientModal() {
  editingRecordId = null;

  const form = document.getElementById('patientRegForm');
  if (form) form.reset();

  // Remove any extra address blocks added previously, keeping only the first block
  const container = document.getElementById('regAddressesContainer');
  if (container) {
    const blocks = container.querySelectorAll('.reg-address-block');
    blocks.forEach((blk, idx) => {
      if (idx > 0) blk.remove();
    });
  }

  const birthInput = document.getElementById('regBirthDate');
  if (birthInput) birthInput.type = 'text';

  const avatarPreview = document.getElementById('regAvatarPreview');
  if (avatarPreview) {
    avatarPreview.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=240";
  }

  const saveBtnText = document.getElementById('regSaveBtnText');
  if (saveBtnText) saveBtnText.textContent = 'บันทึกข้อมูล';

  switchView('records-create');
}

function editActivePatientRecord() {
  if (!activeRecordPatient) return;
  const p = activeRecordPatient;
  editingRecordId = p.id;

  const form = document.getElementById('patientRegForm');
  if (form) form.reset();

  // Keep only the first address block
  const container = document.getElementById('regAddressesContainer');
  if (container) {
    const blocks = container.querySelectorAll('.reg-address-block');
    blocks.forEach((blk, idx) => {
      if (idx > 0) blk.remove();
    });
  }

  const setInputVal = (id, val) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.value = (val && val !== 'ระบุรายละเอียด' && val !== 'รายละเอียด') ? val : '';
  };

  const setSelectVal = (id, val) => {
    const sel = document.getElementById(id);
    if (!sel) return;
    if (!val || val === 'ระบุรายละเอียด' || val === 'รายละเอียด' || val === '-') {
      sel.value = '';
      return;
    }
    const matched = Array.from(sel.options).find(opt => opt.value === val || opt.textContent.trim() === val);
    if (!matched) {
      const newOpt = document.createElement('option');
      newOpt.value = val;
      newOpt.textContent = val;
      sel.appendChild(newOpt);
      sel.value = val;
    } else {
      sel.value = matched.value;
    }
  };

  const setRadioVal = (name, val) => {
    const radios = document.querySelectorAll(`input[name="${name}"]`);
    radios.forEach(r => {
      r.checked = (r.value === val);
    });
  };

  // Avatar
  const avatarPreview = document.getElementById('regAvatarPreview');
  if (avatarPreview) {
    avatarPreview.src = p.customAvatar || p.avatar || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=240";
  }

  // 1. ข้อมูลพื้นฐาน
  const prefixTh = p.detPrefixTh || (p.prefix === 'น.ส.' ? 'นางสาว' : p.prefix) || 'นางสาว';
  setSelectVal('regPrefixTh', prefixTh);
  setInputVal('regFirstNameTh', p.detFirstNameTh || '');
  setInputVal('regLastNameTh', p.detLastNameTh || '');
  setSelectVal('regPrefixEn', p.detPrefixEn || '');
  setInputVal('regFirstNameEn', p.detFirstNameEn || '');
  setInputVal('regLastNameEn', p.detLastNameEn || '');

  setSelectVal('regNationality', p.detNationality || 'ไทย');
  setSelectVal('regRace', p.detRace || 'ไทย');
  setSelectVal('regReligion', p.detReligion || 'พุทธ');
  setInputVal('regCitizenId', p.fullCitizenId || p.citizenId || '');
  setSelectVal('regCardType', p.detCardType || 'บัตรประชาชน');

  const bloodClean = (p.bloodGroup || 'O').replace(/\s*Rh[+-]/i, '').trim();
  setSelectVal('regBloodGroup', bloodClean);
  setSelectVal('regPatientType', p.detPatientType || p.claim || '');

  setInputVal('regQuickUnderlying', p.underlying || '');
  setInputVal('regQuickAllergy', p.allergy || '');

  // 2. ข้อมูลทั่วไป
  const birthInput = document.getElementById('regBirthDate');
  if (birthInput) {
    birthInput.type = 'text';
    birthInput.value = p.dob || '';
  }
  const cleanNum = (str) => (str ? String(str).replace(/[^\d]/g, '') : '');
  setInputVal('regAgeYear', cleanNum(p.detAgeYear || p.age));
  setInputVal('regAgeMonth', cleanNum(p.detAgeMonth) || '0');
  setInputVal('regAgeDay', cleanNum(p.detAgeDay) || '0');

  setSelectVal('regEducation', p.detEducation || '');
  setSelectVal('regOccupation', p.detOccupation || '');
  setSelectVal('regIncome', p.detIncome || '');
  setInputVal('regTel', p.detTel || '');
  setInputVal('regMobile', p.phone || '');
  setInputVal('regEmail', p.detEmail || '');

  // 3. ที่อยู่ และการติดต่อ
  setSelectVal('regProvince', p.detProvince || '');
  setSelectVal('regDistrict', p.detDistrict || '');
  setSelectVal('regSubdistrict', p.detSubdistrict || '');
  setInputVal('regZipcode', p.detZipcode || '');
  setInputVal('regRoad', p.detRoad || '');
  setInputVal('regIntersection', p.detIntersection || '');
  setInputVal('regVillage', p.detVillage || '');
  setInputVal('regHouseNo', p.detHouseNo || '');
  setInputVal('regAddrMobile', p.phone || '');
  setInputVal('regAddrEmail', p.detEmail || '');
  setInputVal('regAddrLine', p.detAddrLine || '');

  // 4. ญาติผู้ป่วย
  setInputVal('regFatherFirst', p.detFatherFirst || '');
  setInputVal('regFatherLast', p.detFatherLast || '');
  setInputVal('regFatherCid', p.detFatherCid || '');
  setRadioVal('fatherAlien', p.detFatherAlien === 'ใช่' ? 'yes' : 'no');

  setInputVal('regMotherFirst', p.detMotherFirst || '');
  setInputVal('regMotherLast', p.detMotherLast || '');
  setInputVal('regMotherCid', p.detMotherCid || '');
  setRadioVal('motherAlien', p.detMotherAlien === 'ใช่' ? 'yes' : 'no');

  setInputVal('regSpouseFirst', p.detSpouseFirst || '');
  setInputVal('regSpouseLast', p.detSpouseLast || '');
  setInputVal('regSpouseCid', p.detSpouseCid || '');
  setRadioVal('spouseAlien', p.detSpouseAlien === 'ใช่' ? 'yes' : 'no');

  setInputVal('regContactFirst', p.detContactFirst || '');
  setInputVal('regContactLast', p.detContactLast || '');
  setInputVal('regContactCid', p.detContactCid || '');
  setRadioVal('contactAlien', p.detContactAlien === 'ใช่' ? 'yes' : 'no');
  setInputVal('regContactTel', p.detContactTel || '');
  setInputVal('regContactMobile', p.detContactMobile || p.phone || '');
  setSelectVal('regContactRelation', p.detContactRelation || '');
  setInputVal('regContactAddress', p.detContactAddress || '');
  setRadioVal('sameHouse', p.detContactSameHouse === 'ไม่ใช่' ? 'no' : 'yes');

  // 5. โรคประจำตัว
  const hasAllergyVal = p.detHasAllergy === 'ใช่' ? 'yes' : (p.detHasAllergy === 'ไม่ทราบ' ? 'unknown' : 'no');
  setRadioVal('hasAllergy', hasAllergyVal);
  setInputVal('regDrugAllergy', p.detDrugAllergy || p.allergy || '');
  setInputVal('regOtherAllergy', p.detOtherAllergy || '');
  setInputVal('regUnderlyingDisease', p.underlying || '');
  setInputVal('regClinicalNote', p.detClinicalNote || '');
  setInputVal('regSurgicalNote', p.detSurgicalNote || '');

  const saveBtnText = document.getElementById('regSaveBtnText');
  if (saveBtnText) saveBtnText.textContent = 'บันทึกการแก้ไข';

  switchView('records-create');
}

function handleCancelPatientReg() {
  if (editingRecordId !== null && activeRecordPatient) {
    editingRecordId = null;
    switchView('records-detail');
  } else {
    editingRecordId = null;
    switchView('records');
  }
}

function closeNewPatientModal() {
  handleCancelPatientReg();
}

function triggerAvatarUpload() {
  const fileInput = document.getElementById('regAvatarInput');
  if (fileInput) fileInput.click();
}

function handleAvatarFileChange(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    const preview = document.getElementById('regAvatarPreview');
    if (preview && evt.target.result) {
      preview.src = evt.target.result;
    }
  };
  reader.readAsDataURL(file);
}

function calculateRegAge(dateStr) {
  if (!dateStr) return;
  const birth = new Date(dateStr);
  if (isNaN(birth.getTime())) return;

  const now = new Date();
  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();

  if (days < 0) {
    months -= 1;
    days += 30;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const yEl = document.getElementById('regAgeYear');
  const mEl = document.getElementById('regAgeMonth');
  const dEl = document.getElementById('regAgeDay');

  if (yEl) yEl.value = Math.max(0, years);
  if (mEl) mEl.value = Math.max(0, months);
  if (dEl) dEl.value = Math.max(0, days);
}

function scrollToMedicalSection(type) {
  const section = document.getElementById('regMedicalSection');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  setTimeout(() => {
    if (type === 'underlying') {
      const el = document.getElementById('regUnderlyingDisease');
      if (el) el.focus();
    } else if (type === 'allergy') {
      const el = document.getElementById('regDrugAllergy');
      if (el) el.focus();
    }
  }, 350);
}

function syncQuickAllergy(val) {
  const quick = document.getElementById('regQuickAllergy');
  if (quick) quick.value = val;
}

function syncQuickUnderlying(val) {
  const quick = document.getElementById('regQuickUnderlying');
  if (quick) quick.value = val;
}

function addExtraAddressBlock() {
  const container = document.getElementById('regAddressesContainer');
  if (!container) return;

  const firstBlock = container.querySelector('.reg-address-block');
  if (!firstBlock) return;

  const clone = firstBlock.cloneNode(true);

  // Remove any existing header if cloned
  const existingHeader = clone.querySelector('.reg-address-block-header');
  if (existingHeader) existingHeader.remove();

  clone.querySelectorAll('input').forEach(inp => {
    inp.value = '';
    inp.removeAttribute('id');
  });
  clone.querySelectorAll('select').forEach(sel => {
    sel.selectedIndex = 0;
    sel.removeAttribute('id');
  });

  const blockIndex = container.querySelectorAll('.reg-address-block').length + 1;
  const headerDiv = document.createElement('div');
  headerDiv.className = 'reg-address-block-header';
  headerDiv.innerHTML = `
    <span class="reg-address-block-title">ที่อยู่ที่ ${blockIndex}</span>
    <button type="button" class="btn-reg-remove-address" onclick="removeAddressBlock(this)">
      <i data-lucide="trash-2"></i>
      <span>ลบที่อยู่นี้</span>
    </button>
  `;
  clone.insertBefore(headerDiv, clone.firstChild);

  container.appendChild(clone);
  if (window.lucide) window.lucide.createIcons();
  showToast('เพิ่มที่อยู่', `เพิ่มรายการที่อยู่ที่ ${blockIndex} เรียบร้อยแล้ว`, 'info');
}

function removeAddressBlock(btnEl) {
  const block = btnEl.closest('.reg-address-block');
  const container = document.getElementById('regAddressesContainer');
  if (!block || !container) return;

  const allBlocks = container.querySelectorAll('.reg-address-block');
  if (allBlocks.length <= 1) {
    showToast('ไม่สามารถลบได้', 'ต้องมีรายการที่อยู่อย่างน้อย 1 รายการ', 'info');
    return;
  }

  block.remove();

  // Re-number remaining extra address blocks
  const remainingBlocks = container.querySelectorAll('.reg-address-block');
  remainingBlocks.forEach((blk, idx) => {
    const titleEl = blk.querySelector('.reg-address-block-title');
    if (titleEl) {
      titleEl.textContent = `ที่อยู่ที่ ${idx + 1}`;
    }
  });

  showToast('ลบที่อยู่สำเร็จ', 'ลบรายการที่อยู่เพิ่มเติมเรียบร้อยแล้ว', 'info');
}

function handlePatientRegSubmit(e) {
  e.preventDefault();

  const valOr = (id, fallback = '') => {
    const v = document.getElementById(id)?.value?.trim();
    return v ? v : fallback;
  };

  const getRadioText = (name, defaultText = 'ไม่ใช่') => {
    const checked = document.querySelector(`input[name="${name}"]:checked`)?.value;
    if (checked === 'yes') return 'ใช่';
    if (checked === 'no') return 'ไม่ใช่';
    if (checked === 'unknown') return 'ไม่ทราบ';
    return defaultText;
  };

  const prefix = valOr('regPrefixTh', 'นางสาว');
  const firstName = valOr('regFirstNameTh', 'สมเจต');
  const lastName = valOr('regLastNameTh', 'ส้มแดง');
  const rawCid = valOr('regCitizenId', '1-1037-0098-5678');
  const mobile = valOr('regMobile') || valOr('regAddrMobile') || valOr('regTel') || '089-123-4567';
  const patientType = valOr('regPatientType', 'สิทธิประกันสังคม');
  const bloodGroup = valOr('regBloodGroup', 'O');
  const ageYear = valOr('regAgeYear', '30');
  const ageMonth = valOr('regAgeMonth', '0');
  const ageDay = valOr('regAgeDay', '0');
  const dob = valOr('regBirthDate', '12 ม.ค. 2539');
  const drugAllergy = valOr('regDrugAllergy') || valOr('regQuickAllergy') || 'ไม่มีประวัติแพ้ยา';
  const underlying = valOr('regUnderlyingDisease') || valOr('regQuickUnderlying') || 'ไม่มีโรคประจำตัว';
  const avatarSrc = document.getElementById('regAvatarPreview')?.src || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150';

  const shortPrefix = prefix === 'นางสาว' ? 'น.ส.' : prefix;
  const fullName = `${shortPrefix} ${firstName} ${lastName}`;
  const isFemale = (prefix === 'นางสาว' || prefix === 'นาง' || prefix === 'น.ส.' || prefix === 'ด.ญ.');
  const gender = isFemale ? 'female' : 'male';

  let maskedCid = "1-1037-00XX-XXXX";
  const cleanCid = rawCid.replace(/\D/g, '');
  if (cleanCid.length === 13) {
    maskedCid = `${cleanCid[0]}-${cleanCid.slice(1, 5)}-${cleanCid.slice(5, 7)}XX-XXXX`;
  } else if (rawCid && rawCid !== '-') {
    maskedCid = rawCid;
  }

  const collectedDetails = {
    citizenId: maskedCid,
    fullCitizenId: rawCid !== '-' ? rawCid : '1-1037-0098-5678',
    gender: gender,
    prefix: shortPrefix,
    name: fullName,
    phone: mobile !== '-' ? mobile : '089-123-4567',
    age: `${ageYear !== '-' ? ageYear : '30'} ปี`,
    dob: dob,
    claim: patientType,
    allergy: drugAllergy !== '-' ? drugAllergy : 'ไม่มีประวัติแพ้ยา',
    underlying: underlying !== '-' ? underlying : 'ไม่มีโรคประจำตัว',
    bloodGroup: bloodGroup.includes('Rh') ? bloodGroup : `${bloodGroup} Rh+`,
    avatar: avatarSrc,
    customAvatar: avatarSrc,
    detPrefixTh: prefix,
    detFirstNameTh: firstName,
    detLastNameTh: lastName,
    detPrefixEn: valOr('regPrefixEn', 'ระบุรายละเอียด'),
    detFirstNameEn: valOr('regFirstNameEn', 'รายละเอียด'),
    detLastNameEn: valOr('regLastNameEn', 'รายละเอียด'),
    detNationality: valOr('regNationality', 'ไทย'),
    detRace: valOr('regRace', 'ไทย'),
    detReligion: valOr('regReligion', 'พุทธ'),
    detCardType: valOr('regCardType', 'บัตรประชาชน'),
    detPatientType: patientType,
    detAgeYear: `${ageYear !== '-' ? ageYear : '30'} ปี`,
    detAgeMonth: `${ageMonth !== '-' ? ageMonth : '0'} เดือน`,
    detAgeDay: `${ageDay !== '-' ? ageDay : '0'} วัน`,
    detEducation: valOr('regEducation', 'ระบุรายละเอียด'),
    detOccupation: valOr('regOccupation', 'ระบุรายละเอียด'),
    detIncome: valOr('regIncome', 'ระบุรายละเอียด'),
    detTel: valOr('regTel', '-'),
    detEmail: valOr('regEmail') || valOr('regAddrEmail') || 'ระบุรายละเอียด',
    detProvince: valOr('regProvince', 'ระบุรายละเอียด'),
    detDistrict: valOr('regDistrict', 'ระบุรายละเอียด'),
    detSubdistrict: valOr('regSubdistrict', 'ระบุรายละเอียด'),
    detZipcode: valOr('regZipcode', 'ระบุรายละเอียด'),
    detRoad: valOr('regRoad', '-'),
    detIntersection: valOr('regIntersection', '-'),
    detVillage: valOr('regVillage', '-'),
    detHouseNo: valOr('regHouseNo', 'ระบุรายละเอียด'),
    detAddrLine: valOr('regAddrLine', 'ระบุรายละเอียด'),
    detFatherFirst: valOr('regFatherFirst', 'ระบุรายละเอียด'),
    detFatherLast: valOr('regFatherLast', 'ระบุรายละเอียด'),
    detFatherCid: valOr('regFatherCid', 'ระบุรายละเอียด'),
    detFatherAlien: getRadioText('fatherAlien', 'ไม่ใช่'),
    detMotherFirst: valOr('regMotherFirst', 'ระบุรายละเอียด'),
    detMotherLast: valOr('regMotherLast', 'ระบุรายละเอียด'),
    detMotherCid: valOr('regMotherCid', 'ระบุรายละเอียด'),
    detMotherAlien: getRadioText('motherAlien', 'ไม่ใช่'),
    detSpouseFirst: valOr('regSpouseFirst', '-'),
    detSpouseLast: valOr('regSpouseLast', '-'),
    detSpouseCid: valOr('regSpouseCid', '-'),
    detSpouseAlien: getRadioText('spouseAlien', 'ไม่ใช่'),
    detContactFirst: valOr('regContactFirst', 'ระบุรายละเอียด'),
    detContactLast: valOr('regContactLast', 'ระบุรายละเอียด'),
    detContactCid: valOr('regContactCid', 'ระบุรายละเอียด'),
    detContactAlien: getRadioText('contactAlien', 'ไม่ใช่'),
    detContactTel: valOr('regContactTel', '-'),
    detContactMobile: valOr('regContactMobile') || mobile,
    detContactRelation: valOr('regContactRelation', 'ระบุรายละเอียด'),
    detContactAddress: valOr('regContactAddress', 'ระบุรายละเอียด'),
    detContactSameHouse: getRadioText('sameHouse', 'ใช่'),
    detHasAllergy: getRadioText('hasAllergy', 'ไม่ใช่'),
    detDrugAllergy: drugAllergy,
    detOtherAllergy: valOr('regOtherAllergy', 'ไม่มี'),
    detClinicalNote: valOr('regClinicalNote', 'ระบุรายละเอียด'),
    detSurgicalNote: valOr('regSurgicalNote', 'ระบุรายละเอียด')
  };

  if (editingRecordId !== null) {
    const idx = recordsData.findIndex(r => r.id === editingRecordId);
    if (idx !== -1) {
      recordsData[idx] = {
        ...recordsData[idx],
        ...collectedDetails
      };
      const updatedPatient = recordsData[idx];
      editingRecordId = null;
      viewPatientRecord(updatedPatient.id);
      playHospitalChime();
      showToast('แก้ไขข้อมูลสำเร็จ', `อัปเดตข้อมูลเวชระเบียนของ ${fullName} (HN: ${updatedPatient.hn}) เรียบร้อยแล้ว`, 'success');
      return;
    }
    editingRecordId = null;
  }

  const newId = recordsData.length > 0 ? Math.max(...recordsData.map(r => r.id)) + 1 : 1;
  const newHn = `1252${568 + newId}-69`;

  const newPatient = {
    id: newId,
    hn: newHn,
    registeredDate: "7 ต.ค. 69",
    isToday: true,
    detRemark: "ผู้ป่วยลงทะเบียนใหม่",
    ...collectedDetails
  };

  recordsData.unshift(newPatient);

  // ซิงก์ผู้ป่วยลงทะเบียนใหม่เข้าสู่ระบบคิวรอตรวจ (waitingQueueData) และหน้าห้องตรวจแพทย์ (examRoomQueueData) อัตโนมัติ
  const walkinQueueNo = `W-${String((typeof waitingQueueData !== 'undefined' ? waitingQueueData.length : 10) + 18).padStart(3, '0')}`;
  const now = new Date();
  const regTimeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} น.`;

  if (typeof waitingQueueData !== 'undefined') {
    waitingQueueData.unshift({
      id: Date.now(),
      queueNo: walkinQueueNo,
      patientName: fullName,
      hn: newHn,
      type: "Walk-in",
      apptTime: `ลงทะเบียน ${regTimeStr}`,
      waitMinutes: 0,
      waitSeconds: 0,
      isUrgent: false,
      doctor: "นพ. วินัย เลิศเวชกุล",
      dept: "จักษุวิทยา",
      detail: collectedDetails.underlying !== 'ไม่มีโรคประจำตัว' ? collectedDetails.underlying : 'ผู้ป่วยใหม่ Walk-in คัดกรองจักษุ'
    });
    if (typeof renderQueueBoard === 'function') renderQueueBoard();
  }

  if (typeof examRoomQueueData !== 'undefined') {
    examRoomQueueData.unshift({
      id: Date.now() + 1,
      queueNo: walkinQueueNo,
      patientName: fullName,
      hn: newHn.replace('-', '/'),
      apptTime: regTimeStr,
      overdueTime: "00:00 น.",
      detail: collectedDetails.underlying !== 'ไม่มีโรคประจำตัว' ? collectedDetails.underlying : 'ผู้ป่วยใหม่ Walk-in คัดกรองจักษุ',
      roomName: "รอเรียกเข้าห้องตรวจ",
      doctor: "นพ. วินัย เลิศเวชกุล",
      status: "ready"
    });
    if (typeof renderExamRoomQueue === 'function') renderExamRoomQueue();
  }

  if (typeof renderHomeDashboard === 'function') renderHomeDashboard();

  switchView('records');
  playHospitalChime();
  showToast('ลงทะเบียนผู้ป่วยและส่งเข้าคิวสำเร็จ', `เพิ่ม ${fullName} (HN: ${newHn}) พร้อมออกคิว ${walkinQueueNo} เข้าสู่ระบบคิวและห้องตรวจเรียบร้อยแล้ว`, 'success');
}

// ==========================================================
// SMART CARD READER SIMULATION (อ่านข้อมูลจากบัตรประชาชน)
// ==========================================================

let smartCardTimers = [];
let smartCardMockIndex = 0;

const smartCardMockProfiles = [
  {
    prefixTh: "นางสาว",
    firstNameTh: "ชลธิชา",
    lastNameTh: "วงศ์สวัสดิ์",
    prefixEn: "Miss",
    firstNameEn: "Chonticha",
    lastNameEn: "Wongsawat",
    nationality: "ไทย",
    race: "ไทย",
    religion: "พุทธ",
    citizenId: "1-1005-0124-8839",
    cardType: "บัตรประชาชน",
    bloodGroup: "O",
    patientType: "สิทธิประกันสังคม",
    birthDate: "1996-04-18",
    ageYear: "30",
    ageMonth: "6",
    ageDay: "9",
    province: "กรุงเทพมหานคร",
    district: "วัฒนา",
    subdistrict: "คลองเตย",
    zipcode: "10110",
    road: "สุขุมวิท",
    intersection: "อโศก",
    village: "บ้านสวนสุขุมวิท",
    houseNo: "88/14",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=240"
  },
  {
    prefixTh: "นาย",
    firstNameTh: "ธนกร",
    lastNameTh: "อัศวเหม",
    prefixEn: "Mr.",
    firstNameEn: "Thanakorn",
    lastNameEn: "Asawahem",
    nationality: "ไทย",
    race: "ไทย",
    religion: "พุทธ",
    citizenId: "1-1014-0089-4512",
    cardType: "บัตรประชาชน",
    bloodGroup: "A",
    patientType: "ผู้ป่วยทั่วไป",
    birthDate: "1988-11-22",
    ageYear: "37",
    ageMonth: "11",
    ageDay: "5",
    province: "นนทบุรี",
    district: "เมือง",
    subdistrict: "ลาดยาว",
    zipcode: "11000",
    road: "รัตนาธิเบศร์",
    intersection: "แคราย",
    village: "คาซ่าวิลล์",
    houseNo: "129/45",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=240"
  },
  {
    prefixTh: "นาง",
    firstNameTh: "นันทนา",
    lastNameTh: "ศิริสมบูรณ์",
    prefixEn: "Mrs.",
    firstNameEn: "Nanthana",
    lastNameEn: "Sirisomboon",
    nationality: "ไทย",
    race: "ไทย",
    religion: "พุทธ",
    citizenId: "3-1009-0051-7721",
    cardType: "บัตรประชาชน",
    bloodGroup: "B",
    patientType: "จ่ายตรงกรมบัญชีกลาง",
    birthDate: "1974-08-09",
    ageYear: "52",
    ageMonth: "2",
    ageDay: "18",
    province: "กรุงเทพมหานคร",
    district: "ปทุมวัน",
    subdistrict: "ลุมพินี",
    zipcode: "10330",
    road: "พระราม 4",
    intersection: "วิทยุ",
    village: "-",
    houseNo: "42/9",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=240"
  }
];

function clearSmartCardTimers() {
  smartCardTimers.forEach(t => clearTimeout(t));
  smartCardTimers = [];
}

function readSmartCardData() {
  clearSmartCardTimers();

  const modal = document.getElementById('smartCardReadingModal');
  const statusText = document.getElementById('smartCardStatusText');
  const progressBar = document.getElementById('smartCardProgressBar');
  const step1 = document.getElementById('scStep1');
  const step2 = document.getElementById('scStep2');
  const step3 = document.getElementById('scStep3');

  if (modal) modal.style.display = 'flex';
  if (statusText) statusText.textContent = 'กำลังเชื่อมต่อเครื่องอ่านบัตร Smart Card...';
  if (progressBar) progressBar.style.width = '28%';

  if (step1) step1.className = 'smartcard-step-pill active';
  if (step2) step2.className = 'smartcard-step-pill';
  if (step3) step3.className = 'smartcard-step-pill';

  // Step 2: Reading chip
  smartCardTimers.push(setTimeout(() => {
    if (statusText) statusText.textContent = 'กำลังอ่านข้อมูลเลขประจำตัวประชาชน และชื่อ-นามสกุล...';
    if (progressBar) progressBar.style.width = '68%';
    if (step1) step1.className = 'smartcard-step-pill done';
    if (step2) step2.className = 'smartcard-step-pill active';
  }, 650));

  // Step 3: Reading photo & address
  smartCardTimers.push(setTimeout(() => {
    if (statusText) statusText.textContent = 'กำลังดึงรูปถ่ายหน้าตรงและที่อยู่ตามทะเบียนบ้าน...';
    if (progressBar) progressBar.style.width = '100%';
    if (step2) step2.className = 'smartcard-step-pill done';
    if (step3) step3.className = 'smartcard-step-pill active';
  }, 1300));

  // Complete & populate fields
  smartCardTimers.push(setTimeout(() => {
    if (step3) step3.className = 'smartcard-step-pill done';
    if (modal) modal.style.display = 'none';

    const profile = smartCardMockProfiles[smartCardMockIndex % smartCardMockProfiles.length];
    smartCardMockIndex++;

    const setField = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.value = val;
    };

    setField('regPrefixTh', profile.prefixTh);
    setField('regFirstNameTh', profile.firstNameTh);
    setField('regLastNameTh', profile.lastNameTh);
    setField('regPrefixEn', profile.prefixEn);
    setField('regFirstNameEn', profile.firstNameEn);
    setField('regLastNameEn', profile.lastNameEn);
    setField('regNationality', profile.nationality);
    setField('regRace', profile.race);
    setField('regReligion', profile.religion);
    setField('regCitizenId', profile.citizenId);
    setField('regCardType', profile.cardType);
    setField('regBloodGroup', profile.bloodGroup);
    setField('regPatientType', profile.patientType);

    const birthEl = document.getElementById('regBirthDate');
    if (birthEl) {
      birthEl.type = 'date';
      birthEl.value = profile.birthDate;
    }
    setField('regAgeYear', profile.ageYear);
    setField('regAgeMonth', profile.ageMonth);
    setField('regAgeDay', profile.ageDay);

    setField('regProvince', profile.province);
    setField('regDistrict', profile.district);
    setField('regSubdistrict', profile.subdistrict);
    setField('regZipcode', profile.zipcode);
    setField('regRoad', profile.road);
    setField('regIntersection', profile.intersection);
    setField('regVillage', profile.village);
    setField('regHouseNo', profile.houseNo);

    const avatarPreview = document.getElementById('regAvatarPreview');
    if (avatarPreview) avatarPreview.src = profile.avatar;

    playHospitalChime();
    showToast(
      'อ่านบัตรประชาชนสำเร็จ',
      `ดึงข้อมูลของ ${profile.prefixTh} ${profile.firstNameTh} ${profile.lastNameTh} (${profile.citizenId}) เข้าสู่ฟอร์มเรียบร้อยแล้ว`,
      'success'
    );
  }, 1950));
}

function cancelSmartCardRead() {
  clearSmartCardTimers();
  const modal = document.getElementById('smartCardReadingModal');
  if (modal) modal.style.display = 'none';
  showToast('ยกเลิกการอ่านบัตร', 'ยกเลิกการอ่านข้อมูลจากบัตรประชาชนแล้ว', 'info');
}

// ==========================================================
// DOCTOR EXAMINATION ROOM QUEUE MODULE (เมนูห้องตรวจ)
// ==========================================================

let examRoomQueueData = [
  {
    id: 101,
    queueNo: "S-096",
    patientName: "นาย ชัยรัตน์ โสภณ",
    hn: "123456/69",
    roomName: "ห้อง 1",
    roomId: 1,
    apptTime: "10:00 น.",
    overdueTime: "00:15 น.",
    detail: "เจ็บตาด้านซ้าย",
    status: "completed"
  },
  {
    id: 102,
    queueNo: "S-096",
    patientName: "นาย ชัยรัตน์ โสภณ",
    hn: "123456/69",
    roomName: "ห้อง 1",
    roomId: 1,
    apptTime: "10:00 น.",
    overdueTime: "00:15 น.",
    detail: "เจ็บตาด้านซ้าย",
    status: "examining"
  },
  {
    id: 103,
    queueNo: "S-096",
    patientName: "นาย ชัยรัตน์ โสภณ",
    hn: "123456/69",
    roomName: "ห้อง 1",
    roomId: 1,
    apptTime: "10:00 น.",
    overdueTime: "00:15 น.",
    detail: "เจ็บตาด้านซ้าย",
    status: "overdue"
  },
  {
    id: 104,
    queueNo: "S-096",
    patientName: "นาย ชัยรัตน์ โสภณ",
    hn: "123456/69",
    roomName: "ห้อง 1",
    roomId: 1,
    apptTime: "10:00 น.",
    overdueTime: "00:00 น.",
    detail: "เจ็บตาด้านซ้าย",
    status: "ready"
  },
  {
    id: 105,
    queueNo: "S-096",
    patientName: "นาย ชัยรัตน์ โสภณ",
    hn: "123456/69",
    roomName: "ห้อง 1",
    roomId: 1,
    apptTime: "10:00 น.",
    overdueTime: "00:00 น.",
    detail: "เจ็บตาด้านซ้าย",
    status: "ready"
  }
];

let examRoomFilterState = 'all'; // 'all' | 'overdue' | 'ready' | 'examining' | 'completed'
let examRoomFilterRoom = 'all';  // 'all' | '1' | '2' | '3'
let examRoomSearchQuery = '';

// Helper: คำนวณและตรวจสอบสถานะเกินกำหนด (Overdue status & duration)
function getItemOverdueStatus(item) {
  const isCompleted = item.status === 'completed';
  const isExamining = item.status === 'examining';

  let hasOverdueTime = false;
  let overdueText = item.overdueTime || '00:00 น.';

  if (item.overdueTime && item.overdueTime !== '00:00 น.' && item.overdueTime !== '00:00' && item.overdueTime !== '-') {
    hasOverdueTime = true;
  } else if (item.status === 'overdue') {
    hasOverdueTime = true;
    if (!item.overdueTime || item.overdueTime === '00:00 น.') {
      overdueText = '00:15 น.';
    }
  }

  // กำหนด effectiveStatus สำหรับการกรองและแสดงผล
  let effectiveStatus = item.status || 'ready';
  if (!isCompleted && !isExamining) {
    if (hasOverdueTime || item.status === 'overdue') {
      effectiveStatus = 'overdue';
    } else {
      effectiveStatus = 'ready';
    }
  }

  return {
    isCompleted,
    isExamining,
    hasOverdueTime,
    overdueText,
    effectiveStatus
  };
}

function setupExamRoomEventListeners() {
  const searchInput = document.getElementById('examRoomSearchInput');
  const clearBtn = document.getElementById('clearExamRoomSearchBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      examRoomSearchQuery = e.target.value.trim().toLowerCase();
      if (clearBtn) clearBtn.style.display = examRoomSearchQuery ? 'flex' : 'none';
      renderExamRoomQueue();
    });
  }
}

function clearExamRoomSearch() {
  const searchInput = document.getElementById('examRoomSearchInput');
  const clearBtn = document.getElementById('clearExamRoomSearchBtn');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  examRoomSearchQuery = '';
  renderExamRoomQueue();
}

function filterExamRoomByStatus(statusType) {
  examRoomFilterState = statusType;

  const cardAll = document.getElementById('examKpiAll');
  const cardOverdue = document.getElementById('examKpiOverdue');
  const cardWaiting = document.getElementById('examKpiWaiting');
  const cardExamining = document.getElementById('examKpiExamining');
  const cardCompleted = document.getElementById('examKpiCompleted');

  if (cardAll) cardAll.classList.toggle('active-navy', statusType === 'all');
  if (cardOverdue) cardOverdue.classList.toggle('active-navy', statusType === 'overdue');
  if (cardWaiting) cardWaiting.classList.toggle('active-navy', statusType === 'ready');
  if (cardExamining) cardExamining.classList.toggle('active-navy', statusType === 'examining');
  if (cardCompleted) cardCompleted.classList.toggle('active-navy', statusType === 'completed');

  renderExamRoomQueue();
}

function filterExamRoomByRoom(roomKey) {
  examRoomFilterRoom = String(roomKey);
  const pills = document.querySelectorAll('.exam-room-pill');
  pills.forEach(pill => {
    pill.classList.toggle('active', pill.getAttribute('data-room') === String(roomKey));
  });
  renderExamRoomQueue();
}

function renderExamRoomQueue() {
  const tbody = document.getElementById('examRoomTableBody');
  if (!tbody) return;

  // คำนวณ KPI นับตามสถานะ
  const totalCount = examRoomQueueData.length;
  let overdueCount = 0;
  let readyCount = 0;
  let examiningCount = 0;
  let completedCount = 0;

  examRoomQueueData.forEach(item => {
    const info = getItemOverdueStatus(item);
    if (info.effectiveStatus === 'overdue') overdueCount++;
    else if (info.effectiveStatus === 'ready') readyCount++;
    else if (info.effectiveStatus === 'examining') examiningCount++;
    else if (info.effectiveStatus === 'completed') completedCount++;
  });

  const elTotal = document.getElementById('kpiExamTotal');
  const elOverdue = document.getElementById('kpiExamOverdue');
  const elWaiting = document.getElementById('kpiExamWaiting');
  const elInProgress = document.getElementById('kpiExamInProgress');
  const elDone = document.getElementById('kpiExamDone');

  if (elTotal) elTotal.textContent = totalCount;
  if (elOverdue) elOverdue.textContent = overdueCount;
  if (elWaiting) elWaiting.textContent = readyCount;
  if (elInProgress) elInProgress.textContent = examiningCount;
  if (elDone) elDone.textContent = completedCount;

  // กรองตาม Filter สถานะ, ห้องตรวจ และคำค้นหา
  const filtered = examRoomQueueData.filter(item => {
    const info = getItemOverdueStatus(item);

    // กรองตามสถานะ
    if (examRoomFilterState !== 'all' && info.effectiveStatus !== examRoomFilterState) {
      return false;
    }

    // กรองตามห้องตรวจ
    if (examRoomFilterRoom !== 'all') {
      const rName = item.roomName || '';
      const rId = String(item.roomId || '');
      if (!rName.includes(examRoomFilterRoom) && rId !== examRoomFilterRoom) {
        return false;
      }
    }

    // กรองตามค้นหา
    if (examRoomSearchQuery) {
      const q = examRoomSearchQuery;
      const match = (item.queueNo && item.queueNo.toLowerCase().includes(q)) ||
                    (item.patientName && item.patientName.toLowerCase().includes(q)) ||
                    (item.hn && item.hn.toLowerCase().includes(q)) ||
                    (item.detail && item.detail.toLowerCase().includes(q)) ||
                    (item.apptTime && item.apptTime.toLowerCase().includes(q)) ||
                    (item.roomName && item.roomName.toLowerCase().includes(q));
      if (!match) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" style="text-align: center; padding: 48px; color: #94A3B8;">
          <i data-lucide="stethoscope" style="width: 32px; height: 32px; margin-bottom: 8px; color: #94A3B8;"></i>
          <div>ไม่พบรายการคิวผู้ป่วยในห้องตรวจตามเงื่อนไขที่ค้นหา</div>
        </td>
      </tr>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  let html = '';
  filtered.forEach((item, index) => {
    const info = getItemOverdueStatus(item);
    const orderNum = String(index + 1).padStart(3, '0');

    // คอลัมน์สถานะ (Status Pill)
    let statusBadgeHtml = '';
    // คอลัมน์จัดการ (Actions)
    let actionBtnHtml = '';

    if (info.isCompleted) {
      statusBadgeHtml = `
        <span class="exam-status-badge status-completed">
          <i data-lucide="check"></i>
          <span>ตรวจแล้ว</span>
        </span>
      `;
      actionBtnHtml = `
        <button type="button" class="btn-exam-view-result" onclick="startDoctorExamination('${item.id}')" title="ดูผลตรวจ">
          <i data-lucide="eye"></i>
          <span>ดูผลตรวจ</span>
        </button>
      `;
    } else if (info.isExamining) {
      statusBadgeHtml = `
        <span class="exam-status-badge status-examining">
          <i data-lucide="user"></i>
          <span>กำลังตรวจ</span>
        </span>
      `;
      actionBtnHtml = `
        <button type="button" class="btn-exam-view-result" onclick="startDoctorExamination('${item.id}')" title="เข้าห้องตรวจเพื่อตรวจต่อ">
          <i data-lucide="eye"></i>
          <span>ดูผลตรวจ</span>
        </button>
      `;
    } else if (info.effectiveStatus === 'overdue') {
      statusBadgeHtml = `
        <span class="exam-status-badge status-overdue">
          <i data-lucide="clock"></i>
          <span>เกินกำหนด</span>
        </span>
      `;
      actionBtnHtml = `
        <div class="exam-action-cell">
          <button type="button" class="btn-exam-send-back" onclick="handleSendBackToQueue('${item.id}')" title="ส่งรายชื่อกลับไปหน้าคิวใหม่อีกครั้ง">
            <i data-lucide="arrow-left"></i>
            <span>ส่งกลับก่อนหน้านี้</span>
          </button>
          <button type="button" class="btn-exam-start-check" onclick="startDoctorExamination('${item.id}')" title="เริ่มตรวจผู้ป่วย">
            <i data-lucide="stethoscope"></i>
            <span>เริ่มตรวจ</span>
          </button>
        </div>
      `;
    } else {
      statusBadgeHtml = `
        <span class="exam-status-badge status-ready">
          <i data-lucide="clock"></i>
          <span>รอตรวจ</span>
        </span>
      `;
      actionBtnHtml = `
        <div class="exam-action-cell">
          <button type="button" class="btn-exam-send-back" onclick="handleSendBackToQueue('${item.id}')" title="ส่งรายชื่อกลับไปหน้าคิวใหม่อีกครั้ง">
            <i data-lucide="arrow-left"></i>
            <span>ส่งกลับก่อนหน้านี้</span>
          </button>
          <button type="button" class="btn-exam-start-check" onclick="startDoctorExamination('${item.id}')" title="เริ่มตรวจผู้ป่วย">
            <i data-lucide="stethoscope"></i>
            <span>เริ่มตรวจ</span>
          </button>
        </div>
      `;
    }

    // เวลาที่เกินกำหนด: ถ้าเกินกำหนดให้ขึ้นเลขสีแดงพร้อมไอคอนสีแดงตามภาพ
    const overduePillHtml = info.hasOverdueTime
      ? `<span class="exam-time-pill overdue"><i data-lucide="clock"></i><span>${info.overdueText}</span></span>`
      : `<span class="exam-time-pill muted"><i data-lucide="clock"></i><span>00:00 น.</span></span>`;

    html += `
      <tr>
        <td style="text-align: center;">
          <span class="exam-order-num">${orderNum}</span>
        </td>
        <td style="text-align: center;">
          <span class="exam-queue-code">${item.queueNo}</span>
        </td>
        <td style="text-align: center;">
          <div class="exam-patient-cell" style="cursor: pointer;" onclick="startDoctorExamination('${item.id}')" title="คลิกเพื่อเข้าสู่ห้องตรวจคนไข้">
            <span class="exam-patient-name">${item.patientName}</span>
            <span class="exam-patient-hn">HN: ${item.hn}</span>
          </div>
        </td>
        <td style="text-align: center;">
          <span class="exam-room-cell-pill">${item.roomName || 'ห้อง 1'}</span>
        </td>
        <td style="text-align: center;">
          <span class="exam-time-pill">
            <i data-lucide="clock"></i>
            <span>${item.apptTime}</span>
          </span>
        </td>
        <td style="text-align: center;">
          ${overduePillHtml}
        </td>
        <td style="text-align: center;">
          <span class="exam-detail-text">${item.detail}</span>
        </td>
        <td style="text-align: center;">
          ${statusBadgeHtml}
        </td>
        <td style="text-align: center;">
          ${actionBtnHtml}
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}

// ==========================================================
// ส่งรายชื่อกลับไปหน้าระบบคิว (Send Back to Queue Management)
// ==========================================================
let pendingSendBackItem = null;

function handleSendBackToQueue(itemId) {
  const item = examRoomQueueData.find(q => String(q.id) === String(itemId));
  if (!item) return;

  pendingSendBackItem = item;

  const modal = document.getElementById('modalSendBackQueue');
  const qNoEl = document.getElementById('sendBackQueueNo');
  const pNameEl = document.getElementById('sendBackPatientName');
  const cRoomEl = document.getElementById('sendBackCurrentRoom');
  const infoEl = document.getElementById('sendBackQueuePatientInfo');

  if (qNoEl) qNoEl.textContent = item.queueNo || '-';
  if (pNameEl) pNameEl.textContent = item.patientName || '-';
  if (cRoomEl) cRoomEl.textContent = item.roomName || 'ห้อง 1';
  if (infoEl) infoEl.textContent = `ผู้ป่วย: ${item.patientName} (${item.queueNo})`;

  if (modal) modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

function closeSendBackModal() {
  const modal = document.getElementById('modalSendBackQueue');
  if (modal) modal.style.display = 'none';
  pendingSendBackItem = null;
}

function confirmExecuteSendBack() {
  if (!pendingSendBackItem) return;
  const item = pendingSendBackItem;

  // 1. คืนสถานะห้องตรวจใน examRoomsData ให้ว่าง (empty)
  if (typeof examRoomsData !== 'undefined') {
    const assignedRoom = examRoomsData.find(r =>
      r.id === item.roomId ||
      (item.roomName && (r.name === item.roomName || r.name.includes(item.roomName))) ||
      (r.patient && (r.patient.queueNo === item.queueNo || r.patient.patientName === item.patientName))
    );
    if (assignedRoom) {
      assignedRoom.status = 'empty';
      assignedRoom.patient = null;
    }
  }

  // 2. ส่งรายชื่อกลับไปหน้าระบบคิวรอตรวจ (waitingQueueData)
  if (typeof waitingQueueData !== 'undefined') {
    const existingWaitIdx = waitingQueueData.findIndex(
      q => q.queueNo === item.queueNo || q.patientName === item.patientName
    );
    const returnedWaitItem = {
      id: existingWaitIdx !== -1 ? waitingQueueData[existingWaitIdx].id : Date.now(),
      queueNo: item.queueNo,
      patientName: item.patientName,
      hn: item.hn,
      type: item.type || "นัดหมาย",
      apptTime: item.apptTime ? `นัด ${item.apptTime}` : "นัดหมาย",
      waitMinutes: 0,
      waitSeconds: 0,
      isUrgent: false,
      doctor: item.doctor || "พญ. รัชดาพร เกียรติไพบูลย์",
      dept: "จักษุวิทยา",
      detail: item.detail || "ส่งกลับจากห้องตรวจ เพื่อให้บุคลากรเรียกคิวหรือจัดห้องใหม่",
      returnedFromRoom: item.roomName || "ห้อง 1"
    };

    if (existingWaitIdx !== -1) {
      waitingQueueData.splice(existingWaitIdx, 1);
    }
    // เพิ่มไว้บนสุดของคิวรอตรวจ เพื่อให้บุคลากรเห็นและจัดการต่อได้ทันที
    waitingQueueData.unshift(returnedWaitItem);
  }

  // 3. ลบออกจาก examRoomQueueData
  const examIdx = examRoomQueueData.findIndex(q => String(q.id) === String(item.id));
  if (examIdx !== -1) {
    examRoomQueueData.splice(examIdx, 1);
  }

  closeSendBackModal();

  // 4. รีเรนเดอร์ทุกตารางที่เกี่ยวข้อง
  renderExamRoomQueue();
  if (typeof renderQueueBoard === 'function') renderQueueBoard();
  if (typeof renderExamRoomsList === 'function') renderExamRoomsList();
  if (typeof renderHomeDashboard === 'function') renderHomeDashboard();

  if (typeof playHospitalChime === 'function') playHospitalChime();

  showToast(
    'ส่งกลับหน้าระบบคิวเรียบร้อย',
    `ส่งคิว ${item.queueNo} (${item.patientName}) กลับไปยังหน้าระบบคิวแล้ว บุคลากรสามารถเรียกคิวหรือจัดไปห้องอื่นใหม่แทนได้ทันที`,
    'success'
  );
}


let activeExamQueueItem = null;
let activeExamRecordPatient = null;
let examIcd10List = [];
let examIcd9List = [];
let examChargesList = [
  { id: 1, title: "ค่าบริการทางการพยาบาล", amount: 500, credit: 0, discount: 0, claimable: 0, nonClaimable: 0 },
  { id: 2, title: "ค่าบริการทางการพยาบาล", amount: 1200, credit: 0, discount: 0, claimable: 0, nonClaimable: 0 },
  { id: 3, title: "ค่าบริการทางการพยาบาล", amount: 0, credit: 0, discount: 0, claimable: 0, nonClaimable: 0 },
  { id: 4, title: "ค่าบริการทางการพยาบาล", amount: 0, credit: 0, discount: 0, claimable: 0, nonClaimable: 0 },
  { id: 5, title: "ค่าบริการทางการพยาบาล", amount: 0, credit: 0, discount: 0, claimable: 0, nonClaimable: 0 }
];

function startDoctorExamination(itemId) {
  try {
    let item = examRoomQueueData.find(q => String(q.id) === String(itemId));
    if (!item && examRoomQueueData.length > 0) {
      item = examRoomQueueData[0];
    }
    if (!item) {
      switchView('exam-detail');
      return;
    }

    activeExamQueueItem = item;
    item.status = 'examining';

    // ซิงก์สถานะกับหน้าระบบคิว (waitingQueueData & examRoomsData)
    if (typeof waitingQueueData !== 'undefined') {
      const waitIdx = waitingQueueData.findIndex(
        w => (item.queueNo && w.queueNo === item.queueNo) || (item.patientName && w.patientName === item.patientName)
      );
      if (waitIdx !== -1) waitingQueueData.splice(waitIdx, 1);
    }
    if (typeof examRoomsData !== 'undefined') {
      let assignedRoom = examRoomsData.find(
        r => r.patient && ((item.queueNo && r.patient.queueNo === item.queueNo) || (item.patientName && r.patient.patientName === item.patientName))
      );
      if (!assignedRoom) {
        assignedRoom = (item.roomId && examRoomsData.find(r => r.id === item.roomId))
          || examRoomsData.find(r => r.status === 'empty')
          || examRoomsData[0];
        if (assignedRoom) {
          assignedRoom.status = 'occupied';
          assignedRoom.patient = {
            queueNo: item.queueNo || "S-097",
            patientName: item.patientName || "ผู้ป่วยทั่วไป",
            hn: item.hn || "1252568/69",
            dept: "จักษุวิทยา",
            doctor: item.doctor || "นพ. เปรมชัย เสือขาว",
            examDuration: "กำลังตรวจรักษา (00:01 น.)"
          };
        }
      }
      if (assignedRoom) {
        item.roomName = assignedRoom.name;
        item.roomId = assignedRoom.id;
      }
      if (typeof renderQueueBoard === 'function') renderQueueBoard();
    }
    if (typeof renderHomeDashboard === 'function') renderHomeDashboard();

    // Find matching patient record by HN or Name
    const cleanHn = item.hn ? String(item.hn).replace('/', '-') : '';
    let matchedPatient = null;
    if (typeof recordsData !== 'undefined' && recordsData.length > 0) {
      matchedPatient = recordsData.find(r => {
        if (cleanHn && r.hn === cleanHn) return true;
        if (item.hn && r.hn === item.hn) return true;
        if (item.patientName && r.name === item.patientName) return true;
        if (r.detFirstNameTh && item.patientName && String(item.patientName).includes(r.detFirstNameTh)) return true;
        return false;
      }) || recordsData[0];
    }

    activeExamRecordPatient = matchedPatient;

    const setElText = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val !== undefined && val !== null ? val : '';
    };

    const avatarEl = document.getElementById('examDetAvatar');
    if (avatarEl && matchedPatient) {
      avatarEl.src = matchedPatient.customAvatar || matchedPatient.avatar || avatarEl.src;
    }

    const pName = item.patientName || (matchedPatient ? matchedPatient.name : 'น.ส. กุลธิดา ขุนยางสิน');
    const isFemale = matchedPatient ? matchedPatient.gender === 'female' : (pName.includes('นาง') || pName.includes('น.ส.') || pName.includes('ด.ญ.'));
    setElText('examDetName', pName);
    setElText('examDetGender', isFemale ? '♀' : '♂');
    const genderEl = document.getElementById('examDetGender');
    if (genderEl) genderEl.style.color = isFemale ? '#EC4899' : '#0284C7';

    setElText('examDetHn', item.hn || (matchedPatient ? matchedPatient.hn : '1252568/69'));
    const ageYear = matchedPatient ? (matchedPatient.detAgeYear || matchedPatient.age || '28 ปี') : '28 ปี';
    const ageMonth = matchedPatient && matchedPatient.detAgeMonth ? String(matchedPatient.detAgeMonth).replace('เดือน', 'ด.') : '5 ด.';
    setElText('examDetAge', `${ageYear} ${ageMonth}`);
    const phoneVal = matchedPatient && matchedPatient.phone ? String(matchedPatient.phone).replace(/-/g, '') : '0892456192';
    setElText('examDetPhone', phoneVal);
    setElText('examDetQueueNo', item.queueNo || 'S-097');
    setElText('examDetUnderlying', matchedPatient && matchedPatient.underlying && matchedPatient.underlying !== 'ไม่มีโรคประจำตัว' ? matchedPatient.underlying : (item.detail || 'สายตาสั้นและภาวะตาแห้งเรื้อรัง'));

    const allergyEl = document.getElementById('examDetAllergy');
    if (allergyEl) {
      const rawAllergy = matchedPatient && matchedPatient.allergy && !matchedPatient.allergy.includes('ไม่มี')
        ? matchedPatient.allergy
        : 'AMLODIPINE';
      allergyEl.textContent = rawAllergy;
    }

    // Reset ICD lists & default 5 charge rows matching screenshot
    examIcd10List = [];
    examIcd9List = [];
    examChargesList = [
      { id: 1, title: "ค่าบริการทางการพยาบาล", amount: 500, credit: 0, discount: 0, claimable: 0, nonClaimable: 0 },
      { id: 2, title: "ค่าบริการทางการพยาบาล", amount: 1200, credit: 0, discount: 0, claimable: 0, nonClaimable: 0 },
      { id: 3, title: "ค่าบริการทางการพยาบาล", amount: 0, credit: 0, discount: 0, claimable: 0, nonClaimable: 0 },
      { id: 4, title: "ค่าบริการทางการพยาบาล", amount: 0, credit: 0, discount: 0, claimable: 0, nonClaimable: 0 },
      { id: 5, title: "ค่าบริการทางการพยาบาล", amount: 0, credit: 0, discount: 0, claimable: 0, nonClaimable: 0 }
    ];

    if (typeof renderExamIcd10List === 'function') renderExamIcd10List();
    if (typeof renderExamIcd9List === 'function') renderExamIcd9List();
    if (typeof renderExamChargesTable === 'function') renderExamChargesTable();

    switchView('exam-detail');
    if (typeof playHospitalChime === 'function') playHospitalChime();
  } catch (err) {
    console.error('Error starting doctor examination:', err);
    switchView('exam-detail');
  }
}

function openExamDetailFromRoom(queueNo) {
  const item = examRoomQueueData.find(q => q.queueNo === queueNo);
  if (item) {
    startDoctorExamination(item.id);
  } else {
    switchView('exam-detail');
  }
}

function openExamPatientRecord() {
  if (activeExamRecordPatient) {
    viewPatientRecord(activeExamRecordPatient.id);
  }
}

function selectExamPainScore(score) {
  const valInput = document.getElementById('examPainScoreVal');
  const descEl = document.getElementById('examPainScoreLabel');
  if (valInput) valInput.value = score;

  let label = 'ไม่เจ็บปวด';
  if (score >= 1 && score <= 3) label = 'ปวดเล็กน้อย';
  else if (score >= 4 && score <= 6) label = 'ปวดปานกลาง';
  else if (score >= 7) label = 'ปวดรุนแรง';

  if (descEl) descEl.textContent = label;
}

function switchExamHistoryTab(btnEl, tabKey) {
  const parent = btnEl.closest('.exam-tabs-header');
  if (parent) {
    parent.querySelectorAll('.exam-tab-btn').forEach(b => b.classList.remove('active'));
  }
  btnEl.classList.add('active');

  const textarea = document.getElementById('examChiefComplaintText');
  if (!textarea) return;

  const pName = activeExamQueueItem ? activeExamQueueItem.patientName : 'ผู้ป่วยหญิงไทย';
  const detail = activeExamQueueItem ? activeExamQueueItem.detail : 'มองเห็นจุดดำลอยไปมา';

  const tabTemplates = {
    cc: `ผู้ป่วยหญิงไทย อายุ 56 ปี ปฏิเสธประวัติอุบัติเหตุหรือการกระทบกระเทือนรุนแรงบริเวณดวงตาและศีรษะ (No history of ocular or head trauma)\nให้ประวัติว่า เมื่อ 2 วันก่อน ขณะกำลังนั่งทำงานหน้าจอคอมพิวเตอร์ สังเกตเห็นแสงวูบวาบสีขาวคล้ายแสงแฟลชจากกล้องถ่ายรูป หรือแสงฟ้าแลบ (Flashing) เกิดขึ้นบริเวณหางตา (Temporal side) ของตาข้างขวา (OD) โดยจะเห็นชัดเจนขึ้นเมื่อกลอกตาไปมาหรืออยู่ในที่มืด\nหลังจากนั้นประมาณ 3 ชั่วโมง เริ่มสังเกตเห็นจุดดำขนาดเล็กและเส้นใยสีดำคล้ายหยากไย่ (Floating spots and cobweb-like shapes) ลอยไปมาในลานสายตาข้างขวาจำนวนมาก รบกวนการมองเห็นอย่างมีนัยสำคัญ แต่ไม่มีอาการปวดเบ้าตา (No ocular pain) ไม่มีอาการตาแดง (No red eye) และไม่มีขี้ตาไหลผิดปกติ\nจนกระทั่งตื่นนอนเมื่อเช้านี้ (1 วันหลังเริ่มมีอาการ) ผู้ป่วยรู้สึกว่ามีม่านดำหรือเงาทึบ (Dark curtain/Shadow) ค่อยๆ คืบคลานมาจากทางด้านบน บดบังลานสายตา (Visual field defect) และทำให้ระดับการมองเห็นลดลงอย่างต่อเนื่อง (Progressive decreased vision, OD) จนไม่สามารถอ่านหนังสือหรือมองหน้าคนได้ชัดเจน ส่วนตาข้างซ้าย (OS) การมองเห็นยังคงเป็นปกติ ไม่มีอาการผิดปกติใดๆ`,
    pi: `ผู้ป่วย (${pName}) มาด้วยอาการสำคัญ: ${detail}\nอาการเริ่มเป็นมากขึ้นในช่วง 2-3 วันที่ผ่านมา ไม่มีไข้ ไม่มีอาการคลื่นไส้อาเจียน ยังไม่เคยหยอดยาฆ่าเชื้อมาก่อน`,
    pe: `GA: Alert, cooperative, good consciousness\nHEENT: Not pale, no jaundice\nOcular Exam: Slit-lamp biomicroscopy performed both eyes (OU).`,
    fh: `ปฏิเสธประวัติโรคต้อหินหรือจอประสาทตาเสื่อมในครอบครัวสายตรง\nมารดามีประวัติโรคเบาหวานและความดันโลหิตสูง`,
    sh: `ไม่สูบบุหรี่ ไม่ดื่มสุรา ทำงานใช้หน้าจอคอมพิวเตอร์วันละ 6-8 ชั่วโมง`
  };

  if (tabTemplates[tabKey]) {
    textarea.value = tabTemplates[tabKey];
  }
}

function switchExamImagingTab(btnEl, tabName) {
  const parent = btnEl.closest('.exam-tabs-header');
  if (parent) {
    parent.querySelectorAll('.exam-tab-btn').forEach(b => b.classList.remove('active'));
  }
  btnEl.classList.add('active');
  showToast('สลับมุมมองภาพตรวจตา', `แสดงผลตรวจหมวด ${tabName}`, 'info');
}

function showExamQuickToast(toolName) {
  showToast(`เปิดข้อมูล ${toolName}`, `กำลังเรียกดูข้อมูล ${toolName} ของ ${activeExamQueueItem ? activeExamQueueItem.patientName : 'ผู้ป่วย'}`, 'info');
}

const sampleIcd10Pool = [
  { code: "H33.0", name: "Retinal detachment with retinal break (จอประสาทตาหลุดลอก)" },
  { code: "H04.1", name: "Dry eye syndrome (ภาวะตาแห้งเรื้อรัง)" },
  { code: "H40.1", name: "Primary open-angle glaucoma (ต้อหินมุมเปิด)" },
  { code: "H25.9", name: "Senile cataract, unspecified (ต้อกระจกตามวัย)" }
];

function getActiveIcd10Pool() {
  if (typeof masterIcdData !== 'undefined') {
    const list = masterIcdData.filter(i => i.type === 'icd10' && i.status !== 'inactive');
    if (list.length > 0) {
      return list.map(i => ({ code: i.code, name: `${i.nameEn} (${i.nameTh})` }));
    }
  }
  return sampleIcd10Pool;
}

function addExamIcd10Item() {
  const pool = getActiveIcd10Pool();
  const next = pool[examIcd10List.length % pool.length];
  examIcd10List.push({ id: Date.now(), ...next });
  renderExamIcd10List();
  showToast('เพิ่มรหัสวินิจฉัย ICD-10 (จาก Master Data)', `เพิ่ม ${next.code} - ${next.name}`, 'info');
}

function reDiagExamIcd10() {
  const pool = getActiveIcd10Pool();
  examIcd10List = [pool[0]];
  renderExamIcd10List();
  showToast('ดึงการวินิจฉัยเดิม (Re-diag)', `ดึงรหัส ${pool[0].code} เรียบร้อยแล้ว`, 'info');
}

function removeExamIcd10Item(id) {
  examIcd10List = examIcd10List.filter(i => i.id !== id);
  renderExamIcd10List();
}

function renderExamIcd10List() {
  const container = document.getElementById('examIcd10Container');
  if (!container) return;
  if (examIcd10List.length === 0) {
    container.innerHTML = `<div class="exam-icd-empty">ไม่พบข้อมูล</div>`;
    return;
  }
  container.innerHTML = examIcd10List.map(item => `
    <div class="exam-icd-row-item">
      <div>
        <span class="exam-icd-code-badge">${item.code}</span>
        <span>${item.name}</span>
      </div>
      <button type="button" class="btn-exam-charge-del" onclick="removeExamIcd10Item(${item.id})" title="ลบรายการ">
        <i data-lucide="trash-2"></i>
      </button>
    </div>
  `).join('');
  if (window.lucide) window.lucide.createIcons();
}


const sampleIcd9Pool = [
  { code: "95.02", name: "Comprehensive eye examination (ตรวจตาโดยละเอียดด้วย Slit-lamp)" },
  { code: "95.11", name: "Fundus photography / OCT Macula Scan (ถ่ายภาพจอประสาทตา)" },
  { code: "89.11", name: "Tonometry (วัดความดันลูกตาแบบไร้สัมผัส)" }
];

function getActiveIcd9Pool() {
  if (typeof masterIcdData !== 'undefined') {
    const list = masterIcdData.filter(i => i.type === 'icd9' && i.status !== 'inactive');
    if (list.length > 0) {
      return list.map(i => ({ code: i.code, name: `${i.nameEn} (${i.nameTh})` }));
    }
  }
  return sampleIcd9Pool;
}

function addExamIcd9Item() {
  const pool = getActiveIcd9Pool();
  const next = pool[examIcd9List.length % pool.length];
  examIcd9List.push({ id: Date.now(), ...next });
  renderExamIcd9List();
  showToast('เพิ่มรหัสหัตถการ ICD-9 (จาก Master Data)', `เพิ่ม ${next.code} - ${next.name}`, 'info');
}

function reDiagExamIcd9() {
  const pool = getActiveIcd9Pool();
  examIcd9List = pool.slice(0, 2);
  renderExamIcd9List();
  showToast('ดึงรหัสหัตถการเดิม (Re-diag)', 'ดึงรายการหัตถการจักษุเรียบร้อยแล้ว', 'info');
}

function removeExamIcd9Item(id) {
  examIcd9List = examIcd9List.filter(i => i.id !== id);
  renderExamIcd9List();
}

function renderExamIcd9List() {
  const container = document.getElementById('examIcd9Container');
  if (!container) return;
  if (examIcd9List.length === 0) {
    container.innerHTML = `<div class="exam-icd-empty">ไม่พบข้อมูล</div>`;
    return;
  }
  container.innerHTML = examIcd9List.map(item => `
    <div class="exam-icd-row-item">
      <div>
        <span class="exam-icd-code-badge">${item.code}</span>
        <span>${item.name}</span>
      </div>
      <button type="button" class="btn-exam-charge-del" onclick="removeExamIcd9Item(${item.id})" title="ลบรายการ">
        <i data-lucide="trash-2"></i>
      </button>
    </div>
  `).join('');
  if (window.lucide) window.lucide.createIcons();
}


function autoFillExamRefraction() {
  const setVal = (id, v) => {
    const el = document.getElementById(id);
    if (el) el.value = v;
  };
  setVal('peLeftVa', '20/20');
  setVal('peLeftPh', '20/20');
  setVal('peLeftIop', '14 mmHg');
  setVal('peLeftEom', 'Full OU');
  setVal('peRightVa', '20/80');
  setVal('peRightPh', '20/50');
  setVal('peRightIop', '16 mmHg');
  setVal('peRightEom', 'Full OU');
  setVal('refLeft1', '-1.25 -0.50 x 180');
  setVal('refRight1', '-2.00 -0.75 x 175');
  setVal('refLeft2', 'VA 20/20');
  setVal('refRight2', 'VA 20/40');
  showToast('ดึงผลวัดสายตาสำเร็จ', 'อัปเดตค่า VA, IOP และ Refraction จากเครื่องวัดสายตาอัตโนมัติแล้ว', 'success');
}

function renderExamChargesTable() {
  const tbody = document.getElementById('examChargesTableBody');
  if (!tbody) return;

  tbody.innerHTML = examChargesList.map(row => `
    <tr>
      <td style="text-align: left; padding-left: 20px;">
        <span class="exam-charge-name-cell">
          <i data-lucide="chevron-down"></i>
          <span>${row.title}</span>
        </span>
      </td>
      <td style="text-align: center;">${row.amount.toLocaleString('th-TH')}</td>
      <td style="text-align: center;">${row.discount}</td>
      <td style="text-align: center;">${row.claimable}</td>
      <td style="text-align: center;">${row.nonClaimable}</td>
      <td style="text-align: center;">
        <button type="button" class="btn-exam-charge-del" onclick="removeExamChargeItem(${row.id})" title="ลบรายการค่ารักษา">
          <i data-lucide="trash-2"></i>
        </button>
      </td>
    </tr>
  `).join('');

  const totalEl = document.getElementById('examTotalAmount');
  if (totalEl) {
    const sum = examChargesList.reduce((acc, r) => acc + (Number(r.amount) || 0), 0);
    totalEl.textContent = sum.toLocaleString('th-TH');
  }

  const totalDiscountEl = document.getElementById('examTotalDiscount');
  if (totalDiscountEl) {
    const sumDiscount = examChargesList.reduce((acc, r) => acc + (Number(r.discount) || 0), 0);
    totalDiscountEl.textContent = sumDiscount.toLocaleString('th-TH');
  }

  if (window.lucide) window.lucide.createIcons();
}


function addExamChargeItem(title, amount) {
  examChargesList.unshift({
    id: Date.now(),
    title: title || "ค่าบริการทางการพยาบาล",
    amount: amount || 500,
    credit: 0,
    discount: 0,
    claimable: 0,
    nonClaimable: 0
  });
  renderExamChargesTable();
  showToast('เพิ่มรายการค่ารักษา', `เพิ่ม "${title}" จำนวน ${amount.toLocaleString('th-TH')} บาท เรียบร้อยแล้ว`, 'info');
}

function removeExamChargeItem(id) {
  examChargesList = examChargesList.filter(r => r.id !== id);
  renderExamChargesTable();
}

function saveDoctorExamination() {
  if (activeExamQueueItem) {
    activeExamQueueItem.status = 'completed';
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} น.`;
    const roomLabel = activeExamQueueItem.roomName && !activeExamQueueItem.roomName.includes('รอ')
      ? activeExamQueueItem.roomName
      : 'ห้องตรวจที่ 1';

    // 1. คืนสถานะห้องตรวจในระบบคิว (examRoomsData) และบันทึกลงประวัติคิว (queueHistoryData)
    if (typeof examRoomsData !== 'undefined') {
      const occupiedRoom = examRoomsData.find(
        r => r.patient && (r.patient.queueNo === activeExamQueueItem.queueNo || r.patient.patientName === activeExamQueueItem.patientName)
      );
      if (occupiedRoom) {
        occupiedRoom.status = 'empty';
        occupiedRoom.patient = null;
      }
    }
    if (typeof queueHistoryData !== 'undefined') {
      queueHistoryData.unshift({
        id: Date.now(),
        callDate: "7 ต.ค. 69",
        callTime: timeStr,
        queueNo: activeExamQueueItem.queueNo,
        patientName: activeExamQueueItem.patientName,
        phone: activeExamRecordPatient ? activeExamRecordPatient.phone : "089-245-6192",
        type: "นัดหมาย",
        apptDate: "7 ต.ค. 69",
        apptTime: activeExamQueueItem.apptTime || timeStr,
        room: roomLabel,
        status: "finished",
        statusLabel: "สิ้นสุดตรวจ"
      });
    }
    if (typeof renderQueueBoard === 'function') renderQueueBoard();

    // 2. บันทึกลงรายการประวัติการตรวจ (examHistoryRecordsData & examHistVisitsData)
    const ccInput = document.getElementById('examChiefComplaintText');
    const ccText = (ccInput && ccInput.value.trim())
      ? ccInput.value.trim().split('\n')[0]
      : (activeExamQueueItem.detail || 'ตรวจสุขภาพตาและวัดความดันลูกตา');
    const diagText = examIcd10List.length > 0
      ? examIcd10List.map(i => `${i.code} ${i.name}`).join(', ')
      : 'H04.12 Dry eye syndrome / H25.1 Senile cataract';

    if (typeof examHistoryRecordsData !== 'undefined') {
      examHistoryRecordsData.unshift({
        id: 'EXH-' + Date.now(),
        date: '12 พ.ย. 69',
        time: timeStr,
        dateGroup: 'today',
        queueNo: activeExamQueueItem.queueNo,
        patientName: activeExamQueueItem.patientName,
        hn: activeExamQueueItem.hn,
        citizenId: (activeExamRecordPatient && activeExamRecordPatient.fullCitizenId) || '1-1037-0045-8912',
        claim: (activeExamRecordPatient && activeExamRecordPatient.claim) || 'ประกันสังคม',
        chiefComplaint: ccText,
        diagnosis: diagText,
        doctor: activeExamQueueItem.doctor || 'นพ. เปรมชัย เสือขาว',
        room: roomLabel,
        status: 'completed',
        statusLabel: 'ตรวจเสร็จสิ้น'
      });
    }
    if (typeof examHistVisitsData !== 'undefined') {
      examHistVisitsData.unshift({
        date: '12 พ.ย. 69',
        time: timeStr,
        doctor: activeExamQueueItem.doctor || 'นพ. เปรมชัย เสือขาว',
        recDate: '12/11/2569',
        recTime: timeStr,
        note: `${ccText}\nการวินิจฉัย: ${diagText}`
      });
    }

    // 3. ตรวจสอบการตัดคอร์สอัตโนมัติ หากมีรายการ [ตัดสิทธิ์คอร์ส] ในตารางค่ารักษา
    if (typeof coursesData !== 'undefined') {
      const courseItems = examChargesList.filter(c => c.title && c.title.includes('[ตัดสิทธิ์คอร์ส]'));
      if (courseItems.length > 0) {
        const ptCourse = coursesData.find(
          c => (c.patientName === activeExamQueueItem.patientName || c.usedSessions < c.totalSessions)
        );
        if (ptCourse && ptCourse.usedSessions < ptCourse.totalSessions) {
          ptCourse.usedSessions += 1;
          ptCourse.lastActionDate = `12 พ.ย. 69 (${timeStr})`;
          ptCourse.isWaiting = false;
          if (ptCourse.usedSessions >= ptCourse.totalSessions) {
            ptCourse.status = 'finished';
            ptCourse.statusLabel = 'ครบตามจำนวน';
          }
          if (typeof deductionHistory !== 'undefined') {
            deductionHistory.unshift({
              id: Date.now() + 2,
              timestamp: `12 พ.ย. 69 | ${timeStr}`,
              courseCode: ptCourse.courseCode,
              hn: activeExamQueueItem.hn,
              patientName: activeExamQueueItem.patientName,
              packageName: ptCourse.packageName,
              sessionNumber: ptCourse.usedSessions,
              totalSessions: ptCourse.totalSessions,
              eyeLaterality: ptCourse.eyeLaterality || "OU",
              doctor: activeExamQueueItem.doctor || "นพ. เปรมชัย เสือขาว",
              nurse: "พว. สมศรี ส้มแดง",
              room: roomLabel,
              param: "บันทึกตัดสิทธิ์คอร์สจากห้องตรวจแพทย์",
              notes: courseItems.map(ci => ci.title).join(', ')
            });
          }
          if (typeof renderKPIs === 'function') renderKPIs();
          if (typeof renderTable === 'function') renderTable();
          if (typeof updateTotalBadges === 'function') updateTotalBadges();
        }
      }
    }

    // 4. ตัดสต็อกคลังยาอัตโนมัติ (pharmacyInventoryData) หากมีการสั่งยา (ค่ายา:)
    if (typeof pharmacyInventoryData !== 'undefined') {
      const medCharges = examChargesList.filter(c => c.title && c.title.startsWith('ค่ายา:'));
      medCharges.forEach(mc => {
        const med = pharmacyInventoryData.find(m => mc.title.toLowerCase().includes(m.tradeName.split(' ')[0].toLowerCase()));
        const qtyMatch = mc.title.match(/x\s*(\d+)/);
        const deductQty = qtyMatch ? parseInt(qtyMatch[1], 10) : 1;
        if (med && med.balanceQty > 0) {
          med.balanceQty = Math.max(0, med.balanceQty - deductQty);
          if (typeof pharmacyStockLogsData !== 'undefined') {
            pharmacyStockLogsData.unshift({
              id: Date.now() + Math.floor(Math.random() * 100),
              datetime: `12 พ.ย. 69 • ${timeStr}`,
              type: 'dispense',
              typeLabel: 'จ่ายยาห้องตรวจ (FEFO)',
              medCode: med.code,
              medName: med.tradeName,
              lotNo: `${med.lotNo} (Exp: ${med.expiryDate})`,
              fromTo: `ห้องตรวจแพทย์ ➔ ${activeExamQueueItem.patientName} (HN ${activeExamQueueItem.hn})`,
              changeText: `-${deductQty} ${med.baseUnit}`,
              isPositive: false,
              balanceText: `${med.balanceQty.toLocaleString('th-TH')} ${med.baseUnit}`,
              actor: activeExamQueueItem.doctor || 'นพ. เปรมชัย เสือขาว'
            });
          }
        }
      });
      if (typeof renderPharmacyInventory === 'function') renderPharmacyInventory();
    }

    // 5. สร้างใบแจ้งหนี้รอชำระเงินในระบบการเงิน (billingInvoicesData) ทันที
    if (typeof billingInvoicesData !== 'undefined') {
      const activeChargeRows = examChargesList.filter(r => r.amount > 0 || (r.title && r.title.includes('[ตัดสิทธิ์คอร์ส]')));
      const finalRows = activeChargeRows.length > 0 ? activeChargeRows : [
        { id: 1, title: "ค่าบริการทางการพยาบาลและตรวจจักษุ", amount: 500, discount: 0, claimable: 0, nonClaimable: 0 }
      ];
      const totalDue = finalRows.reduce((sum, r) => sum + (Number(r.amount) || 0) - (Number(r.discount) || 0), 0);
      const newBillId = 181160 + billingInvoicesData.length;
      const newBill = {
        id: newBillId,
        receiptNo: String(newBillId),
        hn: activeExamQueueItem.hn,
        patientName: activeExamQueueItem.patientName,
        gender: activeExamRecordPatient ? activeExamRecordPatient.gender : 'female',
        age: activeExamRecordPatient ? `${activeExamRecordPatient.age} 0 ด.` : '34 ปี 0 ด.',
        idCard: activeExamRecordPatient ? (activeExamRecordPatient.citizenId || '1-1037-00XX-XXXX') : 'xxx xxx',
        claim: activeExamRecordPatient ? (activeExamRecordPatient.claim || 'ประกันสังคม') : 'ประกันสังคม',
        phone: activeExamRecordPatient ? activeExamRecordPatient.phone.replace(/-/g, '') : '0892456192',
        date: "10/07/2569",
        time: `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`,
        status: "pending",
        billType: "insurance",
        amountDue: totalDue,
        amountReceived: totalDue,
        amountChange: 0,
        avatar: activeExamRecordPatient ? (activeExamRecordPatient.customAvatar || activeExamRecordPatient.avatar) : "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=150",
        treatmentItems: finalRows.map((r, idx) => ({
          id: idx + 1,
          title: r.title,
          amount: Number(r.amount) || 0,
          credit: 0,
          discount: Number(r.discount) || 0,
          claimable: Number(r.claimable) || 0,
          unclaimable: Number(r.nonClaimable) || 0,
          isExpanded: false,
          subItems: []
        }))
      };

      billingInvoicesData.unshift(newBill);
      selectedBillId = newBill.id;
      if (typeof renderBillingBoard === 'function') renderBillingBoard();
    }

    if (typeof renderHomeDashboard === 'function') renderHomeDashboard();
    playHospitalChime();
    showToast(
      'บันทึกผลตรวจและส่งห้องการเงินสำเร็จ',
      `ตรวจเสร็จสิ้น: คิว ${activeExamQueueItem.queueNo} (${activeExamQueueItem.patientName}) ส่งบิลไปยังระบบการเงินเรียบร้อยแล้ว`,
      'success'
    );
  }
  switchView('exam-room');
}

// ==========================================================
// EXAMINATION HISTORY LIST VIEW (รายการประวัติการตรวจ)
// ==========================================================

let examHistKpiFilter = 'all';
let examHistDateFilter = 'all';
let examHistDocFilter = 'all';
let examHistSearchQuery = '';

let examHistoryRecordsData = [
  {
    id: 'EXH-1010',
    date: '12 พ.ย. 69',
    time: '14:15 น.',
    dateGroup: 'today',
    queueNo: 'A002',
    patientName: 'น.ส. กุลธิดา ชุมยางสิม',
    hn: '500584/83',
    citizenId: '1-2345-67890-12-1',
    claim: 'บัตรทอง 30 บาท',
    chiefComplaint: 'ตามัวตาซ้ายประมาณ 2 สัปดาห์ มองเห็นไม่ชัดช่วงกลางคืน',
    diagnosis: 'H25.1 Senile nuclear cataract (ต้อกระจกตาซ้าย)',
    doctor: 'นพ. เปรมชัย เสือขาว',
    room: 'ห้องตรวจ 1 (จักษุ)',
    status: 'completed',
    statusLabel: 'ตรวจเสร็จสิ้น'
  },
  {
    id: 'EXH-1009',
    date: '12 พ.ย. 69',
    time: '13:40 น.',
    dateGroup: 'today',
    queueNo: 'A001',
    patientName: 'นาง สมศรี มีทรัพย์',
    hn: '500741/69',
    citizenId: '3-1012-00451-89-2',
    claim: 'ประกันสังคม',
    chiefComplaint: 'ปวดศีรษะข้างเดียว ตาพร่าสู้แสงไม่ได้ 3 วัน',
    diagnosis: 'G43.1 Migraine with aura / H53.1 Visual discomfort',
    doctor: 'นพ. เปรมชัย เสือขาว',
    room: 'ห้องตรวจ 1 (จักษุ)',
    status: 'followup',
    statusLabel: 'นัดตรวจติดตามผล'
  },
  {
    id: 'EXH-1008',
    date: '12 พ.ย. 69',
    time: '11:20 น.',
    dateGroup: 'today',
    queueNo: 'B001',
    patientName: 'นาย วิชัย ใจสว่าง',
    hn: '500571/69',
    citizenId: '1-1004-00892-44-5',
    claim: 'เบิกจ่ายตรง (ข้าราชการ)',
    chiefComplaint: 'ความดันลูกตาสูง ตาซ้ายมัวลงอย่างรวดเร็ว มีภาวะโรคซ้อน',
    diagnosis: 'H40.1 Primary open-angle glaucoma (ต้อหินมุมเปิด)',
    doctor: 'พญ. วรัญญา รักษาดี',
    room: 'ห้องตรวจ 2 (จักษุเฉพาะทาง)',
    status: 'consult',
    statusLabel: 'ส่งต่อ / Consult'
  },
  {
    id: 'EXH-1007',
    date: '12 พ.ย. 69',
    time: '10:35 น.',
    dateGroup: 'today',
    queueNo: 'A005',
    patientName: 'นาย ประเสริฐ ยั่งยืน',
    hn: '500612/69',
    citizenId: '3-4001-00239-11-8',
    claim: 'ชำระเงินเอง',
    chiefComplaint: 'ตาแห้ง แสบตาเคืองตาเวลาใช้คอมพิวเตอร์นานๆ',
    diagnosis: 'H04.12 Dry eye syndrome (ภาวะตาแห้งเรื้อรัง)',
    doctor: 'นพ. สมชาย ใจดี',
    room: 'ห้องตรวจ 1 (จักษุ)',
    status: 'completed',
    statusLabel: 'ตรวจเสร็จสิ้น'
  },
  {
    id: 'EXH-1006',
    date: '11 พ.ย. 69',
    time: '15:50 น.',
    dateGroup: 'week',
    queueNo: 'A014',
    patientName: 'น.ส. พิมพ์ชนก วงษ์สุวรรณ',
    hn: '500802/69',
    citizenId: '1-1020-01944-55-3',
    claim: 'ประกันสังคม',
    chiefComplaint: 'เห็นจุดดำลอยไปมาในตาขวา มีแสงแฟลชเป็นบางครั้ง',
    diagnosis: 'H43.81 Vitreous degeneration (วุ้นในตาเสื่อม)',
    doctor: 'พญ. วรัญญา รักษาดี',
    room: 'ห้องตรวจ 2 (จักษุเฉพาะทาง)',
    status: 'followup',
    statusLabel: 'นัดตรวจติดตามผล'
  },
  {
    id: 'EXH-1005',
    date: '11 พ.ย. 69',
    time: '14:10 น.',
    dateGroup: 'week',
    queueNo: 'B006',
    patientName: 'นาย ธนากร ศรีสวัสดิ์',
    hn: '500489/68',
    citizenId: '1-5099-00321-76-0',
    claim: 'บัตรทอง 30 บาท',
    chiefComplaint: 'นอนไม่หลับต่อเนื่อง 3 สัปดาห์ เครียดวิตกกังวลเรื่องงาน',
    diagnosis: 'F41.1 Generalized anxiety disorder / G47.0 Insomnia',
    doctor: 'นพ. กิตติพงษ์ วงศ์สว่าง',
    room: 'ห้องตรวจ 3 (จิตเวช)',
    status: 'completed',
    statusLabel: 'ตรวจเสร็จสิ้น'
  },
  {
    id: 'EXH-1004',
    date: '10 พ.ย. 69',
    time: '11:05 น.',
    dateGroup: 'week',
    queueNo: 'A008',
    patientName: 'นาง มาลี แสนสุข',
    hn: '500319/67',
    citizenId: '3-1005-00912-33-1',
    claim: 'เบิกจ่ายตรง (ข้าราชการ)',
    chiefComplaint: 'ตรวจจอประสาทตาประจำปี ผู้ป่วยเบาหวานชนิดที่ 2',
    diagnosis: 'E11.31 Type 2 DM with mild NPDR (เบาหวานขึ้นจอตา)',
    doctor: 'นพ. เปรมชัย เสือขาว',
    room: 'ห้องตรวจ 1 (จักษุ)',
    status: 'consult',
    statusLabel: 'ส่งต่อ / Consult'
  },
  {
    id: 'EXH-1003',
    date: '08 พ.ย. 69',
    time: '09:45 น.',
    dateGroup: 'month',
    queueNo: 'A003',
    patientName: 'นาย อนุชา พงษ์พานิช',
    hn: '500911/69',
    citizenId: '1-1015-00771-22-9',
    claim: 'ชำระเงินเอง',
    chiefComplaint: 'คันตา ตาแดงมีขี้ตาใสๆ ทั้งสองข้างหลังสัมผัสฝุ่น',
    diagnosis: 'H10.1 Acute atopic conjunctivitis (เยื่อบุตาอักเสบภูมิแพ้)',
    doctor: 'นพ. สมชาย ใจดี',
    room: 'ห้องตรวจ 1 (จักษุ)',
    status: 'completed',
    statusLabel: 'ตรวจเสร็จสิ้น'
  }
];

function filterExamHistoryByKpi(kpiType) {
  examHistKpiFilter = kpiType || 'all';
  const cards = {
    all: 'examHistKpiAll',
    completed: 'examHistKpiCompleted',
    consult: 'examHistKpiConsult',
    followup: 'examHistKpiFollowup'
  };
  Object.keys(cards).forEach(k => {
    const el = document.getElementById(cards[k]);
    if (el) el.classList.toggle('active-card', k === examHistKpiFilter);
  });
  renderExamHistoryList();
}

function handleExamHistListFilterChange() {
  const dateSel = document.getElementById('examHistListDateFilter');
  const docSel = document.getElementById('examHistListDoctorFilter');
  examHistDateFilter = dateSel ? dateSel.value : 'all';
  examHistDocFilter = docSel ? docSel.value : 'all';
  renderExamHistoryList();
}

function handleExamHistListSearch(val) {
  examHistSearchQuery = (val || '').trim().toLowerCase();
  const clearBtn = document.getElementById('examHistListClearBtn');
  if (clearBtn) clearBtn.style.display = examHistSearchQuery ? 'flex' : 'none';
  renderExamHistoryList();
}

function clearExamHistListSearch() {
  const inp = document.getElementById('examHistListSearchInput');
  if (inp) inp.value = '';
  examHistSearchQuery = '';
  const clearBtn = document.getElementById('examHistListClearBtn');
  if (clearBtn) clearBtn.style.display = 'none';
  renderExamHistoryList();
}

function renderExamHistoryList() {
  const tbody = document.getElementById('examHistoryListTableBody');
  const emptyEl = document.getElementById('examHistoryListEmptyState');
  if (!tbody) return;

  // Update KPI counts
  const totalCount = examHistoryRecordsData.length;
  const completedCount = examHistoryRecordsData.filter(r => r.status === 'completed').length;
  const consultCount = examHistoryRecordsData.filter(r => r.status === 'consult').length;
  const followupCount = examHistoryRecordsData.filter(r => r.status === 'followup').length;

  const setNum = (id, n) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = `${n} <span class="unit">รายการ</span>`;
  };
  setNum('examHistKpiAllVal', totalCount);
  setNum('examHistKpiCompletedVal', completedCount);
  setNum('examHistKpiConsultVal', consultCount);
  setNum('examHistKpiFollowupVal', followupCount);

  const filtered = examHistoryRecordsData.filter(item => {
    if (examHistKpiFilter !== 'all' && item.status !== examHistKpiFilter) return false;
    if (examHistDateFilter === 'today' && item.dateGroup !== 'today') return false;
    if (examHistDateFilter === 'week' && item.dateGroup !== 'today' && item.dateGroup !== 'week') return false;
    if (examHistDocFilter !== 'all' && item.doctor !== examHistDocFilter) return false;
    if (examHistSearchQuery) {
      const hay = `${item.patientName} ${item.hn} ${item.queueNo} ${item.diagnosis} ${item.chiefComplaint} ${item.doctor}`.toLowerCase();
      if (!hay.includes(examHistSearchQuery)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'flex';
    return;
  }
  if (emptyEl) emptyEl.style.display = 'none';

  tbody.innerHTML = filtered.map(item => {
    let badgeHtml = '';
    if (item.status === 'completed') {
      badgeHtml = `<span style="display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:999px;font-size:12px;font-weight:700;background:#ecfdf5;color:#059669;border:1px solid #a7f3d0;"><i data-lucide="check-circle-2" style="width:13px;height:13px;"></i> ${item.statusLabel}</span>`;
    } else if (item.status === 'consult') {
      badgeHtml = `<span style="display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:999px;font-size:12px;font-weight:700;background:#eff6ff;color:#2563eb;border:1px solid #bfdbfe;"><i data-lucide="send" style="width:13px;height:13px;"></i> ${item.statusLabel}</span>`;
    } else {
      badgeHtml = `<span style="display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:999px;font-size:12px;font-weight:700;background:#fffbeb;color:#d97706;border:1px solid #fde68a;"><i data-lucide="calendar-clock" style="width:13px;height:13px;"></i> ${item.statusLabel}</span>`;
    }

    return `
      <tr>
        <td style="text-align: center; font-weight: 600; color: #334155;">
          <div>${item.date}</div>
          <div style="font-size: 12px; color: #64748b; font-weight: 500;">${item.time}</div>
        </td>
        <td style="text-align: center;">
          <span style="display:inline-block; padding:3px 10px; border-radius:6px; background:#f0f9ff; color:#0284c7; font-weight:700; font-size:13px; border:1px solid #bae6fd;">${item.queueNo}</span>
        </td>
        <td>
          <div style="font-weight: 700; color: #0f172a; font-size: 14px;">${item.patientName}</div>
          <div style="font-size: 12px; color: #64748b;">HN: <strong style="color:#0284c7;">${item.hn}</strong> • สิทธิ: ${item.claim}</div>
        </td>
        <td>
          <div style="font-weight: 700; color: #1e293b; font-size: 13px;">${item.diagnosis}</div>
          <div style="font-size: 12px; color: #64748b; margin-top: 2px;">CC: ${item.chiefComplaint}</div>
        </td>
        <td>
          <div style="font-weight: 600; color: #0f172a; font-size: 13px;">${item.doctor}</div>
          <div style="font-size: 11.5px; color: #64748b;">${item.room}</div>
        </td>
        <td style="text-align: center;">${badgeHtml}</td>
        <td style="text-align: center;">
          <button type="button" class="btn-exam-top-outline" style="height:32px; padding:0 12px; font-size:12.5px; display:inline-flex; align-items:center; gap:5px;" onclick="openExamHistoryRecordModal('${item.id}')">
            <i data-lucide="file-search" style="width:14px;height:14px;"></i>
            <span>ดูผลตรวจ</span>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function openExamHistoryRecordModal(histId) {
  const rec = examHistoryRecordsData.find(r => r.id === histId);
  const modal = document.getElementById('modalExamHistory');
  if (!modal) return;

  if (rec) {
    const setEl = (id, txt) => {
      const el = document.getElementById(id);
      if (el) el.textContent = txt;
    };
    setEl('histPtName', rec.patientName);
    setEl('histPtHn', rec.hn);
    setEl('histPtCitizen', rec.citizenId);
    setEl('histPtClaim', rec.claim);
    setEl('histPtDoctor', rec.doctor.replace(/^(นพ\.|พญ\.)\s*/, ''));
    setEl('histPtRecDate', rec.date);
    setEl('histPtRecTime', rec.time);
  }

  selectExamHistoryDate(0);
  modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

// ==========================================================
// HOME DASHBOARD WIREFRAME & METRICS SYSTEM (ระบบหน้าหลักคลินิก)
// ==========================================================

let currentHomePeriod = 'day'; // 'day' | 'month' | 'year' | 'custom'
let selectedHomeDate = '2026-10-29';
let selectedHomeMonth = '2026-10';
let selectedHomeYear = '2569';
let selectedHomeRangeStart = '2026-10-01';
let selectedHomeRangeEnd = '2026-10-29';

function formatThaiDateDisplay(dateStr, withPrefix = true) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length < 3) return dateStr;
  const y = parseInt(parts[0], 10) + 543;
  const m = parseInt(parts[1], 10) - 1;
  const d = parseInt(parts[2], 10);
  const thaiMonthsShort = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
  const isToday = (dateStr === '2026-10-29');
  return `${withPrefix && isToday ? 'วันนี้ ' : ''}${d} ${thaiMonthsShort[m]} ${y}`;
}

function formatThaiMonthDisplay(monthStr) {
  if (!monthStr) return 'ตุลาคม 2569';
  const parts = monthStr.split('-');
  const y = parseInt(parts[0], 10) + 543;
  const m = parseInt(parts[1], 10) - 1;
  const thaiMonthsFull = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
  return `${thaiMonthsFull[m]} ${y}`;
}

function setHomeDashboardPeriod(periodKey) {
  currentHomePeriod = periodKey;

  const btnDay = document.getElementById('btnFilterHomeDay');
  const btnMonth = document.getElementById('btnFilterHomeMonth');
  const btnYear = document.getElementById('btnFilterHomeYear');
  const btnCustom = document.getElementById('btnFilterHomeCustom');

  if (btnDay) btnDay.classList.toggle('active', periodKey === 'day');
  if (btnMonth) btnMonth.classList.toggle('active', periodKey === 'month');
  if (btnYear) btnYear.classList.toggle('active', periodKey === 'year');
  if (btnCustom) btnCustom.classList.toggle('active', periodKey === 'custom');

  const pDay = document.getElementById('homeDayPickerWrap');
  const pMonth = document.getElementById('homeMonthPickerWrap');
  const pYear = document.getElementById('homeYearPickerWrap');
  const pCustom = document.getElementById('homeCustomPickerWrap');

  if (pDay) pDay.style.display = periodKey === 'day' ? 'flex' : 'none';
  if (pMonth) pMonth.style.display = periodKey === 'month' ? 'flex' : 'none';
  if (pYear) pYear.style.display = periodKey === 'year' ? 'flex' : 'none';
  if (pCustom) pCustom.style.display = periodKey === 'custom' ? 'flex' : 'none';

  renderHomeDashboard();
}

function handleHomeDateChange(val) {
  if (!val) return;
  selectedHomeDate = val;
  renderHomeDashboard();
}

function navigateHomeDay(delta) {
  const cur = new Date(selectedHomeDate);
  cur.setDate(cur.getDate() + delta);
  selectedHomeDate = cur.toISOString().split('T')[0];
  const dateInput = document.getElementById('homeDateInput');
  if (dateInput) dateInput.value = selectedHomeDate;
  renderHomeDashboard();
}

function setHomeToday() {
  selectedHomeDate = '2026-10-29';
  const dateInput = document.getElementById('homeDateInput');
  if (dateInput) dateInput.value = selectedHomeDate;
  renderHomeDashboard();
}

function handleHomeMonthChange(val) {
  if (!val) return;
  selectedHomeMonth = val;
  renderHomeDashboard();
}

function navigateHomeMonth(delta) {
  const sel = document.getElementById('homeMonthSelect');
  if (!sel) return;
  let newIdx = sel.selectedIndex - delta;
  if (newIdx < 0) newIdx = 0;
  if (newIdx >= sel.options.length) newIdx = sel.options.length - 1;
  sel.selectedIndex = newIdx;
  selectedHomeMonth = sel.value;
  renderHomeDashboard();
}

function handleHomeYearChange(val) {
  if (!val) return;
  selectedHomeYear = val;
  renderHomeDashboard();
}

function handleHomeCustomRangeChange() {
  const startEl = document.getElementById('homeRangeStart');
  const endEl = document.getElementById('homeRangeEnd');
  if (startEl && startEl.value) selectedHomeRangeStart = startEl.value;
  if (endEl && endEl.value) selectedHomeRangeEnd = endEl.value;
  renderHomeDashboard();
}

function getHomeDashboardData() {
  if (currentHomePeriod === 'day') {
    const isBaseWireframeDay = (selectedHomeDate === '2026-10-29');
    const thaiDateTxt = formatThaiDateDisplay(selectedHomeDate, true);

    if (isBaseWireframeDay) {
      // Dynamic deltas from live clinic operations
      const extraAppt = Math.max(0, (typeof appointmentsData !== 'undefined' ? appointmentsData.length : 12) - 12);
      const attendedAppt = typeof appointmentsData !== 'undefined' ? appointmentsData.filter(a => a.status === 'attended').length : 3;
      const extraAttended = Math.max(0, attendedAppt - 3);

      const liveWaitCount = typeof waitingQueueData !== 'undefined' ? waitingQueueData.length : 10;
      const liveRooms = (typeof examRoomsData !== 'undefined' && examRoomsData.length >= 3)
        ? examRoomsData.slice(0, 3).map((r, idx) => ({
            name: `ห้องตรวจที่ ${idx + 1}`,
            status: r.status === 'occupied' ? 'busy' : 'available',
            label: r.status === 'occupied' ? `กำลังตรวจ (${r.patient?.queueNo || ''})` : 'ว่าง'
          }))
        : [
            { name: "ห้องตรวจที่ 1", status: "available", label: "ว่าง" },
            { name: "ห้องตรวจที่ 2", status: "busy", label: "กำลังตรวจ" },
            { name: "ห้องตรวจที่ 3", status: "available", label: "ว่าง" }
          ];

      // Live revenue from billingInvoicesData (base paid = 34,800 from 8 receipts; base pending = 3,800 from 4 items)
      let livePaidSum = 34800;
      let livePaidCnt = 8;
      let livePendingSum = 0;
      let livePendingCnt = 0;
      if (typeof billingInvoicesData !== 'undefined') {
        const initialPaidIds = ['INV-691025-008', 'INV-691025-007', 'INV-691025-006', 'INV-691025-005'];
        billingInvoicesData.forEach(inv => {
          const net = inv.items.reduce((s, it) => s + (it.qty * it.price) - it.discount - it.claim, 0);
          if (inv.status === 'paid' && !initialPaidIds.includes(inv.id)) {
            livePaidSum += net;
            livePaidCnt += 1;
          } else if (inv.status === 'pending') {
            livePendingSum += net;
            livePendingCnt += 1;
          }
        });
      } else {
        livePendingSum = 3800;
        livePendingCnt = 4;
      }
      const liveTotalRev = livePaidSum + livePendingSum;

      return {
        periodBadge: thaiDateTxt,
        appt: {
          total: 50 + extraAppt,
          queued: 24 + extraAttended,
          rescheduled: 24,
          cancelled: 24
        },
        queue: {
          waitCount: liveWaitCount,
          rooms: liveRooms
        },
        chart: {
          subtitle: `สถิติจำนวนผู้ป่วยและผู้รับบริการแยกรายชั่วโมง (${thaiDateTxt})`,
          totalVisitors: `${179 + extraAttended} คน`,
          peakTime: "14:00 - 15:00 น.",
          maxVal: 35,
          yAxis: [30, 20, 10, 0],
          bars: [
            { label: "08:00", val: 12, appt: 8, walkin: 4 },
            { label: "09:00", val: 18, appt: 12, walkin: 6 },
            { label: "10:00", val: 24 + extraAttended, appt: 16 + extraAttended, walkin: 8 },
            { label: "11:00", val: 16, appt: 10, walkin: 6 },
            { label: "12:00", val: 8, appt: 4, walkin: 4 },
            { label: "13:00", val: 20, appt: 14, walkin: 6 },
            { label: "14:00", val: 28, appt: 19, walkin: 9, isPeak: true },
            { label: "15:00", val: 22, appt: 15, walkin: 7 },
            { label: "16:00", val: 15, appt: 9, walkin: 6 },
            { label: "17:00", val: 11, appt: 7, walkin: 4 },
            { label: "18:00", val: 5, appt: 3, walkin: 2 }
          ]
        },
        revenue: {
          subtitle: `สรุปข้อมูลจริงประจำวัน ${thaiDateTxt} (Billing Summary)`,
          total: `฿${liveTotalRev.toLocaleString()}`,
          trend: "▲ +12.5% เทียบเมื่อวาน",
          paidAmount: `฿${livePaidSum.toLocaleString()}`,
          paidCount: `${livePaidCnt} ใบเสร็จ`,
          pendingAmount: `฿${livePendingSum.toLocaleString()}`,
          pendingCount: `${livePendingCnt} รายการ`,
          categories: [
            { name: "หัตถการและเลเซอร์จักษุ", amount: `฿${Math.round(liveTotalRev * 0.48).toLocaleString()}`, percent: 48, color: "#0D3B5E" },
            { name: "ค่ายาและเวชภัณฑ์หยอดตา", amount: `฿${Math.round(liveTotalRev * 0.27).toLocaleString()}`, percent: 27, color: "#0284C7" },
            { name: "คอร์สรักษาตาแห้ง (IPL)", amount: `฿${Math.round(liveTotalRev * 0.15).toLocaleString()}`, percent: 15, color: "#0E7490" },
            { name: "ตรวจวินิจฉัยและบริการแพทย์", amount: `฿${Math.round(liveTotalRev * 0.10).toLocaleString()}`, percent: 10, color: "#10B981" }
          ],
          channels: [
            { name: "QR PromptPay (โอนชำระทันที)", percent: "55%", amount: `฿${Math.round(liveTotalRev * 0.55).toLocaleString()}` },
            { name: "เงินสด (Cash)", percent: "25%", amount: `฿${Math.round(liveTotalRev * 0.25).toLocaleString()}` },
            { name: "บัตรเครดิต / เดบิต (EDC)", percent: "12%", amount: `฿${Math.round(liveTotalRev * 0.12).toLocaleString()}` },
            { name: "สิทธิประกันสังคม / เบิกจ่าย", percent: "8%", amount: `฿${Math.round(liveTotalRev * 0.08).toLocaleString()}` }
          ]
        }
      };
    }

    const dObj = new Date(selectedHomeDate);
    const daySeed = (dObj.getDate() * 17 + dObj.getMonth() * 31) % 100;
    const totalAppt = 42 + (daySeed % 18);
    const queued = Math.round(totalAppt * 0.48);
    const rescheduled = Math.round(totalAppt * 0.36);
    const cancelled = totalAppt - queued - rescheduled;
    const waitCount = 7 + (daySeed % 7);
    const totalVis = 140 + (daySeed % 65);
    const revTotalNum = 32000 + (daySeed * 220);
    const paidNum = Math.round(revTotalNum * 0.9);
    const pendingNum = revTotalNum - paidNum;

    const hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
    const peakIdx = (daySeed % 2 === 0) ? 6 : 2;
    const bars = hours.map((h, i) => {
      let v = 6 + ((daySeed + i * 5) % 16);
      if (i === peakIdx) v = 25 + (daySeed % 7);
      const apptPart = Math.round(v * 0.65);
      const walkinPart = v - apptPart;
      return {
        label: h,
        val: v,
        appt: apptPart,
        walkin: walkinPart,
        isPeak: (i === peakIdx)
      };
    });

    return {
      periodBadge: thaiDateTxt,
      appt: { total: totalAppt, queued, rescheduled, cancelled },
      queue: {
        waitCount: waitCount,
        rooms: [
          { name: "ห้องตรวจที่ 1", status: (daySeed % 2 === 0 ? "busy" : "available"), label: (daySeed % 2 === 0 ? "กำลังตรวจ" : "ว่าง") },
          { name: "ห้องตรวจที่ 2", status: (daySeed % 3 === 0 ? "available" : "busy"), label: (daySeed % 3 === 0 ? "ว่าง" : "กำลังตรวจ") },
          { name: "ห้องตรวจที่ 3", status: "available", label: "ว่าง" }
        ]
      },
      chart: {
        subtitle: `สถิติจำนวนผู้ป่วยและผู้รับบริการแยกรายชั่วโมง (${thaiDateTxt})`,
        totalVisitors: `${totalVis} คน`,
        peakTime: `${hours[peakIdx]} - ${hours[peakIdx].slice(0, 2)}:59 น.`,
        maxVal: 35,
        yAxis: [30, 20, 10, 0],
        bars: bars
      },
      revenue: {
        subtitle: `สรุปข้อมูลจริงประจำวัน ${thaiDateTxt} (Billing Summary)`,
        total: `฿${revTotalNum.toLocaleString()}`,
        trend: `▲ +${(8 + (daySeed % 12)).toFixed(1)}% เทียบเฉลี่ย`,
        paidAmount: `฿${paidNum.toLocaleString()}`,
        paidCount: `${7 + (daySeed % 5)} ใบเสร็จ`,
        pendingAmount: `฿${pendingNum.toLocaleString()}`,
        pendingCount: `${2 + (daySeed % 4)} รายการ`,
        categories: [
          { name: "หัตถการและเลเซอร์จักษุ", amount: `฿${Math.round(revTotalNum * 0.48).toLocaleString()}`, percent: 48, color: "#0D3B5E" },
          { name: "ค่ายาและเวชภัณฑ์หยอดตา", amount: `฿${Math.round(revTotalNum * 0.27).toLocaleString()}`, percent: 27, color: "#0284C7" },
          { name: "คอร์สรักษาตาแห้ง (IPL)", amount: `฿${Math.round(revTotalNum * 0.15).toLocaleString()}`, percent: 15, color: "#0E7490" },
          { name: "ตรวจวินิจฉัยและบริการแพทย์", amount: `฿${Math.round(revTotalNum * 0.10).toLocaleString()}`, percent: 10, color: "#10B981" }
        ],
        channels: [
          { name: "QR PromptPay (โอนชำระทันที)", percent: "55%", amount: `฿${Math.round(revTotalNum * 0.55).toLocaleString()}` },
          { name: "เงินสด (Cash)", percent: "25%", amount: `฿${Math.round(revTotalNum * 0.25).toLocaleString()}` },
          { name: "บัตรเครดิต / เดบิต (EDC)", percent: "12%", amount: `฿${Math.round(revTotalNum * 0.12).toLocaleString()}` },
          { name: "สิทธิประกันสังคม / เบิกจ่าย", percent: "8%", amount: `฿${Math.round(revTotalNum * 0.08).toLocaleString()}` }
        ]
      }
    };
  }

  if (currentHomePeriod === 'month') {
    const thaiMonthTxt = formatThaiMonthDisplay(selectedHomeMonth);
    const mSeed = selectedHomeMonth.split('-')[1] ? parseInt(selectedHomeMonth.split('-')[1], 10) : 10;
    const totalAppt = 450 + (mSeed * 12);
    const queued = Math.round(totalAppt * 0.65);
    const rescheduled = Math.round(totalAppt * 0.23);
    const cancelled = totalAppt - queued - rescheduled;
    const totalVis = 760 + (mSeed * 24);
    const revTotalNum = 420000 + (mSeed * 15000);
    const paidNum = Math.round(revTotalNum * 0.93);
    const pendingNum = revTotalNum - paidNum;

    const shortM = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."][mSeed - 1] || "ต.ค.";
    const bars = [
      { label: `1-5 ${shortM}`, val: 94 + (mSeed % 8), appt: 65, walkin: 29 },
      { label: `6-10 ${shortM}`, val: 142 + (mSeed % 12), appt: 98, walkin: 44 },
      { label: `11-15 ${shortM}`, val: 128 + (mSeed % 9), appt: 88, walkin: 40 },
      { label: `16-20 ${shortM}`, val: 165 + (mSeed % 15), appt: 115, walkin: 50, isPeak: true },
      { label: `21-25 ${shortM}`, val: 156 + (mSeed % 11), appt: 108, walkin: 48 },
      { label: `26-สิ้นเดือน`, val: 138 + (mSeed % 7), appt: 96, walkin: 42 }
    ];

    return {
      periodBadge: `ประจำเดือน ${thaiMonthTxt}`,
      appt: { total: totalAppt, queued, rescheduled, cancelled },
      queue: {
        waitCount: 130 + (mSeed * 3),
        rooms: [
          { name: "ห้องตรวจที่ 1", status: "busy", label: "อัตราตรวจ 92%" },
          { name: "ห้องตรวจที่ 2", status: "busy", label: "อัตราตรวจ 88%" },
          { name: "ห้องตรวจที่ 3", status: "available", label: "อัตราตรวจ 79%" }
        ]
      },
      chart: {
        subtitle: `สถิติจำนวนผู้ป่วยและผู้รับบริการแยกตามช่วงสัปดาห์ในเดือน ${thaiMonthTxt}`,
        totalVisitors: `${totalVis.toLocaleString()} คน`,
        peakTime: `ช่วงวันที่ 16-20 ${shortM}`,
        maxVal: 200,
        yAxis: [180, 120, 60, 0],
        bars: bars
      },
      revenue: {
        subtitle: `สรุปข้อมูลจริงประจำเดือน ${thaiMonthTxt} (Billing Summary)`,
        total: `฿${revTotalNum.toLocaleString()}`,
        trend: `▲ +${(14 + (mSeed % 7)).toFixed(1)}% เทียบเดือนก่อนหน้า`,
        paidAmount: `฿${paidNum.toLocaleString()}`,
        paidCount: `${150 + mSeed * 2} ใบเสร็จ`,
        pendingAmount: `฿${pendingNum.toLocaleString()}`,
        pendingCount: `${10 + (mSeed % 6)} รายการ`,
        categories: [
          { name: "หัตถการและเลเซอร์จักษุ", amount: `฿${Math.round(revTotalNum * 0.48).toLocaleString()}`, percent: 48, color: "#0D3B5E" },
          { name: "ค่ายาและเวชภัณฑ์หยอดตา", amount: `฿${Math.round(revTotalNum * 0.26).toLocaleString()}`, percent: 26, color: "#0284C7" },
          { name: "คอร์สรักษาตาแห้งและกล้ามเนื้อตา", amount: `฿${Math.round(revTotalNum * 0.16).toLocaleString()}`, percent: 16, color: "#0E7490" },
          { name: "ตรวจวินิจฉัยและบริการแพทย์", amount: `฿${Math.round(revTotalNum * 0.10).toLocaleString()}`, percent: 10, color: "#10B981" }
        ],
        channels: [
          { name: "QR PromptPay (โอนชำระทันที)", percent: "58%", amount: `฿${Math.round(revTotalNum * 0.58).toLocaleString()}` },
          { name: "เงินสด (Cash)", percent: "20%", amount: `฿${Math.round(revTotalNum * 0.20).toLocaleString()}` },
          { name: "บัตรเครดิต / เดบิต (EDC)", percent: "14%", amount: `฿${Math.round(revTotalNum * 0.14).toLocaleString()}` },
          { name: "สิทธิประกันสังคม / เบิกจ่าย", percent: "8%", amount: `฿${Math.round(revTotalNum * 0.08).toLocaleString()}` }
        ]
      }
    };
  }

  if (currentHomePeriod === 'year') {
    const yr = parseInt(selectedHomeYear, 10) || 2569;
    const yrFactor = yr === 2569 ? 1.0 : (yr === 2568 ? 0.88 : (yr === 2567 ? 0.76 : 0.68));
    const totalAppt = Math.round(5620 * yrFactor);
    const queued = Math.round(totalAppt * 0.73);
    const rescheduled = Math.round(totalAppt * 0.18);
    const cancelled = totalAppt - queued - rescheduled;
    const totalVis = Math.round(10085 * yrFactor);
    const revTotalNum = Math.round(5840000 * yrFactor);
    const paidNum = Math.round(revTotalNum * 0.95);
    const pendingNum = revTotalNum - paidNum;

    const baseBars = [680, 720, 810, 650, 790, 840, 910, 960, 920, 985, 890, 930];
    const monthsTh = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
    const bars = baseBars.map((v, i) => {
      const val = Math.round(v * yrFactor);
      return {
        label: monthsTh[i],
        val: val,
        appt: Math.round(val * 0.72),
        walkin: Math.round(val * 0.28),
        isPeak: (i === 9)
      };
    });

    return {
      periodBadge: `ประจำปีงบประมาณ ${yr}`,
      appt: { total: totalAppt, queued, rescheduled, cancelled },
      queue: {
        waitCount: Math.round(1840 * yrFactor),
        rooms: [
          { name: "ห้องตรวจที่ 1", status: "busy", label: `รวม ${Math.round(3240 * yrFactor).toLocaleString()} ราย` },
          { name: "ห้องตรวจที่ 2", status: "busy", label: `รวม ${Math.round(2980 * yrFactor).toLocaleString()} ราย` },
          { name: "ห้องตรวจที่ 3", status: "available", label: `รวม ${Math.round(2640 * yrFactor).toLocaleString()} ราย` }
        ]
      },
      chart: {
        subtitle: `สถิติจำนวนผู้ป่วยและผู้รับบริการแยกรายเดือนตลอดปี ${yr} (คน)`,
        totalVisitors: `${totalVis.toLocaleString()} คน`,
        peakTime: `เดือนตุลาคม ${yr} (${Math.round(985 * yrFactor).toLocaleString()} คน)`,
        maxVal: Math.round(1200 * yrFactor),
        yAxis: [Math.round(1000 * yrFactor), Math.round(750 * yrFactor), Math.round(500 * yrFactor), 0],
        bars: bars
      },
      revenue: {
        subtitle: `สรุปข้อมูลจริงประจำปี ${yr} (Billing Summary)`,
        total: `฿${revTotalNum.toLocaleString()}`,
        trend: `▲ +24.6% เทียบปีก่อนหน้า`,
        paidAmount: `฿${paidNum.toLocaleString()}`,
        paidCount: `${Math.round(2140 * yrFactor).toLocaleString()} ใบเสร็จ`,
        pendingAmount: `฿${pendingNum.toLocaleString()}`,
        pendingCount: `${Math.round(82 * yrFactor)} รายการ`,
        categories: [
          { name: "หัตถการและเลเซอร์จักษุ", amount: `฿${Math.round(revTotalNum * 0.48).toLocaleString()}`, percent: 48, color: "#0D3B5E" },
          { name: "ค่ายาและเวชภัณฑ์หยอดตา", amount: `฿${Math.round(revTotalNum * 0.26).toLocaleString()}`, percent: 26, color: "#0284C7" },
          { name: "คอร์สรักษาตาแห้งและกล้ามเนื้อตา", amount: `฿${Math.round(revTotalNum * 0.16).toLocaleString()}`, percent: 16, color: "#0E7490" },
          { name: "ตรวจวินิจฉัยและบริการแพทย์", amount: `฿${Math.round(revTotalNum * 0.10).toLocaleString()}`, percent: 10, color: "#10B981" }
        ],
        channels: [
          { name: "QR PromptPay (โอนชำระทันที)", percent: "60%", amount: `฿${Math.round(revTotalNum * 0.60).toLocaleString()}` },
          { name: "เงินสด (Cash)", percent: "18%", amount: `฿${Math.round(revTotalNum * 0.18).toLocaleString()}` },
          { name: "บัตรเครดิต / เดบิต (EDC)", percent: "14%", amount: `฿${Math.round(revTotalNum * 0.14).toLocaleString()}` },
          { name: "สิทธิประกันสังคม / เบิกจ่าย", percent: "8%", amount: `฿${Math.round(revTotalNum * 0.08).toLocaleString()}` }
        ]
      }
    };
  }

  // Custom range
  const sDate = new Date(selectedHomeRangeStart);
  const eDate = new Date(selectedHomeRangeEnd);
  const diffDays = Math.max(1, Math.round((eDate - sDate) / (1000 * 60 * 60 * 24)) + 1);
  const rangeTxt = `${formatThaiDateDisplay(selectedHomeRangeStart, false)} - ${formatThaiDateDisplay(selectedHomeRangeEnd, false)}`;

  const totalAppt = diffDays * 44;
  const queued = Math.round(totalAppt * 0.60);
  const rescheduled = Math.round(totalAppt * 0.25);
  const cancelled = totalAppt - queued - rescheduled;
  const totalVis = diffDays * 160;
  const revTotalNum = diffDays * 35000;
  const paidNum = Math.round(revTotalNum * 0.92);
  const pendingNum = revTotalNum - paidNum;

  const bars = [1, 2, 3, 4, 5, 6].map(step => {
    const frac = (step - 1) / 5;
    const ptDate = new Date(sDate.getTime() + (eDate.getTime() - sDate.getTime()) * frac);
    const lbl = `${ptDate.getDate()} ${["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."][ptDate.getMonth()]}`;
    const v = Math.round((totalVis / 6) * (0.8 + (step % 3) * 0.2));
    return {
      label: lbl,
      val: v,
      appt: Math.round(v * 0.7),
      walkin: Math.round(v * 0.3),
      isPeak: (step === 4)
    };
  });

  return {
    periodBadge: `ช่วง ${rangeTxt} (${diffDays} วัน)`,
    appt: { total: totalAppt, queued, rescheduled, cancelled },
    queue: {
      waitCount: Math.min(25, Math.round(diffDays * 1.5)),
      rooms: [
        { name: "ห้องตรวจที่ 1", status: "busy", label: "อัตราตรวจ 91%" },
        { name: "ห้องตรวจที่ 2", status: "busy", label: "อัตราตรวจ 87%" },
        { name: "ห้องตรวจที่ 3", status: "available", label: "อัตราตรวจ 82%" }
      ]
    },
    chart: {
      subtitle: `สถิติจำนวนผู้ป่วยและผู้รับบริการเฉลี่ยตามช่วงเวลา (${rangeTxt})`,
      totalVisitors: `${totalVis.toLocaleString()} คน`,
      peakTime: `ช่วงสูงสุด (${bars[3]?.label || ''})`,
      maxVal: Math.round((totalVis / 6) * 1.5),
      yAxis: [Math.round((totalVis / 6) * 1.3), Math.round((totalVis / 6) * 0.9), Math.round((totalVis / 6) * 0.5), 0],
      bars: bars
    },
    revenue: {
      subtitle: `สรุปข้อมูลจริงช่วง ${rangeTxt} (Billing Summary)`,
      total: `฿${revTotalNum.toLocaleString()}`,
      trend: `▲ ยอดรวม ${diffDays} วัน`,
      paidAmount: `฿${paidNum.toLocaleString()}`,
      paidCount: `${diffDays * 8} ใบเสร็จ`,
      pendingAmount: `฿${pendingNum.toLocaleString()}`,
      pendingCount: `${diffDays * 2} รายการ`,
      categories: [
        { name: "หัตถการและเลเซอร์จักษุ", amount: `฿${Math.round(revTotalNum * 0.48).toLocaleString()}`, percent: 48, color: "#0D3B5E" },
        { name: "ค่ายาและเวชภัณฑ์หยอดตา", amount: `฿${Math.round(revTotalNum * 0.26).toLocaleString()}`, percent: 26, color: "#0284C7" },
        { name: "คอร์สรักษาตาแห้งและกล้ามเนื้อตา", amount: `฿${Math.round(revTotalNum * 0.16).toLocaleString()}`, percent: 16, color: "#0E7490" },
        { name: "ตรวจวินิจฉัยและบริการแพทย์", amount: `฿${Math.round(revTotalNum * 0.10).toLocaleString()}`, percent: 10, color: "#10B981" }
      ],
      channels: [
        { name: "QR PromptPay (โอนชำระทันที)", percent: "58%", amount: `฿${Math.round(revTotalNum * 0.58).toLocaleString()}` },
        { name: "เงินสด (Cash)", percent: "20%", amount: `฿${Math.round(revTotalNum * 0.20).toLocaleString()}` },
        { name: "บัตรเครดิต / เดบิต (EDC)", percent: "14%", amount: `฿${Math.round(revTotalNum * 0.14).toLocaleString()}` },
        { name: "สิทธิประกันสังคม / เบิกจ่าย", percent: "8%", amount: `฿${Math.round(revTotalNum * 0.08).toLocaleString()}` }
      ]
    }
  };
}

function showChartTooltip(e, label, val, appt, walkin) {
  const tooltip = document.getElementById('homeChartTooltip');
  if (!tooltip) return;

  tooltip.innerHTML = `
    <div style="font-weight: 700; color: #FFFFFF; font-size: 12px; margin-bottom: 3px; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 3px;">
      ${label}
    </div>
    <div style="display: flex; justify-content: space-between; gap: 12px; margin-top: 3px;">
      <span style="color: #94A3B8;">ผู้รับบริการทั้งหมด:</span>
      <strong style="color: #38BDF8;">${val.toLocaleString()} คน</strong>
    </div>
    <div style="display: flex; justify-content: space-between; gap: 12px; margin-top: 2px;">
      <span style="color: #94A3B8;">นัดหมายล่วงหน้า:</span>
      <span style="color: #E2E8F0; font-weight: 600;">${appt.toLocaleString()} คน</span>
    </div>
    <div style="display: flex; justify-content: space-between; gap: 12px; margin-top: 2px;">
      <span style="color: #94A3B8;">Walk-in / คัดกรอง:</span>
      <span style="color: #0284C7; font-weight: 600;">${walkin.toLocaleString()} คน</span>
    </div>
  `;

  tooltip.style.display = 'block';
  moveChartTooltip(e);
}

function moveChartTooltip(e) {
  const tooltip = document.getElementById('homeChartTooltip');
  if (!tooltip) return;

  const x = e.clientX;
  const y = e.clientY;
  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
}

function hideChartTooltip() {
  const tooltip = document.getElementById('homeChartTooltip');
  if (tooltip) {
    tooltip.style.display = 'none';
  }
}

// Trigger smart & subtle entrance animation exclusively for Home view
function triggerHomeEnterAnimation() {
  const viewHome = document.getElementById('view-home');
  if (!viewHome) return;
  viewHome.classList.remove('home-entering');
  // Trigger DOM reflow to reliably restart CSS keyframe animations
  void viewHome.offsetWidth;
  viewHome.classList.add('home-entering');
}

function renderHomeDashboard() {
  const data = getHomeDashboardData();

  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  // 1. Period Badge & Picker Controls Sync
  setTxt('homePeriodDateBadge', data.periodBadge);

  const dateInput = document.getElementById('homeDateInput');
  if (dateInput && dateInput.value !== selectedHomeDate) {
    dateInput.value = selectedHomeDate;
  }

  const monthSelect = document.getElementById('homeMonthSelect');
  if (monthSelect && monthSelect.value !== selectedHomeMonth) {
    monthSelect.value = selectedHomeMonth;
  }

  const yearSelect = document.getElementById('homeYearSelect');
  if (yearSelect && yearSelect.value !== selectedHomeYear) {
    yearSelect.value = selectedHomeYear;
  }

  // 2. Card 1: นัดหมาย
  setTxt('homeApptTotalCount', data.appt.total.toLocaleString());
  setTxt('homeApptQueued', data.appt.queued.toLocaleString());
  setTxt('homeApptRescheduled', data.appt.rescheduled.toLocaleString());
  setTxt('homeApptCancelled', data.appt.cancelled.toLocaleString());

  // 3. Card 2: คิวรอเข้าตรวจ
  setTxt('homeQueueWaitCount', data.queue.waitCount.toLocaleString());
  data.queue.rooms.forEach((r, idx) => {
    const el = document.getElementById(`homeRoomStatus${idx + 1}`);
    if (el) {
      if (r.status === 'busy') {
        el.innerHTML = `<span class="room-status-badge busy"><span class="blue-pulse-dot"></span> ${r.label}</span>`;
      } else {
        el.innerHTML = `<span class="room-status-badge available"><span class="green-dot"></span> ${r.label}</span>`;
      }
    }
  });

  // 4. Card 3: กราฟอัตรายอดผู้มาใช้บริการ (Bar Chart with CI Colors)
  setTxt('homeChartSubtitle', data.chart.subtitle);
  setTxt('homeChartTotalVisitors', data.chart.totalVisitors);
  setTxt('homeChartPeakTime', data.chart.peakTime);

  // Y-Axis scale
  const yAxisEl = document.getElementById('homeChartYAxis');
  if (yAxisEl && data.chart.yAxis) {
    yAxisEl.innerHTML = data.chart.yAxis.map(v => `<span>${v}</span>`).join('');
  }

  // Render Bar Elements
  const stageEl = document.getElementById('homeChartBarsStage');
  if (stageEl && data.chart.bars) {
    const maxVal = data.chart.maxVal || 35;
    stageEl.innerHTML = data.chart.bars.map(item => {
      const heightPercent = Math.min(100, Math.max(8, Math.round((item.val / maxVal) * 100)));
      const isPeak = !!item.isPeak;
      return `
        <div class="chart-bar-col"
          onmouseenter="showChartTooltip(event, '${item.label}', ${item.val}, ${item.appt}, ${item.walkin})"
          onmousemove="moveChartTooltip(event)"
          onmouseleave="hideChartTooltip()"
          title="${item.label}: ${item.val} คน">
          <span class="chart-bar-val">${item.val}</span>
          <div class="chart-bar-track">
            <div class="chart-bar-fill ${isPeak ? 'peak' : ''}" style="height: ${heightPercent}%;"></div>
          </div>
          <span class="chart-bar-label ${isPeak ? 'peak-label' : ''}">${item.label}</span>
        </div>
      `;
    }).join('');
  }

  // 5. Card 4: จำนวนยอดเงินรายได้ของคลินิก (Revenue from Billing System)
  setTxt('homeRevenueTotal', data.revenue.total);
  setTxt('homeRevenueTrend', data.revenue.trend);
  setTxt('homeRevenueSubtitle', data.revenue.subtitle);
  setTxt('homeRevPaidAmount', data.revenue.paidAmount);
  setTxt('homeRevPaidCount', data.revenue.paidCount);
  setTxt('homeRevPendingAmount', data.revenue.pendingAmount);
  setTxt('homeRevPendingCount', data.revenue.pendingCount);

  // Category breakdown
  const catListEl = document.getElementById('homeRevCategoryList');
  if (catListEl && data.revenue.categories) {
    catListEl.innerHTML = data.revenue.categories.map(cat => `
      <div class="rev-cat-row">
        <div class="rev-cat-meta">
          <span class="rev-cat-name">${cat.name}</span>
          <span class="rev-cat-val">${cat.amount} <small style="color: #64748B; font-weight: normal;">(${cat.percent}%)</small></span>
        </div>
        <div class="rev-cat-track">
          <div class="rev-cat-fill" style="width: ${cat.percent}%; background-color: ${cat.color};"></div>
        </div>
      </div>
    `).join('');
  }

  // Channels list
  const chanListEl = document.getElementById('homeRevChannelList');
  if (chanListEl && data.revenue.channels) {
    chanListEl.innerHTML = data.revenue.channels.map(ch => `
      <div class="rev-channel-item">
        <span class="rev-chan-label">${ch.name}</span>
        <span class="rev-chan-val">${ch.amount} <small style="color: #0284C7;">(${ch.percent})</small></span>
      </div>
    `).join('');
  }

  // 6. Bottom Preview Tables (Exam Queue, Medical Records, Pharmacy)
  renderHomeBottomPreviewTables();

  if (window.lucide) window.lucide.createIcons();
}

function renderHomeBottomPreviewTables() {
  // Render Left Table: Top 5 Exam Room Queue
  const examBody = document.getElementById('homeExamPreviewBody');
  if (examBody && typeof examRoomQueueData !== 'undefined') {
    const topExam = examRoomQueueData.slice(0, 5);
    examBody.innerHTML = topExam.map(item => {
      let badge = `<span class="exam-status-ready"><i data-lucide="check"></i> พร้อมตรวจ</span>`;
      if (item.status === 'examining') {
        badge = `<span class="exam-status-examining"><i data-lucide="activity"></i> กำลังตรวจ</span>`;
      } else if (item.status === 'completed') {
        badge = `<span class="exam-status-completed"><i data-lucide="check-check"></i> เสร็จสิ้น</span>`;
      }
      return `
        <tr onclick="switchView('exam-room')" style="cursor: pointer;">
          <td style="text-align: center; font-weight: 700; color: #0F172A;">${item.queueNo}</td>
          <td>
            <div style="font-weight: 600; color: #0F172A;">${item.patientName}</div>
            <div style="font-size: 11.5px; color: #64748B;">HN: ${item.hn} • นัด ${item.apptTime}</div>
          </td>
          <td style="color: #475569;">${item.detail}</td>
          <td style="text-align: center;">${badge}</td>
        </tr>
      `;
    }).join('');
  }
}









// ==========================================================
// MODAL: ตรวจสายตา (Eye Drawing, 3x3 Photos & Before/After)
// ==========================================================

let currentEyeExamSide = 'right'; // 'left' | 'right'
let currentEyeDrawAngle = 'front'; // 'front' | 'left' | 'right'
let currentEyeDrawTool = 'pen'; // 'pen' | 'eraser'
let currentEyeDrawColor = '#0F172A';
let isEyeCanvasDrawing = false;
let eyeCanvasInitialized = false;
let activeUploadSlotIdx = null;
let activeCompareUploadType = null;

const savedEyeCanvasData = {
  left: null,
  right: null
};

let eyePhotos9Slots = [
  "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=300&h=300",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=300&h=300",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300&h=300",
  null,
  null,
  null,
  null,
  null,
  null
];

function openEyeExamModal(side = 'right') {
  currentEyeExamSide = side;

  const modal = document.getElementById('eyeExamModal');
  if (modal) modal.style.display = 'flex';

  const tabLeft = document.getElementById('eyeSideTabLeft');
  const tabRight = document.getElementById('eyeSideTabRight');
  if (tabLeft) tabLeft.classList.toggle('active', side === 'left');
  if (tabRight) tabRight.classList.toggle('active', side === 'right');

  initEyeDrawCanvas();
  renderEyePhotosGrid9();

  if (window.lucide) window.lucide.createIcons();
}

function closeEyeExamModal() {
  const modal = document.getElementById('eyeExamModal');
  if (modal) modal.style.display = 'none';
}

// ==========================================================
// MODAL: ประวัติการรักษา (Doctor Exam Medical History Modal)
// ==========================================================

const examHistVisitsData = [
  {
    date: '12 พ.ย. 69',
    time: '13:00 น.',
    doctor: 'เปรมชัย เสือขาว',
    recDate: '12/11/2569',
    recTime: '13:00 น.',
    note: 'ตามัว OS 2 wks, worse at night. No pain, no redness.\nCornea clear, pupil reactive. Mild lens opacity OS.\nIOP OS elevated. Fundus: mild retinal changes.'
  },
  {
    date: '09 พ.ย. 69',
    time: '14:00 น.',
    doctor: 'เปรมชัย เสือขาว',
    recDate: '09/11/2569',
    recTime: '14:00 น.',
    note: 'ตรวจติดตามอาการเคืองตาข้างซ้าย ปรับยาหยอดตา Latanoprost ก่อนนอน อาการทรงตัว'
  },
  {
    date: '01 พ.ย. 69',
    time: '09:00 น.',
    doctor: 'เปรมชัย เสือขาว',
    recDate: '01/11/2569',
    recTime: '09:00 น.',
    note: 'ตรวจประเมินแรกรับ (First visit) มีอาการตามัวข้างซ้าย แสบตา เคืองตาช่วงค่ำ แนะนำเลี่ยงแสงจ้า'
  }
];

function openExamHistoryModal() {
  const modal = document.getElementById('modalExamHistory');
  if (modal) {
    modal.style.display = 'flex';
    // Update active patient details if available from activeRecordPatient or exam current patient
    const ptName = document.getElementById('histPtName');
    const ptHn = document.getElementById('histPtHn');
    const ptCitizen = document.getElementById('histPtCitizen');
    const ptAge = document.getElementById('histPtAge');
    const ptClaim = document.getElementById('histPtClaim');

    const patient = (typeof activeRecordPatient !== 'undefined' && activeRecordPatient) ? activeRecordPatient : null;
    if (patient) {
      if (ptName) ptName.textContent = patient.name || 'นางสาว กุลธิดา ขุนยางสิน';
      if (ptHn) ptHn.textContent = patient.hn || '500584/83';
      if (ptCitizen) ptCitizen.textContent = patient.fullCitizenId || patient.citizenId || '1-2345-67890-12-1';
      if (ptAge) ptAge.textContent = `${patient.age || '34 ปี'}`;
      if (ptClaim) ptClaim.textContent = patient.claim || 'บัตรทอง 30 บาท';
    }

    if (window.lucide) window.lucide.createIcons();
  }
}

function closeExamHistoryModal() {
  const modal = document.getElementById('modalExamHistory');
  if (modal) modal.style.display = 'none';
}

function selectExamHistVisit(el, visitIdx) {
  const items = document.querySelectorAll('.exam-hist-date-item');
  items.forEach(item => item.classList.remove('active'));
  if (el) el.classList.add('active');

  const visit = examHistVisitsData[visitIdx] || examHistVisitsData[0];
  const docNote = document.querySelector('.hist-doc-note-content');
  if (docNote && visit.note) {
    docNote.innerHTML = visit.note.replace(/\n/g, '<br>');
  }

  const recDateEl = document.getElementById('histPtRecDate');
  const recTimeEl = document.getElementById('histPtRecTime');
  if (recDateEl) recDateEl.textContent = visit.recDate;
  if (recTimeEl) recTimeEl.textContent = visit.recTime;
}

function switchHistOctTab(el, tabName) {
  const tabs = document.querySelectorAll('.hist-oct-tab');
  tabs.forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
}

function switchHistThumbSide(el, side) {
  const tabs = document.querySelectorAll('.hist-side-tab');
  tabs.forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
}

function printExamHistory() {
  window.print();
}

// ==========================================================
// MODAL: ส่งตรวจ / ปรึกษาแพทย์ (Doctor Consult Modal)
// ==========================================================

let consultSystemRunningSeq = 123456;

function openConsultModal() {
  const modal = document.getElementById('modalConsult');
  if (modal) {
    modal.style.display = 'flex';
    
    // Consult ID อิงจากระบบอัตโนมัติ ไม่สามารถแก้ไขหรือระบุเองได้
    const consultIdInput = document.getElementById('consultIdInput');
    if (consultIdInput) {
      consultIdInput.value = consultSystemRunningSeq.toString();
      consultIdInput.readOnly = true;
    }

    if (window.lucide) window.lucide.createIcons();
  }
}

function closeConsultModal() {
  const modal = document.getElementById('modalConsult');
  if (modal) modal.style.display = 'none';
}

function triggerConsultFileUpload() {
  const fileInput = document.getElementById('consultFileInput');
  if (fileInput) {
    fileInput.value = '';
    fileInput.click();
  }
}

function handleConsultFileUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const container = document.getElementById('consultFilesContainer');
  if (!container) return;

  const badge = document.createElement('div');
  badge.className = 'consult-file-badge';
  badge.innerHTML = `
    <i data-lucide="file-text" class="file-icon"></i>
    <span>${file.name}</span>
    <button type="button" class="btn-file-del" onclick="this.parentElement.remove()" title="ลบไฟล์">
      <i data-lucide="minus"></i>
    </button>
  `;
  container.appendChild(badge);
  if (window.lucide) window.lucide.createIcons();

  if (typeof showToast === 'function') {
    showToast('แนบไฟล์สำเร็จ', `เพิ่มไฟล์ "${file.name}" สำหรับส่ง Consult เรียบร้อยแล้ว`, 'success');
  }
}

function submitConsultRequest() {
  const consultId = document.getElementById('consultIdInput') ? document.getElementById('consultIdInput').value : consultSystemRunningSeq.toString();
  const unit = document.getElementById('consultUnitSelect') ? document.getElementById('consultUnitSelect').value : 'โรงพยาบาล วชิระ';
  
  // ระบุแพทย์ อิงจาก Dropdown ที่เลือก
  const doctorSelect = document.getElementById('consultDoctorSelect');
  const doctor = doctorSelect ? doctorSelect.value : 'นายแพทย์ สมชาย คงดี';
  
  const urgency = document.getElementById('consultUrgencySelect') ? document.getElementById('consultUrgencySelect').value : 'ด่วน';
  const topic = document.getElementById('consultTopicInput') ? document.getElementById('consultTopicInput').value : 'ไม่สามารถระบุอาการได้';

  if (typeof playHospitalChime === 'function') playHospitalChime();

  if (typeof showToast === 'function') {
    showToast(
      'ส่ง Consult สำเร็จ',
      `รหัส #${consultId} ส่งเคสไปยัง ${unit} (${doctor}) • ความเร่งด่วน: ${urgency} เรียบร้อยแล้ว`,
      'success'
    );
  }

  // Running Consult ID ของระบบสำหรับเคสถัดไป
  consultSystemRunningSeq++;

  closeConsultModal();
}

function printConsultForm() {
  window.print();
}

function switchEyeExamSide(side) {
  const canvas = document.getElementById('eyeDrawCanvas');
  if (canvas) {
    savedEyeCanvasData[currentEyeExamSide] = canvas.toDataURL();
  }

  currentEyeExamSide = side;
  const tabLeft = document.getElementById('eyeSideTabLeft');
  const tabRight = document.getElementById('eyeSideTabRight');
  if (tabLeft) tabLeft.classList.toggle('active', side === 'left');
  if (tabRight) tabRight.classList.toggle('active', side === 'right');

  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (savedEyeCanvasData[side]) {
      const img = new Image();
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      };
      img.src = savedEyeCanvasData[side];
    } else {
      drawEyeBaseDiagram();
    }
  }
}

function switchEyeDrawAngle(btnEl, angle) {
  currentEyeDrawAngle = angle;
  const parent = btnEl.closest('.eye-angle-pills');
  if (parent) {
    parent.querySelectorAll('.eye-angle-pill').forEach(b => b.classList.remove('active'));
  }
  btnEl.classList.add('active');
  drawEyeBaseDiagram();
}

function setEyeDrawTool(tool) {
  currentEyeDrawTool = tool;
  const penBtn = document.getElementById('eyeToolPen');
  const eraserBtn = document.getElementById('eyeToolEraser');
  if (penBtn) penBtn.classList.toggle('active', tool === 'pen');
  if (eraserBtn) eraserBtn.classList.toggle('active', tool === 'eraser');
}

function setEyeDrawColor(btnEl, color) {
  currentEyeDrawColor = color;
  currentEyeDrawTool = 'pen';
  setEyeDrawTool('pen');

  const parent = btnEl.closest('.eye-color-swatches');
  if (parent) {
    parent.querySelectorAll('.eye-color-dot').forEach(d => d.classList.remove('active'));
  }
  btnEl.classList.add('active');
}

function drawEyeBaseDiagram() {
  const canvas = document.getElementById('eyeDrawCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;

  ctx.clearRect(0, 0, w, h);

  if (currentEyeDrawAngle === 'front') {
    // Outer sclera/cornea circle (white with dark border)
    ctx.beginPath();
    ctx.arc(cx, cy, 88, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.lineWidth = 1.6;
    ctx.strokeStyle = '#1E293B';
    ctx.stroke();

    // Middle iris circle (light gray)
    ctx.beginPath();
    ctx.arc(cx, cy, 54, 0, Math.PI * 2);
    ctx.fillStyle = '#D9D9D9';
    ctx.fill();

    // Inner pupil circle (dark gray)
    ctx.beginPath();
    ctx.arc(cx, cy, 27, 0, Math.PI * 2);
    ctx.fillStyle = '#4B5563';
    ctx.fill();
  } else if (currentEyeDrawAngle === 'left') {
    ctx.beginPath();
    ctx.arc(cx + 15, cy, 78, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.lineWidth = 1.6;
    ctx.strokeStyle = '#1E293B';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx - 48, cy, 38, Math.PI * 0.65, Math.PI * 1.35);
    ctx.fillStyle = '#D9D9D9';
    ctx.fill();
    ctx.strokeStyle = '#1E293B';
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.arc(cx - 15, cy, 78, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.lineWidth = 1.6;
    ctx.strokeStyle = '#1E293B';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx + 48, cy, 38, -Math.PI * 0.35, Math.PI * 0.35);
    ctx.fillStyle = '#D9D9D9';
    ctx.fill();
    ctx.strokeStyle = '#1E293B';
    ctx.stroke();
  }
}

function resetEyeDrawCanvas() {
  savedEyeCanvasData[currentEyeExamSide] = null;
  drawEyeBaseDiagram();
  showToast('รีเซ็ตภาพวาด', 'ล้างเส้นวาดบนแผนภาพดวงตาเรียบร้อยแล้ว', 'info');
}

function initEyeDrawCanvas() {
  const canvas = document.getElementById('eyeDrawCanvas');
  if (!canvas) return;

  drawEyeBaseDiagram();

  if (eyeCanvasInitialized) return;
  eyeCanvasInitialized = true;

  const ctx = canvas.getContext('2d');

  const getPos = (e) => {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  };

  const startDraw = (e) => {
    isEyeCanvasDrawing = true;
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  const moveDraw = (e) => {
    if (!isEyeCanvasDrawing) return;
    if (e.cancelable) e.preventDefault();
    const pos = getPos(e);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (currentEyeDrawTool === 'eraser') {
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 12;
    } else {
      ctx.strokeStyle = currentEyeDrawColor;
      ctx.lineWidth = 3;
    }

    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  };

  const stopDraw = () => {
    isEyeCanvasDrawing = false;
  };

  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mousemove', moveDraw);
  window.addEventListener('mouseup', stopDraw);

  canvas.addEventListener('touchstart', startDraw, { passive: false });
  canvas.addEventListener('touchmove', moveDraw, { passive: false });
  window.addEventListener('touchend', stopDraw);
}

function renderEyePhotosGrid9() {
  const grid = document.getElementById('eyePhotosGrid9');
  if (!grid) return;

  grid.innerHTML = eyePhotos9Slots.map((url, idx) => {
    if (url) {
      return `
        <div class="eye-photo-slot" onclick="triggerEyeSlotUpload(${idx})" title="คลิกเพื่อเปลี่ยนรูปภาพ">
          <img src="${url}" alt="รูปประกอบการตรวจ ${idx + 1}">
          <button type="button" class="eye-slot-del-btn" onclick="removeEyeSlotPhoto(event, ${idx})" title="ลบรูปนี้">
            <i data-lucide="x"></i>
          </button>
        </div>
      `;
    }
    return `
      <div class="eye-photo-slot" onclick="triggerEyeSlotUpload(${idx})" title="คลิกเพื่ออัปโหลดรูปภาพประกอบการตรวจ">
        <i data-lucide="plus" class="eye-photo-slot-plus"></i>
      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function triggerEyeSlotUpload(slotIdx) {
  activeUploadSlotIdx = slotIdx;
  const fileInput = document.getElementById('eyeSlotFileInput');
  if (fileInput) {
    fileInput.value = '';
    fileInput.click();
  }
}

function handleEyeSlotFileChange(e) {
  const file = e.target.files && e.target.files[0];
  if (!file || activeUploadSlotIdx === null) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    if (evt.target && evt.target.result) {
      eyePhotos9Slots[activeUploadSlotIdx] = evt.target.result;
      renderEyePhotosGrid9();
      showToast('อัปโหลดรูปสำเร็จ', `เพิ่มรูปภาพประกอบการตรวจช่องที่ ${activeUploadSlotIdx + 1} เรียบร้อยแล้ว`, 'success');
    }
  };
  reader.readAsDataURL(file);
}

function removeEyeSlotPhoto(e, slotIdx) {
  e.stopPropagation();
  eyePhotos9Slots[slotIdx] = null;
  renderEyePhotosGrid9();
}

function triggerBeforeAfterUpload(type) {
  activeCompareUploadType = type;
  const fileInput = document.getElementById('eyeCompareFileInput');
  if (fileInput) {
    fileInput.value = '';
    fileInput.click();
  }
}

function handleEyeCompareFileChange(e) {
  const file = e.target.files && e.target.files[0];
  if (!file || !activeCompareUploadType) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    if (!evt.target || !evt.target.result) return;
    const imgId = activeCompareUploadType === 'after' ? 'eyeAfterImg' : 'eyeBeforeImg';
    const imgEl = document.getElementById(imgId);
    if (imgEl) {
      imgEl.src = evt.target.result;
      imgEl.style.display = 'block';
    }
    showToast('อัปโหลดรูปสำเร็จ', `อัปเดตรูปภาพ ${activeCompareUploadType === 'after' ? 'After' : 'Befor'} เรียบร้อยแล้ว`, 'success');
  };
  reader.readAsDataURL(file);
}

function removeBeforeAfterPhoto(type) {
  const imgId = type === 'after' ? 'eyeAfterImg' : 'eyeBeforeImg';
  const imgEl = document.getElementById(imgId);
  if (imgEl) {
    imgEl.style.display = 'none';
  }
  showToast('ลบรูปภาพแล้ว', `ลบรูปภาพเปรียบเทียบ (${type === 'after' ? 'After' : 'Befor'}) เรียบร้อยแล้ว`, 'info');
}

function saveEyeExamModal() {
  const canvas = document.getElementById('eyeDrawCanvas');
  if (canvas) {
    const dataUrl = canvas.toDataURL();
    savedEyeCanvasData[currentEyeExamSide] = dataUrl;

    const previewId = currentEyeExamSide === 'left' ? 'fundusPreviewLeft' : 'fundusPreviewRight';
    const previewEl = document.getElementById(previewId);
    if (previewEl) {
      previewEl.src = dataUrl;
      previewEl.style.display = 'block';
    }
  }

  autoFillExamRefraction();
  closeEyeExamModal();
  playHospitalChime();
  showToast('บันทึกข้อมูลการตรวจสายตาสำเร็จ', 'บันทึกภาพวาดดวงตา รูปภาพประกอบ และ Doctor note เรียบร้อยแล้ว', 'success');
}


// ==========================================================
// PHARMACY PRESCRIPTION QUEUE (ระบบยาและใบสั่งยา - UI ตามภาพ)
// ==========================================================

const mockOrderItems9 = [
  {
    no: 1,
    name: "(EXTEMP.) CEFTAZIDIME EYE DROP (50 MG/ML) 10 ML -ED",
    category: "ยาหยอดตาผสมเฉพาะราย (แช่เย็น 2-8°C)",
    instruction: "หยอดตาข้างขวา ครั้งละ 1 หยด วันละ 4 ครั้ง ทุก 6 ชั่วโมง",
    qty: 1,
    unit: "ขวด",
    unitPrice: 109.00,
    totalPrice: 109.00
  },
  {
    no: 2,
    name: "0.9% NaCl 100 ml-ED",
    category: "น้ำเกลือปราศจากเชื้อสำหรับดวงตา",
    instruction: "สำหรับล้างตาหรือหยอดชะล้างวันละ 2 ครั้ง เช้า-เย็น",
    qty: 1,
    unit: "ขวด",
    unitPrice: 45.00,
    totalPrice: 45.00
  },
  {
    no: 3,
    name: "MOXIFLOXACIN 0.5% EYE DROP (VIGAMOX)",
    category: "ยาหยอดตาฆ่าเชื้อแบคทีเรีย",
    instruction: "หยอดตาข้างขวา ครั้งละ 1 หยด วันละ 3 ครั้ง เช้า-กลางวัน-เย็น",
    qty: 1,
    unit: "ขวด",
    unitPrice: 380.00,
    totalPrice: 380.00
  },
  {
    no: 4,
    name: "PREDNISOLONE ACETATE 1% OPHTH SUSP (PRED FORTE)",
    category: "ยาลดการอักเสบในลูกตา (เขย่าขวดก่อนใช้)",
    instruction: "หยอดตาข้างขวา ครั้งละ 1 หยด วันละ 4 ครั้ง",
    qty: 1,
    unit: "ขวด",
    unitPrice: 290.00,
    totalPrice: 290.00
  },
  {
    no: 5,
    name: "SODIUM HYALURONATE 0.18% (VISMED MULTI 10ML)",
    category: "น้ำตาเทียมไร้สารกันเสีย",
    instruction: "หยอดตาทั้งสองข้าง ครั้งละ 1-2 หยด เมื่อรู้สึกตาแห้งหรือระคายเคือง",
    qty: 1,
    unit: "กล่อง",
    unitPrice: 420.00,
    totalPrice: 420.00
  },
  {
    no: 6,
    name: "PARACETAMOL 500 MG TABLET",
    category: "ยาแก้ปวดลดไข้",
    instruction: "รับประทานครั้งละ 1 เม็ด ทุก 4-6 ชั่วโมง เมื่อมีอาการปวดตาหรือปวดศีรษะ",
    qty: 10,
    unit: "เม็ด",
    unitPrice: 3.00,
    totalPrice: 30.00
  },
  {
    no: 7,
    name: "CIPROFLOXACIN 500 MG TABLET",
    category: "ยาปฏิชีวนะชนิดรับประทาน",
    instruction: "รับประทานครั้งละ 1 เม็ด วันละ 2 ครั้ง หลังอาหารเช้า-เย็น ติดต่อกัน 7 วัน",
    qty: 14,
    unit: "เม็ด",
    unitPrice: 15.00,
    totalPrice: 210.00
  },
  {
    no: 8,
    name: "OMEPRAZOLE 20 MG CAPSULE",
    category: "ยาลดกรดเคลือบกระเพาะอาหาร",
    instruction: "รับประทานครั้งละ 1 แคปซูล วันละ 1 ครั้ง ก่อนอาหารเช้า 30 นาที",
    qty: 14,
    unit: "แคปซูล",
    unitPrice: 10.00,
    totalPrice: 140.00
  },
  {
    no: 9,
    name: "VITAMIN C 500 MG TABLET",
    category: "วิตามินบำรุงและต้านอนุมูลอิสระ",
    instruction: "รับประทานวันละ 1 เม็ด หลังอาหารเช้า",
    qty: 30,
    unit: "เม็ด",
    unitPrice: 3.17,
    totalPrice: 95.00
  }
];

let pharmacyQueueData = [
  {
    id: 1,
    date: "7 ต.ค. 69",
    time: "09:00 น.",
    orderNo: "RX-691103-001",
    hn: "1252568-69",
    patientName: "นาย ชัยรัตน์ โสภณ",
    examRoom: "1",
    doctorName: "นพ. วรเมธ สิทธิ์สุข",
    itemCount: 9,
    status: "dispensed", // จัดยาแล้ว
    items: JSON.parse(JSON.stringify(mockOrderItems9))
  },
  {
    id: 2,
    date: "7 ต.ค. 69",
    time: "10:00 น.",
    orderNo: "RX-691103-002",
    hn: "1252568-69",
    patientName: "นาย ชัยรัตน์ โสภณ",
    examRoom: "1",
    doctorName: "พญ. นภาพร วงศ์มณี",
    itemCount: 9,
    status: "processing", // กำลังจัดยา
    items: JSON.parse(JSON.stringify(mockOrderItems9))
  },
  {
    id: 3,
    date: "7 ต.ค. 69",
    time: "11:00 น.",
    orderNo: "RX-691103-003",
    hn: "1252568-69",
    patientName: "นาย ชัยรัตน์ โสภณ",
    examRoom: "1",
    doctorName: "นพ. วรเมธ สิทธิ์สุข",
    itemCount: 9,
    status: "processing", // กำลังจัดยา
    items: JSON.parse(JSON.stringify(mockOrderItems9))
  },
  {
    id: 4,
    date: "7 ต.ค. 69",
    time: "13:00 น.",
    orderNo: "RX-691103-004",
    hn: "1252568-69",
    patientName: "นาย ชัยรัตน์ โสภณ",
    examRoom: "1",
    doctorName: "นพ. ภานุวัฒน์ เดชกำแหง",
    itemCount: 9,
    status: "cancelled", // ยกเลิกแล้ว
    items: JSON.parse(JSON.stringify(mockOrderItems9))
  },
  {
    id: 5,
    date: "7 ต.ค. 69",
    time: "14:00 น.",
    orderNo: "RX-691103-005",
    hn: "1252568-69",
    patientName: "นาย ชัยรัตน์ โสภณ",
    examRoom: "1",
    doctorName: "พญ. นภาพร วงศ์มณี",
    itemCount: 9,
    status: "processing", // กำลังจัดยา
    items: JSON.parse(JSON.stringify(mockOrderItems9))
  }
];

let rxQueueStatusFilter = 'all'; // 'all' | 'processing' | 'cancelled' | 'dispensed'
let rxQueueDateFilter = 'all';
let rxQueueSearchQuery = '';
let currentModalRxOrderNo = null;

function renderPharmacyOrderQueue() {
  const tbody = document.getElementById('rxQueueTableBody');
  const emptyState = document.getElementById('rxQueueEmptyState');

  // 1. Update KPI Counts
  const totalCount = pharmacyQueueData.length;
  const processingCount = pharmacyQueueData.filter(o => o.status === 'processing').length;
  const cancelledCount = pharmacyQueueData.filter(o => o.status === 'cancelled').length;
  const dispensedCount = pharmacyQueueData.filter(o => o.status === 'dispensed').length;

  const kpiAllEl = document.getElementById('rxKpiAllVal');
  const kpiProcEl = document.getElementById('rxKpiProcessingVal');
  const kpiCancEl = document.getElementById('rxKpiCancelledVal');
  const kpiDispEl = document.getElementById('rxKpiDispensedVal');

  if (kpiAllEl) kpiAllEl.textContent = totalCount;
  if (kpiProcEl) kpiProcEl.textContent = processingCount;
  if (kpiCancEl) kpiCancEl.textContent = cancelledCount;
  if (kpiDispEl) kpiDispEl.textContent = dispensedCount;

  // 2. Highlight Active KPI Card
  const cards = [
    { id: 'rxKpiCardAll', filter: 'all' },
    { id: 'rxKpiCardProcessing', filter: 'processing' },
    { id: 'rxKpiCardCancelled', filter: 'cancelled' },
    { id: 'rxKpiCardDispensed', filter: 'dispensed' }
  ];
  cards.forEach(c => {
    const el = document.getElementById(c.id);
    if (el) {
      if (rxQueueStatusFilter === c.filter) {
        el.classList.add('active-navy');
      } else {
        el.classList.remove('active-navy');
      }
    }
  });

  if (!tbody) return;

  // 3. Filter Records
  let filtered = pharmacyQueueData.filter(order => {
    if (rxQueueStatusFilter !== 'all' && order.status !== rxQueueStatusFilter) {
      return false;
    }
    if (rxQueueSearchQuery) {
      const q = rxQueueSearchQuery.toLowerCase();
      const match = (order.orderNo && order.orderNo.toLowerCase().includes(q)) ||
                    (order.hn && order.hn.toLowerCase().includes(q)) ||
                    (order.patientName && order.patientName.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  // 4. Render Rows matching Mockup
  tbody.innerHTML = filtered.map(order => {
    const isDispensed = order.status === 'dispensed';
    const isProcessing = order.status === 'processing';
    const isCancelled = order.status === 'cancelled';

    let statusBadgeHtml = '';
    if (isDispensed) {
      statusBadgeHtml = `<span class="rx-status-badge dispensed"><i data-lucide="check"></i> จัดยาแล้ว</span>`;
    } else if (isProcessing) {
      statusBadgeHtml = `<span class="rx-status-badge processing"><i data-lucide="hourglass"></i> กำลังจัดยา</span>`;
    } else if (isCancelled) {
      statusBadgeHtml = `<span class="rx-status-badge cancelled"><i data-lucide="x"></i> ยกเลิกแล้ว</span>`;
    }

    let actionBtnsHtml = '';
    if (isProcessing) {
      actionBtnsHtml = `
        <button type="button" class="btn-rx-action-done" onclick="markRxOrderDispensed('${order.orderNo}')" title="กดเมื่อจัดยาเสร็จสิ้น">
          <i data-lucide="check"></i>
          <span>จัดแล้ว</span>
        </button>
        <button type="button" class="btn-rx-action-view" onclick="openRxOrderModal('${order.orderNo}')" title="ดูรายการยาในใบสั่งนี้">
          <i data-lucide="eye"></i>
          <span>ดูรายการ</span>
        </button>
        <button type="button" class="btn-rx-action-print" onclick="printRxOrder('${order.orderNo}')" title="พิมพ์ใบสั่งยา / ฉลากยา">
          <i data-lucide="printer"></i>
        </button>
      `;
    } else if (isDispensed) {
      actionBtnsHtml = `
        <button type="button" class="btn-rx-action-view" onclick="openRxOrderModal('${order.orderNo}')" title="ดูรายการยาในใบสั่งนี้">
          <i data-lucide="eye"></i>
          <span>ดูรายการ</span>
        </button>
        <button type="button" class="btn-rx-action-print" onclick="printRxOrder('${order.orderNo}')" title="พิมพ์ใบสั่งยา / ฉลากยา">
          <i data-lucide="printer"></i>
        </button>
      `;
    } else if (isCancelled) {
      actionBtnsHtml = `
        <button type="button" class="btn-rx-action-view" onclick="openRxOrderModal('${order.orderNo}')" title="ดูรายการยาในใบสั่งนี้">
          <i data-lucide="eye"></i>
          <span>ดูรายการ</span>
        </button>
      `;
    }

    return `
      <tr>
        <td style="text-align: center;">
          <div class="rx-time-badge">
            <span class="rx-time-date">${order.date}</span>
            <span class="rx-time-sub"><i data-lucide="clock" style="width: 12px; height: 12px;"></i> ${order.time}</span>
          </div>
        </td>
        <td style="text-align: center; font-weight: 600; color: #0D3B5E;">${order.orderNo}</td>
        <td style="text-align: center; font-weight: 600;">${order.hn}</td>
        <td>${order.patientName}</td>
        <td style="text-align: center;">${order.examRoom}</td>
        <td style="text-align: center; font-weight: 600;">${order.itemCount}</td>
        <td style="text-align: center;">${statusBadgeHtml}</td>
        <td style="text-align: center;">
          <div class="rx-actions-cell">
            ${actionBtnsHtml}
          </div>
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function filterRxQueueByStatus(status) {
  rxQueueStatusFilter = status;
  renderPharmacyOrderQueue();
}

function handleRxSearchInput(val) {
  rxQueueSearchQuery = (val || '').trim();
  const clearBtn = document.getElementById('rxClearSearchBtn');
  if (clearBtn) {
    clearBtn.style.display = rxQueueSearchQuery ? 'inline-flex' : 'none';
  }
  renderPharmacyOrderQueue();
}

function clearRxSearch() {
  const input = document.getElementById('rxQueueSearchInput');
  if (input) input.value = '';
  rxQueueSearchQuery = '';
  const clearBtn = document.getElementById('rxClearSearchBtn');
  if (clearBtn) clearBtn.style.display = 'none';
  renderPharmacyOrderQueue();
}

function handleRxFilterChange() {
  const sel = document.getElementById('rxDateRangeFilter');
  if (sel) rxQueueDateFilter = sel.value;
  renderPharmacyOrderQueue();
}

function markRxOrderDispensed(orderNo) {
  const order = pharmacyQueueData.find(o => o.orderNo === orderNo);
  if (!order) return;
  order.status = 'dispensed';
  if (typeof playHospitalChime === 'function') playHospitalChime();
  showToast('จัดยาสำเร็จ', `ใบสั่งยาเลขที่ ${orderNo} (${order.patientName}) บันทึกสถานะจัดยาแล้ว`, 'success');
  renderPharmacyOrderQueue();
  if (currentModalRxOrderNo === orderNo) {
    openRxOrderModal(orderNo);
  }
}

function openRxOrderModal(orderNo) {
  const order = pharmacyQueueData.find(o => o.orderNo === orderNo);
  if (!order) return;
  currentModalRxOrderNo = orderNo;

  const modal = document.getElementById('modalRxOrderDetail');
  if (!modal) return;

  const orderNoEl = document.getElementById('modalRxOrderNo');
  const timeEl = document.getElementById('modalRxOrderTime');
  const nameEl = document.getElementById('modalRxPatientName');
  const hnEl = document.getElementById('modalRxHn');
  const roomDocEl = document.getElementById('modalRxRoomDoctor');
  const badgeEl = document.getElementById('modalRxStatusBadge');
  const dispenseBtn = document.getElementById('modalRxDispenseBtn');
  const tbody = document.getElementById('modalRxMedListBody');
  const countEl = document.getElementById('modalRxTotalCount');
  const amountEl = document.getElementById('modalRxTotalAmount');

  if (orderNoEl) orderNoEl.textContent = order.orderNo;
  if (timeEl) timeEl.textContent = `วันที่ ${order.date} • เวลา ${order.time}`;
  if (nameEl) nameEl.textContent = order.patientName;
  if (hnEl) hnEl.textContent = order.hn;
  if (roomDocEl) roomDocEl.textContent = `ห้องตรวจที่ ${order.examRoom} • ${order.doctorName}`;

  if (badgeEl) {
    badgeEl.className = `rx-status-badge ${order.status}`;
    if (order.status === 'dispensed') {
      badgeEl.innerHTML = `<i data-lucide="check"></i> จัดยาแล้ว`;
    } else if (order.status === 'processing') {
      badgeEl.innerHTML = `<i data-lucide="hourglass"></i> กำลังจัดยา`;
    } else {
      badgeEl.innerHTML = `<i data-lucide="x"></i> ยกเลิกแล้ว`;
    }
  }

  if (dispenseBtn) {
    dispenseBtn.style.display = order.status === 'processing' ? 'inline-flex' : 'none';
  }

  const items = order.items || [];
  let totalAmount = 0;
  if (tbody) {
    tbody.innerHTML = items.map((med, idx) => {
      totalAmount += (med.totalPrice || 0);
      return `
        <tr>
          <td style="text-align: center; color: #64748B;">${idx + 1}</td>
          <td>
            <div style="font-weight: 600; color: #1E293B;">${med.name}</div>
            <div style="font-size: 11.5px; color: #64748B; margin-top: 2px;">${med.category || ''}</div>
          </td>
          <td>
            <div style="font-size: 12.5px; color: #0284C7;">${med.instruction || '-'}</div>
          </td>
          <td style="text-align: center; font-weight: 600;">${med.qty} ${med.unit || ''}</td>
          <td style="text-align: right; font-weight: 600; color: #1E293B;">${(med.totalPrice || 0).toLocaleString('th-TH', { minimumFractionDigits: 2 })}</td>
        </tr>
      `;
    }).join('');
  }

  if (countEl) countEl.textContent = items.length;
  if (amountEl) amountEl.textContent = totalAmount.toLocaleString('th-TH', { minimumFractionDigits: 2 });

  modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

function closeRxOrderModal() {
  const modal = document.getElementById('modalRxOrderDetail');
  if (modal) modal.style.display = 'none';
  currentModalRxOrderNo = null;
}

function dispenseCurrentModalOrder() {
  if (currentModalRxOrderNo) {
    markRxOrderDispensed(currentModalRxOrderNo);
  }
}

function printRxOrder(orderNo) {
  showToast('สั่งพิมพ์สำเร็จ', `ส่งพิมพ์ใบสั่งยาเลขที่ ${orderNo} และฉลากยา 9 รายการไปยังเครื่องพิมพ์ห้องจ่ายยาแล้ว`, 'info');
}

function printRxOrderDetail() {
  if (currentModalRxOrderNo) {
    printRxOrder(currentModalRxOrderNo);
  }
}

function togglePharmacyInventorySection() {
  const sec = document.getElementById('pharmacyInventorySection');
  if (!sec) return;
  const isHidden = sec.style.display === 'none' || sec.style.display === '';
  sec.style.display = isHidden ? 'block' : 'none';
  if (isHidden) {
    if (typeof renderPharmacyInventory === 'function') renderPharmacyInventory();
    sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast('เปิดระบบคลังยา', 'แสดงรายละเอียดสต็อก FEFO และการจัดการคลังยา', 'info');
  }
}


// ==========================================================
// PHARMACY & INVENTORY SYSTEM (ระบบคลังยาและเวชภัณฑ์ - จักษุ & จิตเวช)
// ==========================================================

let pharmacyKpiFilter = 'all'; // 'all' | 'low' | 'expiry' | 'po'
let pharmacyLocationFilter = 'all'; // 'all' | 'dispensary' | 'treatment' | 'main'
let pharmacyCategoryFilter = 'all'; // 'all' | 'ophtho' | 'psych' | 'supply' | 'cold'
let pharmacySearchQuery = '';

let pharmacyInventoryData = [
  {
    id: 1,
    code: "MED-001",
    tmtCode: "TMT-741028",
    tradeName: "Xalatan 0.005% Eye Drops (2.5 mL)",
    genericName: "Latanoprost 50 mcg/mL Ophthalmic Solution",
    dosageForm: "ยาหยอดตา (Ophthalmic Solution)",
    category: "ophtho",
    categoryLabel: "ยาหยอดตา (จักษุ)",
    fdaClass: null,
    coldChain: true,
    budDays: 28,
    subStock: "treatment",
    locationMain: "ตู้เย็นห้องตรวจจักษุ (2-8°C)",
    locationSub: "คลังห้องหัตถการ / ตู้เย็นจักษุ ชั้น R-01",
    lotNo: "LOT-690814",
    expiryDate: "15 ส.ค. 70",
    daysToExpire: 290,
    balanceQty: 45,
    minQty: 20,
    baseUnit: "ขวด",
    largeUnitRatio: 10,
    largeUnitName: "กล่อง",
    conversionFormula: "1 กล่อง = 10 ขวด (ขวดละ 2.5 มล.)",
    defaultInstruction: "หยอดตาข้างที่เป็นต้อหิน ครั้งละ 1 หยด วันละ 1 ครั้ง ก่อนนอน",
    costPrice: 380,
    sellPrice: 650,
    hasPendingPo: false
  },
  {
    id: 2,
    code: "MED-002",
    tmtCode: "TMT-519820",
    tradeName: "Xanax 0.5 mg Tablet",
    genericName: "Alprazolam 0.5 mg Tablet",
    dosageForm: "ยาเม็ด (Tablet)",
    category: "psych",
    categoryLabel: "ยาจิตเวช (ควบคุม วจ.2)",
    fdaClass: "วจ.2",
    coldChain: false,
    budDays: null,
    subStock: "dispensary",
    locationMain: "ตู้เซฟยาควบคุมพิเศษ (จิตเวช)",
    locationSub: "คลังห้องจ่ายยา (ล็อกนิรภัย S-01)",
    lotNo: "LOT-690310",
    expiryDate: "28 พ.ย. 69",
    daysToExpire: 31,
    balanceQty: 1250,
    minQty: 300,
    baseUnit: "เม็ด",
    largeUnitRatio: 100,
    largeUnitName: "กล่อง",
    conversionFormula: "1 กล่อง = 10 แผง = 100 เม็ด",
    defaultInstruction: "รับประทานครั้งละ 1 เม็ด วันละ 1 ครั้ง ก่อนนอน (ระวังอาการง่วงซึม)",
    costPrice: 4.5,
    sellPrice: 12,
    hasPendingPo: false
  },
  {
    id: 3,
    code: "MED-003",
    tmtCode: "TMT-630192",
    tradeName: "Hialid 0.1% Ophthalmic Solution (5 mL)",
    genericName: "Sodium Hyaluronate 0.1% Eye Drops",
    dosageForm: "ยาหยอดตา (Eye Drops)",
    category: "ophtho",
    categoryLabel: "ยาหยอดตา (จักษุ)",
    fdaClass: null,
    coldChain: false,
    budDays: 30,
    subStock: "dispensary",
    locationMain: "คลังห้องจ่ายยา (ชั้น A-02)",
    locationSub: "โซนยาหยอดตารักษาตาแห้ง",
    lotNo: "LOT-690901",
    expiryDate: "30 ก.ย. 70",
    daysToExpire: 337,
    balanceQty: 18,
    minQty: 40,
    baseUnit: "ขวด",
    largeUnitRatio: 10,
    largeUnitName: "กล่อง",
    conversionFormula: "1 กล่อง = 10 ขวด (ขวดละ 5 มล.)",
    defaultInstruction: "หยอดตาทั้งสองข้าง (OU) ครั้งละ 1 หยด วันละ 4 ครั้ง หรือเมื่อตาแห้ง",
    costPrice: 95,
    sellPrice: 190,
    hasPendingPo: true
  },
  {
    id: 4,
    code: "MED-004",
    tmtCode: "TMT-528841",
    tradeName: "Rivotril 2 mg Tablet",
    genericName: "Clonazepam 2 mg Tablet",
    dosageForm: "ยาเม็ด (Tablet)",
    category: "psych",
    categoryLabel: "ยาจิตเวช (ควบคุม วจ.4)",
    fdaClass: "วจ.4",
    coldChain: false,
    budDays: null,
    subStock: "dispensary",
    locationMain: "ตู้เซฟยาควบคุมพิเศษ (จิตเวช)",
    locationSub: "คลังห้องจ่ายยา (ล็อกนิรภัย S-02)",
    lotNo: "LOT-690522",
    expiryDate: "15 พ.ค. 70",
    daysToExpire: 199,
    balanceQty: 850,
    minQty: 200,
    baseUnit: "เม็ด",
    largeUnitRatio: 100,
    largeUnitName: "กล่อง",
    conversionFormula: "1 กล่อง = 10 แผง = 100 เม็ด",
    defaultInstruction: "รับประทานครั้งละ 0.5 - 1 เม็ด วันละ 1 ครั้ง ก่อนนอน ตามแพทย์สั่ง",
    costPrice: 3.8,
    sellPrice: 10,
    hasPendingPo: false
  },
  {
    id: 5,
    code: "MED-005",
    tmtCode: "TMT-882014",
    tradeName: "Eylea 40 mg/mL Intravitreal Injection",
    genericName: "Aflibercept 4 mg / 0.1 mL Vial (Anti-VEGF)",
    dosageForm: "ยาฉีดเข้าวุ้นตา (Intravitreal Vial)",
    category: "ophtho",
    categoryLabel: "ยาฉีดวุ้นตา (จักษุ)",
    fdaClass: null,
    coldChain: true,
    budDays: 1,
    subStock: "treatment",
    locationMain: "ตู้เย็นห้องตรวจจักษุ (2-8°C)",
    locationSub: "ห้องหัตถการปลอดเชื้อ Minor OR-Eye",
    lotNo: "LOT-690219",
    expiryDate: "10 ธ.ค. 69",
    daysToExpire: 43,
    balanceQty: 4,
    minQty: 6,
    baseUnit: "ไวอัล",
    largeUnitRatio: 1,
    largeUnitName: "กล่อง",
    conversionFormula: "1 กล่อง = 1 ไวอัล (ใช้ครั้งเดียวต่อเคส)",
    defaultInstruction: "สำหรับจักษุแพทย์ฉีดเข้าวุ้นตา (Intravitreal Injection) เก็บที่ 2-8°C ห้ามแช่แข็ง",
    costPrice: 18500,
    sellPrice: 24500,
    hasPendingPo: true
  },
  {
    id: 6,
    code: "MED-006",
    tmtCode: "TMT-601492",
    tradeName: "Vigamox 0.5% Eye Drops (5 mL)",
    genericName: "Moxifloxacin HCl 0.5% Ophthalmic Solution",
    dosageForm: "ยาหยอดตาปฏิชีวนะ",
    category: "ophtho",
    categoryLabel: "ยาหยอดตา (จักษุ)",
    fdaClass: null,
    coldChain: false,
    budDays: 30,
    subStock: "dispensary",
    locationMain: "คลังห้องจ่ายยา (ชั้น A-03)",
    locationSub: "โซนยาปฏิชีวนะหยอดตา",
    lotNo: "LOT-690711",
    expiryDate: "20 ก.ค. 70",
    daysToExpire: 265,
    balanceQty: 60,
    minQty: 25,
    baseUnit: "ขวด",
    largeUnitRatio: 10,
    largeUnitName: "กล่อง",
    conversionFormula: "1 กล่อง = 10 ขวด (ขวดละ 5 มล.)",
    defaultInstruction: "หยอดตาข้างที่ติดเชื้อ ครั้งละ 1 หยด วันละ 3 ครั้ง (เช้า-กลางวัน-เย็น) ติดต่อกัน 7 วัน",
    costPrice: 160,
    sellPrice: 320,
    hasPendingPo: false
  },
  {
    id: 7,
    code: "MED-007",
    tmtCode: "TMT-539011",
    tradeName: "Ritalin 10 mg Tablet",
    genericName: "Methylphenidate HCl 10 mg Tablet",
    dosageForm: "ยาเม็ด (Tablet)",
    category: "psych",
    categoryLabel: "ยาจิตเวช (ควบคุม วจ.2)",
    fdaClass: "วจ.2",
    coldChain: false,
    budDays: null,
    subStock: "dispensary",
    locationMain: "ตู้เซฟยาควบคุมพิเศษ (จิตเวช)",
    locationSub: "คลังห้องจ่ายยา (ล็อกนิรภัย S-01)",
    lotNo: "LOT-690405",
    expiryDate: "30 เม.ย. 70",
    daysToExpire: 184,
    balanceQty: 90,
    minQty: 150,
    baseUnit: "เม็ด",
    largeUnitRatio: 30,
    largeUnitName: "กล่อง",
    conversionFormula: "1 กล่อง = 3 แผง = 30 เม็ด",
    defaultInstruction: "รับประทานครั้งละ 1 เม็ด วันละ 2 ครั้ง หลังอาหารเช้าและเที่ยง",
    costPrice: 8.5,
    sellPrice: 18,
    hasPendingPo: true
  },
  {
    id: 8,
    code: "MED-008",
    tmtCode: "TMT-710294",
    tradeName: "Mydriacyl 1% Eye Drops (15 mL)",
    genericName: "Tropicamide 1% Ophthalmic Solution (ยาขยายม่านตา)",
    dosageForm: "ยาหยอดตาขยายม่านตา",
    category: "ophtho",
    categoryLabel: "ยาหยอดตา (จักษุ)",
    fdaClass: null,
    coldChain: true,
    budDays: 28,
    subStock: "treatment",
    locationMain: "ตู้เย็นห้องตรวจจักษุ (2-8°C)",
    locationSub: "สำหรับพยาบาลหยอดขยายม่านตาก่อนตรวจจอตา",
    lotNo: "LOT-681215",
    expiryDate: "20 พ.ย. 69",
    daysToExpire: 23,
    balanceQty: 12,
    minQty: 10,
    baseUnit: "ขวด",
    largeUnitRatio: 12,
    largeUnitName: "กล่อง",
    conversionFormula: "1 กล่อง = 12 ขวด (ขวดละ 15 มล.)",
    defaultInstruction: "ใช้เฉพาะในห้องตรวจจักษุ: หยอดตา 1 หยด ซ้ำทุก 5-10 นาที รวม 3 ครั้งก่อนส่องจอประสาทตา",
    costPrice: 145,
    sellPrice: 280,
    hasPendingPo: false
  },
  {
    id: 9,
    code: "MED-009",
    tmtCode: "TMT-541108",
    tradeName: "Stilnox 10 mg Film-Coated Tablet",
    genericName: "Zolpidem Tartrate 10 mg Tablet",
    dosageForm: "ยาเม็ดเคลือบฟิล์ม",
    category: "psych",
    categoryLabel: "ยาจิตเวช (ควบคุม วจ.2)",
    fdaClass: "วจ.2",
    coldChain: false,
    budDays: null,
    subStock: "dispensary",
    locationMain: "ตู้เซฟยาควบคุมพิเศษ (จิตเวช)",
    locationSub: "คลังห้องจ่ายยา (ล็อกนิรภัย S-01)",
    lotNo: "LOT-690618",
    expiryDate: "18 มิ.ย. 70",
    daysToExpire: 233,
    balanceQty: 420,
    minQty: 100,
    baseUnit: "เม็ด",
    largeUnitRatio: 20,
    largeUnitName: "กล่อง",
    conversionFormula: "1 กล่อง = 2 แผง = 20 เม็ด",
    defaultInstruction: "รับประทานครั้งละ 1 เม็ด ทันทีก่อนเข้านอน (ห้ามขับรถหลังรับประทานยา)",
    costPrice: 18,
    sellPrice: 38,
    hasPendingPo: false
  },
  {
    id: 10,
    code: "MED-010",
    tmtCode: "TMT-901145",
    tradeName: "Fluorescein Sodium Ophthalmic Strips (Sterile)",
    genericName: "แผ่นย้อมสีกระจกตาปลอดเชื้อ (100 Strips/Box)",
    dosageForm: "เวชภัณฑ์ตรวจตา (Diagnostic Strip)",
    category: "supply",
    categoryLabel: "เวชภัณฑ์ (จักษุ)",
    fdaClass: null,
    coldChain: false,
    budDays: null,
    subStock: "treatment",
    locationMain: "คลังห้องตรวจจักษุ (ตู้ C-01)",
    locationSub: "เบิกใช้ในห้องตรวจ Slit-Lamp & Goldmann Tonometry",
    lotNo: "LOT-690120",
    expiryDate: "15 ธ.ค. 69",
    daysToExpire: 48,
    balanceQty: 300,
    minQty: 100,
    baseUnit: "แผ่น",
    largeUnitRatio: 100,
    largeUnitName: "กล่อง",
    conversionFormula: "1 กล่อง = 100 แผ่นปลอดเชื้อ",
    defaultInstruction: "ใช้แตะย้อมผิวกระจกตาเพื่อตรวจรอยถลอกหรือวัดความดันลูกตา",
    costPrice: 3.5,
    sellPrice: 15,
    hasPendingPo: false
  },
  {
    id: 11,
    code: "MED-011",
    tmtCode: "TMT-550912",
    tradeName: "Zoloft 50 mg Tablet",
    genericName: "Sertraline HCl 50 mg Film-Coated Tablet (SSRI)",
    dosageForm: "ยาเม็ด (Tablet)",
    category: "psych",
    categoryLabel: "ยาจิตเวช (ยาอันตราย)",
    fdaClass: "ยาอันตราย",
    coldChain: false,
    budDays: null,
    subStock: "main",
    locationMain: "คลังใหญ่ (ชั้น B-02)",
    locationSub: "สต็อกสำรองพร้อมโอนเข้าห้องจ่ายยา",
    lotNo: "LOT-690825",
    expiryDate: "30 ส.ค. 71",
    daysToExpire: 670,
    balanceQty: 1800,
    minQty: 300,
    baseUnit: "เม็ด",
    largeUnitRatio: 30,
    largeUnitName: "กล่อง",
    conversionFormula: "1 กล่อง = 2 แผง = 30 เม็ด",
    defaultInstruction: "รับประทานครั้งละ 1 เม็ด วันละ 1 ครั้ง หลังอาหารเช้าทุกวันอย่างต่อเนื่อง",
    costPrice: 14,
    sellPrice: 32,
    hasPendingPo: false
  },
  {
    id: 12,
    code: "MED-012",
    tmtCode: "TMT-904882",
    tradeName: "Sterile Eye Pad & Micro-Swab Set (IPL / OR Pack)",
    genericName: "ชุดก๊อซปิดตาปลอดเชื้อและสำลีก้านเช็ดเปลือกตา",
    dosageForm: "เวชภัณฑ์สิ้นเปลือง",
    category: "supply",
    categoryLabel: "เวชภัณฑ์สิ้นเปลือง",
    fdaClass: null,
    coldChain: false,
    budDays: null,
    subStock: "treatment",
    locationMain: "คลังห้องหัตถการจักษุ (ชั้น C-03)",
    locationSub: "ตัดยอดตามคอร์ส IPL Dry Eye และห้องผ่าตัดเล็ก",
    lotNo: "LOT-690501",
    expiryDate: "01 พ.ค. 71",
    daysToExpire: 550,
    balanceQty: 0,
    minQty: 50,
    baseUnit: "ชุด",
    largeUnitRatio: 50,
    largeUnitName: "กล่อง",
    conversionFormula: "1 กล่อง = 50 ชุดปลอดเชื้อ",
    defaultInstruction: "ใช้ทำความสะอาดเปลือกตาและปิดตาหลังทำหัตถการจักษุ",
    costPrice: 22,
    sellPrice: 60,
    hasPendingPo: true
  }
];

let pharmacyStockLogsData = [
  {
    id: 101,
    datetime: "28 ต.ค. 69 • 10:12 น.",
    type: "dispense",
    typeLabel: "จ่ายยาผู้ป่วย (FEFO)",
    medCode: "MED-002",
    medName: "Xanax 0.5 mg Tablet",
    lotNo: "LOT-690310 (Exp: 28 พ.ย. 69)",
    fromTo: "ตู้เซฟจิตเวช ➔ ผู้ป่วย HN 1252569-69",
    changeText: "-30 เม็ด (-0.3 กล่อง)",
    isPositive: false,
    balanceText: "1,250 เม็ด (12.5 กล่อง)",
    actor: "ภก. ธีรภัทร • นพ. วินัย (ว.24819)"
  },
  {
    id: 102,
    datetime: "28 ต.ค. 69 • 09:45 น.",
    type: "transfer",
    typeLabel: "โอนย้ายคลังย่อย",
    medCode: "MED-001",
    medName: "Xalatan 0.005% Eye Drops",
    lotNo: "LOT-690814 (Exp: 15 ส.ค. 70)",
    fromTo: "คลังใหญ่ ➔ ตู้เย็นห้องตรวจจักษุ (2-8°C)",
    changeText: "+20 ขวด (+2 กล่อง)",
    isPositive: true,
    balanceText: "45 ขวด (4.5 กล่อง)",
    actor: "พว. สมศรี ส้มแดง (เบิกเข้าห้องตรวจ)"
  },
  {
    id: 103,
    datetime: "28 ต.ค. 69 • 09:10 น.",
    type: "receive",
    typeLabel: "รับเข้าคลัง (PO)",
    medCode: "MED-011",
    medName: "Zoloft 50 mg Tablet",
    lotNo: "LOT-690825 (Exp: 30 ส.ค. 71)",
    fromTo: "PO-2569-1041 ➔ คลังใหญ่ (ชั้น B-02)",
    changeText: "+600 เม็ด (+20 กล่อง)",
    isPositive: true,
    balanceText: "1,800 เม็ด (60 กล่อง)",
    actor: "ภก. ธีรภัทร เวชกิจ (ตรวจรับ)"
  },
  {
    id: 104,
    datetime: "27 ต.ค. 69 • 17:30 น.",
    type: "adjust",
    typeLabel: "ตัดจ่าย BUD เกิน 28 วัน",
    medCode: "MED-008",
    medName: "Mydriacyl 1% Eye Drops (15 mL)",
    lotNo: "LOT-681215 (Exp: 20 พ.ย. 69)",
    fromTo: "ตู้เย็นห้องตรวจจักษุ ➔ ทำลายยาเปิดขวดเกินกำหนด",
    changeText: "-2 ขวด",
    isPositive: false,
    balanceText: "12 ขวด (1 กล่อง)",
    actor: "อนุมัติโดย ภก. ธีรภัทร (ภ.29410)"
  },
  {
    id: 105,
    datetime: "27 ต.ค. 69 • 15:20 น.",
    type: "dispense",
    typeLabel: "จ่ายยาผู้ป่วย (FEFO)",
    medCode: "MED-004",
    medName: "Rivotril 2 mg Tablet (วจ.4)",
    lotNo: "LOT-690522 (Exp: 15 พ.ค. 70)",
    fromTo: "ตู้เซฟจิตเวช ➔ ผู้ป่วย HN 1252570-69",
    changeText: "-60 เม็ด (-0.6 กล่อง)",
    isPositive: false,
    balanceText: "850 เม็ด (8.5 กล่อง)",
    actor: "ภก. ธีรภัทร • พญ. รัชดาพร (ว.31904)"
  },
  {
    id: 106,
    datetime: "27 ต.ค. 69 • 13:40 น.",
    type: "dispense",
    typeLabel: "ตัดสต็อกหัตถการจักษุ",
    medCode: "MED-005",
    medName: "Eylea 40 mg/mL Intravitreal Vial",
    lotNo: "LOT-690219 (Exp: 10 ธ.ค. 69)",
    fromTo: "ตู้เย็น Minor OR-Eye ➔ ผู้ป่วย HN 1252570-69",
    changeText: "-1 ไวอัล (-1 กล่อง)",
    isPositive: false,
    balanceText: "4 ไวอัล (4 กล่อง)",
    actor: "พญ. รัชดาพร เกียรติไพบูลย์ (ฉีดวุ้นตา OD)"
  }
];

let fdaPsychDispenseRecords = [
  {
    date: "28 ต.ค. 69",
    medName: "Xanax 0.5 mg (Alprazolam)",
    fdaClass: "วัตถุออกฤทธิ์ฯ ประเภท 2 (วจ.2)",
    lotNo: "LOT-690310",
    expiry: "28 พ.ย. 69",
    patientName: "นาย ชัยรัตน์ โสภณ",
    citizenId: "3-1012-0089-4152",
    hn: "1252569-69",
    doctorName: "นพ. วินัย เลิศเวชกุล",
    licenseNo: "ว.24819",
    dispensedQty: "30 เม็ด",
    remainQty: "1,250 เม็ด"
  },
  {
    date: "27 ต.ค. 69",
    medName: "Rivotril 2 mg (Clonazepam)",
    fdaClass: "วัตถุออกฤทธิ์ฯ ประเภท 4 (วจ.4)",
    lotNo: "LOT-690522",
    expiry: "15 พ.ค. 70",
    patientName: "นาง วิไลพร มิ่งขวัญ",
    citizenId: "1-5099-0124-3301",
    hn: "1252570-69",
    doctorName: "พญ. รัชดาพร เกียรติไพบูลย์",
    licenseNo: "ว.31904",
    dispensedQty: "60 เม็ด",
    remainQty: "850 เม็ด"
  },
  {
    date: "26 ต.ค. 69",
    medName: "Ritalin 10 mg (Methylphenidate)",
    fdaClass: "วัตถุออกฤทธิ์ฯ ประเภท 2 (วจ.2)",
    lotNo: "LOT-690405",
    expiry: "30 เม.ย. 70",
    patientName: "ด.ช. ปัณณธร วงศ์เจริญ",
    citizenId: "1-1004-0218-7654",
    hn: "1252571-69",
    doctorName: "พญ. สุภัทรา รักษ์ดวงตา",
    licenseNo: "ว.38912",
    dispensedQty: "30 เม็ด",
    remainQty: "90 เม็ด"
  },
  {
    date: "25 ต.ค. 69",
    medName: "Stilnox 10 mg (Zolpidem)",
    fdaClass: "วัตถุออกฤทธิ์ฯ ประเภท 2 (วจ.2)",
    lotNo: "LOT-690618",
    expiry: "18 มิ.ย. 70",
    patientName: "นาย สมศักดิ์ กิจเจริญ",
    citizenId: "3-1201-0054-9081",
    hn: "1252572-69",
    doctorName: "นพ. ภัทรดนัย พิชิตชัย",
    licenseNo: "ว.29510",
    dispensedQty: "14 เม็ด",
    remainQty: "420 เม็ด"
  }
];

function getMedStockStatus(item) {
  if (item.balanceQty <= 0) return 'out';
  if (item.balanceQty <= item.minQty) return 'low';
  return 'normal';
}

function renderPharmacyInventory() {
  // Update KPI Cards (Keeping reference highlights or dynamic updates)
  const tbody = document.getElementById('pharmacyTableBody');
  const emptyState = document.getElementById('pharmacyEmptyState');
  if (!tbody) return;

  // Filter items
  let filtered = pharmacyInventoryData.filter(item => {
    const status = getMedStockStatus(item);

    // 1. KPI Filter
    if (pharmacyKpiFilter === 'low' && status === 'normal') return false;
    if (pharmacyKpiFilter === 'expiry' && item.daysToExpire > 90) return false;
    if (pharmacyKpiFilter === 'po' && !item.hasPendingPo) return false;

    // 2. Sub-Stock Location Filter
    if (pharmacyLocationFilter !== 'all' && item.subStock !== pharmacyLocationFilter) return false;

    // 3. Category / Special Control Filter
    if (pharmacyCategoryFilter === 'ophtho' && item.category !== 'ophtho') return false;
    if (pharmacyCategoryFilter === 'psych' && item.category !== 'psych') return false;
    if (pharmacyCategoryFilter === 'supply' && item.category !== 'supply') return false;
    if (pharmacyCategoryFilter === 'cold' && (!item.coldChain && !item.budDays)) return false;

    // 4. Search Query
    if (pharmacySearchQuery) {
      const q = pharmacySearchQuery.toLowerCase();
      const match = item.code.toLowerCase().includes(q) ||
                    item.tmtCode.toLowerCase().includes(q) ||
                    item.tradeName.toLowerCase().includes(q) ||
                    item.genericName.toLowerCase().includes(q) ||
                    item.lotNo.toLowerCase().includes(q) ||
                    item.categoryLabel.toLowerCase().includes(q) ||
                    item.locationMain.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

  const showingEl = document.getElementById('pharmShowingCount');
  if (showingEl) showingEl.textContent = filtered.length;

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    if (emptyState) emptyState.style.display = 'flex';
    return;
  }
  if (emptyState) emptyState.style.display = 'none';

  tbody.innerHTML = filtered.map(item => {
    const status = getMedStockStatus(item);

    // Category Tag Class
    let catTagClass = 'pharm-tag-ophtho';
    if (item.category === 'psych') catTagClass = 'pharm-tag-psych';
    else if (item.category === 'supply') catTagClass = 'pharm-tag-supply';

    // Expiry Highlight (FEFO Alert if <= 60-90 days)
    let expClass = 'pharm-exp-normal';
    let expAlertText = `เหลือ ${item.daysToExpire} วัน`;
    if (item.daysToExpire <= 35) {
      expClass = 'pharm-exp-danger';
      expAlertText = `⚠️ ใกล้หมดอายุ (${item.daysToExpire} วัน)`;
    } else if (item.daysToExpire <= 90) {
      expClass = 'pharm-exp-warning';
      expAlertText = `⚠️ เฝ้าระวัง (${item.daysToExpire} วัน)`;
    }

    // Large unit calculation
    const largeQty = (item.balanceQty / (item.largeUnitRatio || 1));
    const largeQtyFormatted = Number.isInteger(largeQty) ? largeQty : largeQty.toFixed(1);

    // Stock Status Badge
    let statusBadgeHtml = `<span class="pharm-status-badge pharm-status-normal">✓ ปกติ</span>`;
    if (status === 'low') {
      statusBadgeHtml = `<span class="pharm-status-badge pharm-status-low">⚠️ ใกล้หมด</span>`;
    } else if (status === 'out') {
      statusBadgeHtml = `<span class="pharm-status-badge pharm-status-out">✕ หมดสต็อก</span>`;
    }

    return `
      <tr>
        <!-- 1. รหัสยา / ชื่อรายการ -->
        <td>
          <div class="pharm-med-code-row">
            <span class="pharm-med-code">${item.code}</span>
            <span class="pharm-tmt-code">${item.tmtCode}</span>
            ${item.hasPendingPo ? `<span style="font-size: 10.5px; font-weight: 700; background: #EFF6FF; color: #1D4ED8; border: 1px solid #BFDBFE; padding: 1px 6px; border-radius: 4px;">รอรับ PO</span>` : ''}
          </div>
          <div class="pharm-trade-name">${item.tradeName}</div>
          <div class="pharm-generic-name">${item.genericName}</div>
          <div class="pharm-label-hint" title="ฉลากยาอัตโนมัติ: ${item.defaultInstruction}">
            <i data-lucide="tag" style="width: 11px; height: 11px;"></i>
            <span>${item.defaultInstruction.length > 48 ? item.defaultInstruction.slice(0, 48) + '...' : item.defaultInstruction}</span>
          </div>
        </td>

        <!-- 2. หมวดหมู่ / ประเภท -->
        <td>
          <div class="pharm-tags-stack">
            <span class="pharm-tag-pill ${catTagClass}">
              ${item.fdaClass ? '🔒 ' : ''}${item.categoryLabel}
            </span>
            ${item.coldChain ? `
              <span class="pharm-subtag-cold">
                ❄️ เก็บในตู้เย็น (2-8°C)
              </span>
            ` : ''}
            ${item.budDays ? `
              <span class="pharm-subtag-bud">
                ⏳ หลังเปิดขวดอยู่ได้ ${item.budDays} วัน
              </span>
            ` : ''}
          </div>
        </td>

        <!-- 3. คลังที่เก็บ / ที่ตั้ง -->
        <td>
          <div class="pharm-loc-main">${item.locationMain}</div>
          <div class="pharm-loc-sub">${item.locationSub}</div>
        </td>

        <!-- 4. Lot ล่าสุด / วันหมดอายุ (FEFO) -->
        <td>
          <div class="pharm-lot-badge">${item.lotNo}</div>
          <div class="${expClass}">หมดอายุ: ${item.expiryDate}</div>
          <div style="font-size: 11px; color: ${item.daysToExpire <= 90 ? '#D97706' : '#64748B'}; margin-top: 2px;">
            ${expAlertText}
          </div>
        </td>

        <!-- 5. ยอดคงเหลือ (Stock Balance & Unit Conversion) -->
        <td>
          <div class="pharm-stock-main">${item.balanceQty.toLocaleString('th-TH')} ${item.baseUnit}</div>
          <div class="pharm-stock-large">(${largeQtyFormatted} ${item.largeUnitName})</div>
          <div class="pharm-stock-conv">${item.conversionFormula}</div>
        </td>

        <!-- 6. สถานะสต็อก -->
        <td style="text-align: center;">
          ${statusBadgeHtml}
          <div style="font-size: 11px; color: #64748B; margin-top: 4px;">
            Min: ${item.minQty} ${item.baseUnit}
          </div>
        </td>

        <!-- 7. การจัดการ (Action) -->
        <td style="text-align: center;">
          <div class="pharm-actions-col">
            <button type="button" class="btn-pharm-stockcard" onclick="openStockCardModal(${item.id})">
              <i data-lucide="file-spreadsheet"></i>
              <span>Stock Card</span>
            </button>
            <button type="button" class="btn-pharm-adjust" onclick="openStockActionModal(${item.id}, 'receive')">
              <i data-lucide="plus"></i>
              <span>รับเข้า / ปรับยอด</span>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function filterPharmacyByKpi(kpiType) {
  // Normalize alias names
  if (kpiType === 'low-stock') kpiType = 'low';
  if (kpiType === 'near-expiry') kpiType = 'expiry';
  if (kpiType === 'pending-po') kpiType = 'po';

  pharmacyKpiFilter = kpiType;

  const cards = {
    all: document.getElementById('pharmKpiAll'),
    low: document.getElementById('pharmKpiLow'),
    expiry: document.getElementById('pharmKpiExpiry'),
    po: document.getElementById('pharmKpiPo')
  };

  Object.entries(cards).forEach(([key, el]) => {
    if (el) el.classList.toggle('active-navy', key === kpiType);
  });

  const banner = document.getElementById('pharmActiveFilterNotice');
  const bannerText = document.getElementById('pharmActiveFilterText');

  if (kpiType === 'all') {
    if (banner) banner.style.display = 'none';
  } else {
    if (banner) banner.style.display = 'flex';
    if (bannerText) {
      if (kpiType === 'low') {
        bannerText.textContent = 'กำลังกรอง: รายการยาใกล้หมดสต็อก / ต่ำกว่าจุดสั่งซื้อ (Min Stock / Reorder Point)';
      } else if (kpiType === 'expiry') {
        bannerText.textContent = 'กำลังกรอง: รายการยาใกล้หมดอายุภายใน 30–90 วัน (FEFO Alert เพื่อเร่งระบายหรือทำเรื่องคืนบริษัทยา)';
      } else if (kpiType === 'po') {
        bannerText.textContent = 'กำลังกรอง: รายการยาที่มีใบสั่งซื้อรอตรวจรับเข้าคลัง (Pending PO 3 ใบสั่งซื้อ)';
      }
    }
  }

  renderPharmacyInventory();
}

function handlePharmacyFilterChange() {
  const locEl = document.getElementById('pharmLocationFilter');
  const catEl = document.getElementById('pharmCategoryFilter');
  if (locEl) pharmacyLocationFilter = locEl.value;
  if (catEl) pharmacyCategoryFilter = catEl.value;
  renderPharmacyInventory();
}

function handlePharmacySearchInput(val) {
  pharmacySearchQuery = (val || '').trim();
  const clearBtn = document.getElementById('clearPharmSearchBtn');
  if (clearBtn) clearBtn.style.display = pharmacySearchQuery ? 'flex' : 'none';
  renderPharmacyInventory();
}

function clearPharmacySearch() {
  const input = document.getElementById('pharmSearchInput');
  const clearBtn = document.getElementById('clearPharmSearchBtn');
  if (input) input.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  pharmacySearchQuery = '';
  renderPharmacyInventory();
}

function resetPharmacyFilters() {
  pharmacyKpiFilter = 'all';
  pharmacyLocationFilter = 'all';
  pharmacyCategoryFilter = 'all';
  pharmacySearchQuery = '';

  const locEl = document.getElementById('pharmLocationFilter');
  const catEl = document.getElementById('pharmCategoryFilter');
  const searchEl = document.getElementById('pharmSearchInput');
  const clearBtn = document.getElementById('clearPharmSearchBtn');
  const banner = document.getElementById('pharmActiveFilterNotice');

  if (locEl) locEl.value = 'all';
  if (catEl) catEl.value = 'all';
  if (searchEl) searchEl.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  if (banner) banner.style.display = 'none';

  filterPharmacyByKpi('all');
}

// ==========================================================
// MODAL 1: Stock Card & Movement History
// ==========================================================
function openStockCardModal(medIdOrAll) {
  const modal = document.getElementById('stockCardModal');
  const summaryEl = document.getElementById('stockCardMedSummary');
  const titleEl = document.getElementById('stockCardModalTitle');
  const tbody = document.getElementById('stockCardLogTableBody');

  if (!modal || !tbody) return;

  let logs = pharmacyStockLogsData;

  if (medIdOrAll !== 'all') {
    const med = pharmacyInventoryData.find(m => m.id === medIdOrAll);
    if (med) {
      if (titleEl) titleEl.textContent = `Stock Card: ${med.code} — ${med.tradeName}`;
      if (summaryEl) {
        summaryEl.style.display = 'grid';
        const largeQty = (med.balanceQty / (med.largeUnitRatio || 1)).toFixed(1).replace(/\.0$/, '');
        summaryEl.innerHTML = `
          <div>
            <div style="color: #64748B; font-size: 11.5px;">ชื่อสามัญ / รหัสมาตรฐาน TMT</div>
            <div style="font-weight: 700; color: #0F172A; margin-top: 2px;">${med.genericName} (${med.tmtCode})</div>
            <div style="color: #0F766E; font-size: 11.5px; margin-top: 4px;">วิธีใช้มาตรฐาน: ${med.defaultInstruction}</div>
          </div>
          <div>
            <div style="color: #64748B; font-size: 11.5px;">การแปลงหน่วยนับ (Unit Conversion) & ราคา</div>
            <div style="font-weight: 700; color: #0D3B5E; margin-top: 2px;">${med.conversionFormula}</div>
            <div style="color: #475569; font-size: 11.5px; margin-top: 4px;">ราคาทุน FIFO: ฿${med.costPrice}/${med.baseUnit} • ราคาขาย: ฿${med.sellPrice}/${med.baseUnit}</div>
          </div>
          <div>
            <div style="color: #64748B; font-size: 11.5px;">ยอดคงเหลือปัจจุบัน & Lot ที่จ่ายออก (FEFO)</div>
            <div style="font-weight: 700; font-size: 15px; color: #15803D; margin-top: 2px;">${med.balanceQty.toLocaleString('th-TH')} ${med.baseUnit} (${largeQty} ${med.largeUnitName})</div>
            <div style="color: #475569; font-size: 11.5px; margin-top: 4px;">FEFO Lot: <strong>${med.lotNo}</strong> (Exp: ${med.expiryDate})</div>
          </div>
        `;
      }
      const medLogs = pharmacyStockLogsData.filter(l => l.medCode === med.code);
      logs = medLogs.length > 0 ? medLogs : [
        {
          id: 999,
          datetime: "28 ต.ค. 69 • 08:30 น.",
          type: "receive",
          typeLabel: "ยอดยกมา / ตรวจรับ FEFO",
          medCode: med.code,
          medName: med.tradeName,
          lotNo: `${med.lotNo} (Exp: ${med.expiryDate})`,
          fromTo: `คลังใหญ่ ➔ ${med.locationMain}`,
          changeText: `+${med.balanceQty.toLocaleString('th-TH')} ${med.baseUnit}`,
          isPositive: true,
          balanceText: `${med.balanceQty.toLocaleString('th-TH')} ${med.baseUnit}`,
          actor: "ภก. ธีรภัทร เวชกิจ (ภ.29410)"
        }
      ];
    }
  } else {
    if (titleEl) titleEl.textContent = 'ประวัติการเคลื่อนไหวคลังยาและเวชภัณฑ์ทั้งหมด (Master Stock Card Log)';
    if (summaryEl) summaryEl.style.display = 'none';
  }

  tbody.innerHTML = logs.map(log => {
    let badgeBg = '#E0F2FE';
    let badgeColor = '#0369A1';
    if (log.type === 'receive') {
      badgeBg = '#DCFCE7';
      badgeColor = '#15803D';
    } else if (log.type === 'dispense') {
      badgeBg = '#FEF3C7';
      badgeColor = '#B45309';
    } else if (log.type === 'adjust') {
      badgeBg = '#FEE2E2';
      badgeColor = '#B91C1C';
    }

    return `
      <tr>
        <td style="font-size: 12px; color: #475569; font-weight: 500;">${log.datetime}</td>
        <td>
          <span style="display: inline-block; font-size: 11.5px; font-weight: 700; padding: 3px 9px; border-radius: 9999px; background: ${badgeBg}; color: ${badgeColor};">
            ${log.typeLabel}
          </span>
        </td>
        <td>
          <div style="font-weight: 700; color: #0F172A; font-size: 13px;">${log.medCode} • ${log.medName}</div>
          <div style="font-size: 11.5px; color: #64748B;">${log.lotNo}</div>
        </td>
        <td style="font-size: 12px; color: #334155;">${log.fromTo}</td>
        <td style="text-align: right; font-weight: 700; color: ${log.isPositive ? '#15803D' : '#DC2626'};">
          ${log.changeText}
        </td>
        <td style="text-align: right; font-weight: 700; color: #0D3B5E;">
          ${log.balanceText}
        </td>
        <td style="font-size: 12px; color: #475569;">${log.actor}</td>
      </tr>
    `;
  }).join('');

  modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

function closeStockCardModal() {
  const modal = document.getElementById('stockCardModal');
  if (modal) modal.style.display = 'none';
}

// ==========================================================
// MODAL 2: Receive / Sub-Stock Transfer / Adjust Stock
// ==========================================================
function openStockActionModal(medId = null, initialTab = 'receive') {
  const modal = document.getElementById('stockActionModal');
  const select = document.getElementById('stockActionMedSelect');
  if (!modal || !select) return;

  select.innerHTML = pharmacyInventoryData.map(m => `
    <option value="${m.id}" ${medId === m.id ? 'selected' : ''}>
      ${m.code} — ${m.tradeName} (คงเหลือ: ${m.balanceQty} ${m.baseUnit})
    </option>
  `).join('');

  handleStockActionMedChange();
  switchStockActionTab(initialTab);

  modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

function closeStockActionModal() {
  const modal = document.getElementById('stockActionModal');
  if (modal) modal.style.display = 'none';
}

function handleStockActionMedChange() {
  const select = document.getElementById('stockActionMedSelect');
  const hint = document.getElementById('stockActionUnitHint');
  if (!select || !hint) return;

  const medId = parseInt(select.value, 10);
  const med = pharmacyInventoryData.find(m => m.id === medId);
  if (med) {
    hint.textContent = `การแปลงหน่วยนับอัตโนมัติ: ${med.conversionFormula} • คลังปัจจุบัน: ${med.locationMain}`;
  }
}

function switchStockActionTab(tab) {
  const modeInput = document.getElementById('stockActionMode');
  if (modeInput) modeInput.value = tab;

  document.getElementById('tabBtnStockReceive')?.classList.toggle('active', tab === 'receive');
  document.getElementById('tabBtnStockTransfer')?.classList.toggle('active', tab === 'transfer');
  document.getElementById('tabBtnStockAdjust')?.classList.toggle('active', tab === 'adjust');

  const secReceive = document.getElementById('stockFormSectionReceive');
  const secTransfer = document.getElementById('stockFormSectionTransfer');
  const secAdjust = document.getElementById('stockFormSectionAdjust');

  if (secReceive) secReceive.style.display = tab === 'receive' ? 'grid' : 'none';
  if (secTransfer) secTransfer.style.display = tab === 'transfer' ? 'grid' : 'none';
  if (secAdjust) secAdjust.style.display = tab === 'adjust' ? 'grid' : 'none';
}

function handleStockActionSubmit(e) {
  e.preventDefault();
  const mode = document.getElementById('stockActionMode')?.value || 'receive';
  const medId = parseInt(document.getElementById('stockActionMedSelect')?.value, 10);
  const med = pharmacyInventoryData.find(m => m.id === medId);
  if (!med) return;

  const now = new Date();
  const timeStr = `28 ต.ค. 69 • ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} น.`;

  if (mode === 'receive') {
    const lotNo = document.getElementById('receiveLotNo')?.value.trim() || 'LOT-691028';
    const qty = parseInt(document.getElementById('receiveQty')?.value, 10) || 100;
    const targetLoc = document.getElementById('receiveTargetLocation')?.value || med.locationMain;
    const poRef = document.getElementById('receivePoRef')?.value.trim() || 'รับยาเข้าคลัง';

    med.balanceQty += qty;
    med.lotNo = lotNo;
    med.locationMain = targetLoc;
    med.hasPendingPo = false;

    const largeChange = (qty / (med.largeUnitRatio || 1)).toFixed(1).replace(/\.0$/, '');
    const largeBal = (med.balanceQty / (med.largeUnitRatio || 1)).toFixed(1).replace(/\.0$/, '');

    pharmacyStockLogsData.unshift({
      id: Date.now(),
      datetime: timeStr,
      type: 'receive',
      typeLabel: 'รับเข้าคลัง (FEFO)',
      medCode: med.code,
      medName: med.tradeName,
      lotNo: `${lotNo} (Exp: ${med.expiryDate})`,
      fromTo: `${poRef} ➔ ${targetLoc}`,
      changeText: `+${qty.toLocaleString('th-TH')} ${med.baseUnit} (+${largeChange} ${med.largeUnitName})`,
      isPositive: true,
      balanceText: `${med.balanceQty.toLocaleString('th-TH')} ${med.baseUnit} (${largeBal} ${med.largeUnitName})`,
      actor: 'ภก. ธีรภัทร เวชกิจ (ตรวจรับ)'
    });

    showToast('รับยาเข้าคลังสำเร็จ (FEFO)', `รับ ${med.tradeName} (${lotNo}) จำนวน +${qty} ${med.baseUnit} เข้าสู่ ${targetLoc} แล้ว`, 'success');
  } else if (mode === 'transfer') {
    const fromLoc = document.getElementById('transferFromStock')?.value || 'คลังใหญ่';
    const toLoc = document.getElementById('transferToStock')?.value || 'คลังห้องจ่ายยา';
    const qty = parseInt(document.getElementById('transferQty')?.value, 10) || 20;
    const reqBy = document.getElementById('transferRequester')?.value.trim() || 'พว. สมศรี ส้มแดง';

    med.locationMain = toLoc;
    if (toLoc.includes('ห้องตรวจ') || toLoc.includes('หัตถการ')) med.subStock = 'treatment';
    else if (toLoc.includes('ห้องจ่ายยา')) med.subStock = 'dispensary';

    pharmacyStockLogsData.unshift({
      id: Date.now(),
      datetime: timeStr,
      type: 'transfer',
      typeLabel: 'โอนย้ายคลังย่อย',
      medCode: med.code,
      medName: med.tradeName,
      lotNo: `${med.lotNo} (FEFO)`,
      fromTo: `${fromLoc} ➔ ${toLoc}`,
      changeText: `โอนย้าย ${qty} ${med.baseUnit}`,
      isPositive: true,
      balanceText: `${med.balanceQty.toLocaleString('th-TH')} ${med.baseUnit}`,
      actor: reqBy
    });

    showToast('โอนย้ายคลังย่อยสำเร็จ', `โอนย้าย ${med.tradeName} จำนวน ${qty} ${med.baseUnit} ไปยัง ${toLoc} เรียบร้อย`, 'info');
  } else if (mode === 'adjust') {
    const adjType = document.getElementById('adjustTypeSelect')?.value || 'set';
    const qtyVal = parseInt(document.getElementById('adjustQtyInput')?.value, 10) || 0;
    const reason = document.getElementById('adjustReasonSelect')?.value || 'ตรวจนับสต็อก';
    const approver = document.getElementById('adjustApproverInput')?.value || 'ภก. ธีรภัทร เวชกิจ';

    let changeStr = '';
    let isPos = false;
    if (adjType === 'writeoff') {
      med.balanceQty = Math.max(0, med.balanceQty - qtyVal);
      changeStr = `-${qtyVal} ${med.baseUnit} (Write-off)`;
      isPos = false;
    } else {
      const diff = qtyVal - med.balanceQty;
      med.balanceQty = Math.max(0, qtyVal);
      changeStr = `${diff >= 0 ? '+' : ''}${diff} ${med.baseUnit} (Cycle Count)`;
      isPos = diff >= 0;
    }

    pharmacyStockLogsData.unshift({
      id: Date.now(),
      datetime: timeStr,
      type: 'adjust',
      typeLabel: 'ปรับปรุงสต็อก',
      medCode: med.code,
      medName: med.tradeName,
      lotNo: `${med.lotNo}`,
      fromTo: `${med.locationMain} (${reason})`,
      changeText: changeStr,
      isPositive: isPos,
      balanceText: `${med.balanceQty.toLocaleString('th-TH')} ${med.baseUnit}`,
      actor: `อนุมัติ: ${approver}`
    });

    showToast('บันทึกการปรับปรุงสต็อกแล้ว', `อัปเดตยอด ${med.tradeName} เป็น ${med.balanceQty} ${med.baseUnit} (${reason})`, 'info');
  }

  closeStockActionModal();
  renderPharmacyInventory();
}

// ==========================================================
// MODAL 3: รายงานวัตถุออกฤทธิ์ต่อจิตและประสาท (ขย./วจ. ส่ง อย.)
// ==========================================================
function openFdaPsychReportModal() {
  const modal = document.getElementById('fdaPsychReportModal');
  const tbody = document.getElementById('fdaPsychReportTableBody');
  if (!modal || !tbody) return;

  tbody.innerHTML = fdaPsychDispenseRecords.map(r => `
    <tr>
      <td style="font-weight: 600; color: #334155;">${r.date}</td>
      <td>
        <div style="font-weight: 700; color: #0F172A;">${r.medName}</div>
        <span class="pharm-tag-psych" style="display: inline-block; margin-top: 3px; font-size: 10.5px;">${r.fdaClass}</span>
      </td>
      <td>
        <div class="pharm-lot-badge">${r.lotNo}</div>
        <div style="font-size: 11.5px; color: #64748B;">Exp: ${r.expiry}</div>
      </td>
      <td>
        <div style="font-weight: 700; color: #0F172A;">${r.patientName} (HN: ${r.hn})</div>
        <div style="font-size: 12px; color: #0D3B5E; font-weight: 600;">เลขบัตรประชาชน: ${r.citizenId}</div>
      </td>
      <td>
        <div style="font-weight: 600; color: #1E293B;">${r.doctorName}</div>
        <div style="font-size: 11.5px; color: #64748B;">เลขใบประกอบวิชาชีพ: <strong>${r.licenseNo}</strong></div>
      </td>
      <td style="text-align: right; font-weight: 700; color: #DC2626;">-${r.dispensedQty}</td>
      <td style="text-align: right; font-weight: 700; color: #15803D;">${r.remainQty}</td>
    </tr>
  `).join('');

  modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

function closeFdaPsychReportModal() {
  const modal = document.getElementById('fdaPsychReportModal');
  if (modal) modal.style.display = 'none';
}

function exportFdaReportCsv() {
  playHospitalChime();
  showToast('ส่งออกรายงาน อย. (วจ.2 / วจ.4) สำเร็จ', 'ดาวน์โหลดไฟล์ FDA_Psychotropic_Report_Oct2569.csv เรียบร้อยแล้ว', 'success');
}

// ==========================================================
// MODAL 4: เพิ่มทะเบียนข้อมูลยาและเวชภัณฑ์ใหม่ (Master Data)
// ==========================================================
function openAddMedMasterModal() {
  const modal = document.getElementById('addMedMasterModal');
  if (!modal) return;
  const nextNum = String(pharmacyInventoryData.length + 1).padStart(3, '0');
  const codeInput = document.getElementById('newMedCode');
  if (codeInput) codeInput.value = `MED-${nextNum}`;
  modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

function closeAddMedMasterModal() {
  const modal = document.getElementById('addMedMasterModal');
  if (modal) modal.style.display = 'none';
}

function handleAddMedMasterSubmit(e) {
  e.preventDefault();
  const codeRaw = document.getElementById('newMedCode')?.value.trim() || `MED-0${pharmacyInventoryData.length + 1}`;
  const catRaw = document.getElementById('newMedCategory')?.value || 'ophtho';
  const tradeName = document.getElementById('newMedTradeName')?.value.trim() || 'รายการยาใหม่';
  const genericName = document.getElementById('newMedGenericName')?.value.trim() || '-';
  const unitConv = document.getElementById('newMedUnitConv')?.value.trim() || '1 กล่อง = 10 ขวด';
  const locationMain = document.getElementById('newMedLocation')?.value || 'คลังห้องจ่ายยา (ชั้น A-02)';
  const lotNo = document.getElementById('newMedLot')?.value.trim() || 'LOT-691030';
  const expiryDate = document.getElementById('newMedExpiry')?.value.trim() || '30 ต.ค. 70';
  const initQty = parseInt(document.getElementById('newMedInitQty')?.value, 10) || 100;
  const coldChain = document.getElementById('newMedColdChain')?.checked || false;
  const bud30 = document.getElementById('newMedBud30')?.checked || false;
  const costPrice = parseFloat(document.getElementById('newMedCost')?.value) || 50;
  const sellPrice = parseFloat(document.getElementById('newMedPrice')?.value) || 120;
  const instruction = document.getElementById('newMedInstruction')?.value.trim() || 'ใช้ตามแพทย์สั่ง';

  let category = 'ophtho';
  let categoryLabel = 'ยาหยอดตา (จักษุ)';
  let fdaClass = null;
  let baseUnit = 'ขวด';

  if (catRaw === 'psych-wj4') {
    category = 'psych';
    categoryLabel = 'ยาจิตเวช (ควบคุม วจ.4)';
    fdaClass = 'วจ.4';
    baseUnit = 'เม็ด';
  } else if (catRaw === 'psych-wj2') {
    category = 'psych';
    categoryLabel = 'ยาจิตเวช (ควบคุม วจ.2)';
    fdaClass = 'วจ.2';
    baseUnit = 'เม็ด';
  } else if (catRaw === 'supply') {
    category = 'supply';
    categoryLabel = 'เวชภัณฑ์สิ้นเปลือง';
    baseUnit = 'ชิ้น';
  }

  let subStock = 'dispensary';
  if (locationMain.includes('ตู้เย็น') || locationMain.includes('ห้องตรวจ')) subStock = 'treatment';
  else if (locationMain.includes('คลังใหญ่')) subStock = 'main';

  const newMed = {
    id: Date.now(),
    code: codeRaw.split(' ')[0],
    tmtCode: `TMT-${Math.floor(Math.random() * 899999 + 100000)}`,
    tradeName,
    genericName,
    dosageForm: categoryLabel,
    category,
    categoryLabel,
    fdaClass,
    coldChain,
    budDays: bud30 ? 30 : null,
    subStock,
    locationMain,
    locationSub: "ขึ้นทะเบียนรายการใหม่ (Master Data)",
    lotNo,
    expiryDate,
    daysToExpire: 365,
    balanceQty: initQty,
    minQty: 20,
    baseUnit,
    largeUnitRatio: 10,
    largeUnitName: "กล่อง",
    conversionFormula: unitConv,
    defaultInstruction: instruction,
    costPrice,
    sellPrice,
    hasPendingPo: false
  };

  pharmacyInventoryData.unshift(newMed);

  // Update total KPI counter
  const totalKpiEl = document.getElementById('kpiPharmTotal');
  const totalMasterEl = document.getElementById('pharmTotalMasterCount');
  if (totalKpiEl) totalKpiEl.textContent = parseInt(totalKpiEl.textContent, 10) + 1;
  if (totalMasterEl) totalMasterEl.textContent = parseInt(totalMasterEl.textContent, 10) + 1;

  closeAddMedMasterModal();
  renderPharmacyInventory();
  playHospitalChime();
  showToast('ขึ้นทะเบียนยาใหม่สำเร็จ', `เพิ่ม ${newMed.code} (${newMed.tradeName}) พร้อมตั้งค่าฉลากอัตโนมัติและหน่วยนับแล้ว`, 'success');
}


// ==========================================================
// EXECUTIVE FINANCIAL SUMMARY (หน้าสรุปข้อมูลการเงินสำหรับผู้บริหาร)
// ==========================================================

const executiveFinancialDatasets = {
  today: {
    subtitle: "ข้อมูลวิเคราะห์รายรับ ต้นทุน ค่ามือแพทย์ (DF) และช่องทางชำระเงิน • ประจำวันที่ 28 ตุลาคม 2569",
    revenue: "฿38,600",
    revenueTrend: "▲ +18.2% เทียบค่าเฉลี่ยรายวัน",
    profit: "฿24,100",
    margin: "อัตรากำไรสุทธิ 62.4%",
    doctorFee: "฿8,800",
    pendingClaim: "฿4,200",
    avgBill: "฿2,757",
    billCount: "จากทั้งหมด 14 ใบเสร็จวันนี้",
    costMed: "฿5,700",
    costDf: "฿8,800",
    costDiscount: "฿1,200",
    categories: [
      { name: "หัตถการและผ่าตัดจักษุ (IPL Dry Eye / ฉีดวุ้นตา Anti-VEGF)", amount: "฿17,500", share: 45, color: "#0D3B5E" },
      { name: "ค่ายาและเวชภัณฑ์จักษุ-จิตเวช (Pharmacy & Controlled Drugs)", amount: "฿9,800", share: 25, color: "#0284C7" },
      { name: "แพ็กเกจและคอร์สรักษาต่อเนื่อง (Ophthalmology Packages)", amount: "฿7,500", share: 20, color: "#0F766E" },
      { name: "ค่าธรรมเนียมแพทย์และบริการพยาบาล (OPD & Psychiatric)", amount: "฿3,800", share: 10, color: "#6366F1" }
    ],
    channels: [
      { label: "สแกน QR PromptPay / โอนเงิน", amount: "฿16,400", share: "42.5%", count: "6 รายการ" },
      { label: "เงินสดหน้าร้าน (Cash)", amount: "฿11,000", share: "28.5%", count: "3 รายการ" },
      { label: "จ่ายตรงกรมบัญชีกลาง / ประกันสุขภาพ", amount: "฿7,000", share: "18.1%", count: "3 รายการ" },
      { label: "สิทธิประกันสังคม / บัตรทอง", amount: "฿4,200", share: "10.9%", count: "2 รายการ" }
    ],
    doctors: [
      { name: "พญ. รัชดาพร เกียรติไพบูลย์", dept: "จักษุวิทยาเฉพาะทางจอประสาทตา", cases: 5, gross: "฿16,500", df: "฿3,800", net: "฿12,700", share: "42.7%" },
      { name: "นพ. วินัย เลิศเวชกุล", dept: "จักษุวิทยาต้อหิน & จิตเวชศาสตร์", cases: 4, gross: "฿10,200", df: "฿2,300", net: "฿7,900", share: "26.4%" },
      { name: "นพ. ภัทรดนัย พิชิตชัย", dept: "กระจกตาและแก้ไขสายตา (LASIK/IPL)", cases: 3, gross: "฿7,400", df: "฿1,700", net: "฿5,700", share: "19.2%" },
      { name: "พญ. สุภัทรา รักษ์ดวงตา", dept: "จักษุวิทยาเด็กและกล้ามเนื้อตา", cases: 2, gross: "฿4,500", df: "฿1,000", net: "฿3,500", share: "11.7%" }
    ]
  },
  week: {
    subtitle: "ข้อมูลวิเคราะห์รายรับ ต้นทุน ค่ามือแพทย์ (DF) และช่องทางชำระเงิน • สัปดาห์นี้ (22–28 ต.ค. 2569)",
    revenue: "฿214,800",
    revenueTrend: "▲ +11.5% เทียบสัปดาห์ก่อน",
    profit: "฿131,900",
    margin: "อัตรากำไรสุทธิ 61.4%",
    doctorFee: "฿49,800",
    pendingClaim: "฿16,500",
    avgBill: "฿2,826",
    billCount: "จากทั้งหมด 76 ใบเสร็จ",
    costMed: "฿33,100",
    costDf: "฿49,800",
    costDiscount: "฿4,800",
    categories: [
      { name: "หัตถการและผ่าตัดจักษุ (IPL Dry Eye / ฉีดวุ้นตา Anti-VEGF)", amount: "฿94,500", share: 44, color: "#0D3B5E" },
      { name: "ค่ายาและเวชภัณฑ์จักษุ-จิตเวช (Pharmacy & Controlled Drugs)", amount: "฿55,800", share: 26, color: "#0284C7" },
      { name: "แพ็กเกจและคอร์สรักษาต่อเนื่อง (Ophthalmology Packages)", amount: "฿40,800", share: 19, color: "#0F766E" },
      { name: "ค่าธรรมเนียมแพทย์และบริการพยาบาล (OPD & Psychiatric)", amount: "฿23,700", share: 11, color: "#6366F1" }
    ],
    channels: [
      { label: "สแกน QR PromptPay / โอนเงิน", amount: "฿88,200", share: "41.1%", count: "32 รายการ" },
      { label: "เงินสดหน้าร้าน (Cash)", amount: "฿64,400", share: "30.0%", count: "18 รายการ" },
      { label: "จ่ายตรงกรมบัญชีกลาง / ประกันสุขภาพ", amount: "฿34,700", share: "16.1%", count: "15 รายการ" },
      { label: "สิทธิประกันสังคม / บัตรทอง", amount: "฿27,500", share: "12.8%", count: "11 รายการ" }
    ],
    doctors: [
      { name: "พญ. รัชดาพร เกียรติไพบูลย์", dept: "จักษุวิทยาเฉพาะทางจอประสาทตา", cases: 26, gross: "฿86,400", df: "฿20,100", net: "฿66,300", share: "40.2%" },
      { name: "นพ. วินัย เลิศเวชกุล", dept: "จักษุวิทยาต้อหิน & จิตเวชศาสตร์", cases: 22, gross: "฿58,200", df: "฿13,400", net: "฿44,800", share: "27.1%" },
      { name: "นพ. ภัทรดนัย พิชิตชัย", dept: "กระจกตาและแก้ไขสายตา (LASIK/IPL)", cases: 16, gross: "฿43,000", df: "฿10,000", net: "฿33,000", share: "20.0%" },
      { name: "พญ. สุภัทรา รักษ์ดวงตา", dept: "จักษุวิทยาเด็กและกล้ามเนื้อตา", cases: 12, gross: "฿27,200", df: "฿6,300", net: "฿20,900", share: "12.7%" }
    ]
  },
  month: {
    subtitle: "ข้อมูลวิเคราะห์รายรับ ต้นทุน ค่ามือแพทย์ (DF) และช่องทางชำระเงิน • ประจำเดือน ตุลาคม 2569",
    revenue: "฿842,500",
    revenueTrend: "▲ +14.8% จากเดือนกันยายน 69",
    profit: "฿518,200",
    margin: "อัตรากำไรสุทธิ 61.5%",
    doctorFee: "฿196,400",
    pendingClaim: "฿64,800",
    avgBill: "฿2,855",
    billCount: "จากทั้งหมด 295 ใบเสร็จ",
    costMed: "฿127,900",
    costDf: "฿196,400",
    costDiscount: "฿18,500",
    categories: [
      { name: "หัตถการและผ่าตัดจักษุ (IPL Dry Eye / ฉีดวุ้นตา Anti-VEGF / เลเซอร์จอตา)", amount: "฿365,000", share: 43.3, color: "#0D3B5E" },
      { name: "ค่ายาและเวชภัณฑ์จักษุ-จิตเวช (Pharmacy & Special Drugs)", amount: "฿224,500", share: 26.6, color: "#0284C7" },
      { name: "แพ็กเกจและคอร์สรักษาต่อเนื่อง (Ophthalmology Course Packages)", amount: "฿158,000", share: 18.8, color: "#0F766E" },
      { name: "ค่าธรรมเนียมแพทย์และบริการพยาบาล (OPD & Psychiatric Consultation)", amount: "฿95,000", share: 11.3, color: "#6366F1" }
    ],
    channels: [
      { label: "สแกน QR PromptPay / โอนเงิน", amount: "฿348,000", share: "41.3%", count: "124 รายการ" },
      { label: "เงินสดหน้าร้าน (Cash)", amount: "฿245,500", share: "29.1%", count: "68 รายการ" },
      { label: "จ่ายตรงกรมบัญชีกลาง / ประกันสุขภาพ", amount: "฿132,000", share: "15.7%", count: "61 รายการ" },
      { label: "สิทธิประกันสังคม / บัตรทอง", amount: "฿117,000", share: "13.9%", count: "42 รายการ" }
    ],
    doctors: [
      { name: "พญ. รัชดาพร เกียรติไพบูลย์", dept: "จักษุวิทยาเฉพาะทางจอประสาทตา", cases: 98, gross: "฿338,000", df: "฿78,800", net: "฿259,200", share: "40.1%" },
      { name: "นพ. วินัย เลิศเวชกุล", dept: "จักษุวิทยาต้อหิน & จิตเวชศาสตร์", cases: 84, gross: "฿226,500", df: "฿52,600", net: "฿173,900", share: "26.9%" },
      { name: "นพ. ภัทรดนัย พิชิตชัย", dept: "กระจกตาและแก้ไขสายตา (LASIK/IPL)", cases: 63, gross: "฿168,000", df: "฿39,200", net: "฿128,800", share: "19.9%" },
      { name: "พญ. สุภัทรา รักษ์ดวงตา", dept: "จักษุวิทยาเด็กและกล้ามเนื้อตา", cases: 50, gross: "฿110,000", df: "฿25,800", net: "฿84,200", share: "13.1%" }
    ]
  },
  quarter: {
    subtitle: "ข้อมูลวิเคราะห์รายรับ ต้นทุน ค่ามือแพทย์ (DF) และช่องทางชำระเงิน • ไตรมาส 4/2569 (Q4)",
    revenue: "฿2,480,000",
    revenueTrend: "▲ +19.4% เทียบไตรมาส 3/2569",
    profit: "฿1,532,000",
    margin: "อัตรากำไรสุทธิ 61.8%",
    doctorFee: "฿575,000",
    pendingClaim: "฿142,000",
    avgBill: "฿2,910",
    billCount: "จากทั้งหมด 852 ใบเสร็จ",
    costMed: "฿373,000",
    costDf: "฿575,000",
    costDiscount: "฿52,000",
    categories: [
      { name: "หัตถการและผ่าตัดจักษุ (IPL Dry Eye / ฉีดวุ้นตา Anti-VEGF / เลเซอร์จอตา)", amount: "฿1,090,000", share: 44, color: "#0D3B5E" },
      { name: "ค่ายาและเวชภัณฑ์จักษุ-จิตเวช (Pharmacy & Special Drugs)", amount: "฿645,000", share: 26, color: "#0284C7" },
      { name: "แพ็กเกจและคอร์สรักษาต่อเนื่อง (Ophthalmology Course Packages)", amount: "฿471,000", share: 19, color: "#0F766E" },
      { name: "ค่าธรรมเนียมแพทย์และบริการพยาบาล (OPD & Psychiatric Consultation)", amount: "฿274,000", share: 11, color: "#6366F1" }
    ],
    channels: [
      { label: "สแกน QR PromptPay / โอนเงิน", amount: "฿1,041,600", share: "42.0%", count: "365 รายการ" },
      { label: "เงินสดหน้าร้าน (Cash)", amount: "฿719,200", share: "29.0%", count: "198 รายการ" },
      { label: "จ่ายตรงกรมบัญชีกลาง / ประกันสุขภาพ", amount: "฿372,000", share: "15.0%", count: "172 รายการ" },
      { label: "สิทธิประกันสังคม / บัตรทอง", amount: "฿347,200", share: "14.0%", count: "117 รายการ" }
    ],
    doctors: [
      { name: "พญ. รัชดาพร เกียรติไพบูลย์", dept: "จักษุวิทยาเฉพาะทางจอประสาทตา", cases: 285, gross: "฿992,000", df: "฿230,000", net: "฿762,000", share: "40.0%" },
      { name: "นพ. วินัย เลิศเวชกุล", dept: "จักษุวิทยาต้อหิน & จิตเวชศาสตร์", cases: 242, gross: "฿669,600", df: "฿155,250", net: "฿514,350", share: "27.0%" },
      { name: "นพ. ภัทรดนัย พิชิตชัย", dept: "กระจกตาและแก้ไขสายตา (LASIK/IPL)", cases: 180, gross: "฿496,000", df: "฿115,000", net: "฿381,000", share: "20.0%" },
      { name: "พญ. สุภัทรา รักษ์ดวงตา", dept: "จักษุวิทยาเด็กและกล้ามเนื้อตา", cases: 145, gross: "฿322,400", df: "฿74,750", net: "฿247,650", share: "13.0%" }
    ]
  },
  year: {
    subtitle: "ข้อมูลวิเคราะห์รายรับ ต้นทุน ค่ามือแพทย์ (DF) และช่องทางชำระเงิน • สะสมทั้งปี 2569 (YTD)",
    revenue: "฿9,640,000",
    revenueTrend: "▲ +22.6% เทียบปี 2568",
    profit: "฿5,980,000",
    margin: "อัตรากำไรสุทธิ 62.0%",
    doctorFee: "฿2,218,000",
    pendingClaim: "฿215,000",
    avgBill: "฿2,890",
    billCount: "จากทั้งหมด 3,335 ใบเสร็จ",
    costMed: "฿1,442,000",
    costDf: "฿2,218,000",
    costDiscount: "฿195,000",
    categories: [
      { name: "หัตถการและผ่าตัดจักษุ (IPL Dry Eye / ฉีดวุ้นตา Anti-VEGF / เลเซอร์จอตา)", amount: "฿4,241,600", share: 44, color: "#0D3B5E" },
      { name: "ค่ายาและเวชภัณฑ์จักษุ-จิตเวช (Pharmacy & Special Drugs)", amount: "฿2,506,400", share: 26, color: "#0284C7" },
      { name: "แพ็กเกจและคอร์สรักษาต่อเนื่อง (Ophthalmology Course Packages)", amount: "฿1,831,600", share: 19, color: "#0F766E" },
      { name: "ค่าธรรมเนียมแพทย์และบริการพยาบาล (OPD & Psychiatric Consultation)", amount: "฿1,060,400", share: 11, color: "#6366F1" }
    ],
    channels: [
      { label: "สแกน QR PromptPay / โอนเงิน", amount: "฿4,048,800", share: "42.0%", count: "1,410 รายการ" },
      { label: "เงินสดหน้าร้าน (Cash)", amount: "฿2,892,000", share: "30.0%", count: "825 รายการ" },
      { label: "จ่ายตรงกรมบัญชีกลาง / ประกันสุขภาพ", amount: "฿1,446,000", share: "15.0%", count: "640 รายการ" },
      { label: "สิทธิประกันสังคม / บัตรทอง", amount: "฿1,253,200", share: "13.0%", count: "460 รายการ" }
    ],
    doctors: [
      { name: "พญ. รัชดาพร เกียรติไพบูลย์", dept: "จักษุวิทยาเฉพาะทางจอประสาทตา", cases: 1120, gross: "฿3,856,000", df: "฿887,200", net: "฿2,968,800", share: "40.0%" },
      { name: "นพ. วินัย เลิศเวชกุล", dept: "จักษุวิทยาต้อหิน & จิตเวชศาสตร์", cases: 940, gross: "฿2,602,800", df: "฿598,860", net: "฿2,003,940", share: "27.0%" },
      { name: "นพ. ภัทรดนัย พิชิตชัย", dept: "กระจกตาและแก้ไขสายตา (LASIK/IPL)", cases: 710, gross: "฿1,928,000", df: "฿443,600", net: "฿1,484,400", share: "20.0%" },
      { name: "พญ. สุภัทรา รักษ์ดวงตา", dept: "จักษุวิทยาเด็กและกล้ามเนื้อตา", cases: 565, gross: "฿1,253,200", df: "฿288,340", net: "฿964,860", share: "13.0%" }
    ]
  }
};

function renderBillingExecutiveSummary(periodKey = 'month') {
  const data = executiveFinancialDatasets[periodKey] || executiveFinancialDatasets.month;

  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setTxt('execPeriodSubtitle', data.subtitle);
  setTxt('execKpiRevenue', data.revenue);
  setTxt('execKpiRevenueTrend', data.revenueTrend);
  setTxt('execKpiProfit', data.profit);
  setTxt('execKpiMargin', data.margin);
  setTxt('execKpiDoctorFee', data.doctorFee);
  setTxt('execKpiPendingClaim', data.pendingClaim);
  setTxt('execKpiAvgBill', data.avgBill);
  setTxt('execKpiBillCount', data.billCount);
  setTxt('execCostMed', data.costMed);
  setTxt('execCostDf', data.costDf);
  setTxt('execCostDiscount', data.costDiscount);

  // 1. Render Category Bars
  const catList = document.getElementById('execCategoryBreakdownList');
  if (catList) {
    catList.innerHTML = data.categories.map(c => `
      <div class="exec-cat-row">
        <div class="exec-cat-top">
          <span class="exec-cat-name">${c.name}</span>
          <span class="exec-cat-nums">${c.amount} <small>(${c.share}%)</small></span>
        </div>
        <div class="exec-bar-track">
          <div class="exec-bar-fill" style="width: ${c.share}%; background-color: ${c.color};"></div>
        </div>
      </div>
    `).join('');
  }

  // 2. Render Payment Channels Grid
  const chanGrid = document.getElementById('execPaymentChannelsGrid');
  if (chanGrid) {
    chanGrid.innerHTML = data.channels.map(ch => `
      <div class="exec-pay-card">
        <div class="exec-pay-top">
          <span class="exec-pay-label">${ch.label}</span>
          <span class="exec-pay-share">${ch.share}</span>
        </div>
        <div class="exec-pay-amount">${ch.amount}</div>
        <div class="exec-pay-count">จำนวนธุรกรรม: ${ch.count}</div>
      </div>
    `).join('');
  }

  // 3. Render Doctor Performance Table
  const docBody = document.getElementById('execDoctorPerformanceBody');
  if (docBody) {
    docBody.innerHTML = data.doctors.map(d => `
      <tr>
        <td>
          <div style="font-weight: 700; color: #0F172A;">${d.name}</div>
          <div style="font-size: 11.5px; color: #64748B;">${d.dept}</div>
        </td>
        <td style="text-align: center; font-weight: 700; color: #0D3B5E;">${d.cases} เคส</td>
        <td style="text-align: right; font-weight: 700; color: #0F172A;">${d.gross}</td>
        <td style="text-align: right; font-weight: 600; color: #0284C7;">${d.df}</td>
        <td style="text-align: right; font-weight: 700; color: #15803D;">${d.net}</td>
        <td style="text-align: center;">
          <span style="display: inline-block; font-size: 11.5px; font-weight: 700; padding: 3px 9px; border-radius: 9999px; background: #EFF6FF; color: #1D4ED8;">
            ${d.share}
          </span>
        </td>
      </tr>
    `).join('');
  }

  if (window.lucide) window.lucide.createIcons();
}

function handleExecPeriodChange(periodKey) {
  renderBillingExecutiveSummary(periodKey);
  showToast('อัปเดตช่วงเวลารายงานผู้บริหาร', `แสดงข้อมูลสรุปผลประกอบการช่วง "${periodKey.toUpperCase()}" เรียบร้อยแล้ว`, 'info');
}

function exportExecutiveReport() {
  playHospitalChime();
  showToast('ส่งออกรายงานผู้บริหารสำเร็จ', 'ดาวน์โหลดไฟล์ Executive_Financial_Summary_2569.xlsx เรียบร้อยแล้ว', 'success');
}

function confirmExecutiveShiftAudit() {
  playHospitalChime();
  showToast('อนุมัติปิดกะและรับรองยอดการเงินสำเร็จ', 'บันทึกการตรวจสอบยอดเงินสดและปิดกะการเงินประจำวันเข้าสู่ระบบบัญชีผู้บริหารแล้ว', 'success');
}

// ==========================================================
// LOGIN & ROLE-BASED ACCESS CONTROL (RBAC) MODULE
// ==========================================================

const RBAC_MODULES_LIST = [
  { key: 'home', label: '0. หน้าหลัก (Executive Dashboard)', icon: 'home', navId: 'navHome' },
  { key: 'records', label: '1. เวชระเบียนผู้ป่วย (Medical Records)', icon: 'clipboard-list', navId: 'navRecords' },
  { key: 'appointments', label: '2. ระบบนัดหมาย (Appointments)', icon: 'calendar', navId: 'navAppointments' },
  { key: 'queue', label: '3. ระบบคิวและเรียกตรวจ (Queue System)', icon: 'ticket', navId: 'navQueue' },
  { key: 'exam-room', label: '4. ห้องตรวจแพทย์ (Examination Room)', icon: 'stethoscope', navId: 'navExamRoom' },
  { key: 'billing', label: '5. ระบบการเงิน (Billing & Cashier)', icon: 'receipt', navId: 'navBilling' },
  { key: 'pharmacy', label: '6. ระบบคลังยาและเวชภัณฑ์ (Pharmacy)', icon: 'pill', navId: 'navPharmacy' },
  { key: 'courses', label: '7. ระบบคอร์สจักษุ (Ophthalmology Courses)', icon: 'ticket-check', navId: 'navCourses' },
  { key: 'refer', label: '8. ระบบส่งต่อผู้ป่วย (Patient Refer)', icon: 'corner-up-right', navId: 'navRefer' },
  { key: 'access-control', label: '9. จัดการสิทธิการเข้าถึงระบบ (Access Control)', icon: 'shield-check', navId: 'navAccessControl' },
  { key: 'settings', label: '10. ตั้งค่าระบบและข้อมูลหลัก (Settings & Master Data)', icon: 'settings', navId: 'navSettings' }
];

let rbacRolesConfig = {
  admin: {
    key: 'admin',
    code: 'ROLE_SUPER_ADMIN',
    name: 'ผู้ดูแลระบบสูงสุด (Super Admin)',
    shortBadge: 'Role Admin',
    desc: 'เข้าถึงและจัดการข้อมูลได้ทุกระบบ รวมถึงการตั้งค่าสิทธิ์ผู้ใช้งานและดูรายงานผู้บริหาร',
    permissions: {
      'home':           { view: true, create: true, edit: true, delete: true, export: true },
      'records':        { view: true, create: true, edit: true, delete: true, export: true },
      'appointments':   { view: true, create: true, edit: true, delete: true, export: true },
      'queue':          { view: true, create: true, edit: true, delete: true, export: true },
      'exam-room':      { view: true, create: true, edit: true, delete: true, export: true },
      'billing':        { view: true, create: true, edit: true, delete: true, export: true },
      'pharmacy':       { view: true, create: true, edit: true, delete: true, export: true },
      'courses':        { view: true, create: true, edit: true, delete: true, export: true },
      'refer':          { view: true, create: true, edit: true, delete: true, export: true },
      'access-control': { view: true, create: true, edit: true, delete: true, export: true },
      'settings':       { view: true, create: true, edit: true, delete: true, export: true }
    }
  },
  doctor: {
    key: 'doctor',
    code: 'ROLE_DOCTOR',
    name: 'แพทย์ผู้ตรวจ (Doctor)',
    shortBadge: 'Role Doctor',
    desc: 'ตรวจรักษาผู้ป่วย บันทึกเวชระเบียน สั่งยา ส่งตัว Consult/Refer และดูประวัติการรักษา',
    permissions: {
      'home':           { view: true,  create: false, edit: false, delete: false, export: true  },
      'records':        { view: true,  create: true,  edit: true,  delete: false, export: true  },
      'appointments':   { view: true,  create: true,  edit: true,  delete: false, export: true  },
      'queue':          { view: true,  create: false, edit: true,  delete: false, export: false },
      'exam-room':      { view: true,  create: true,  edit: true,  delete: false, export: true  },
      'billing':        { view: false, create: false, edit: false, delete: false, export: false },
      'pharmacy':       { view: true,  create: false, edit: false, delete: false, export: false },
      'courses':        { view: true,  create: true,  edit: true,  delete: false, export: true  },
      'refer':          { view: true,  create: true,  edit: true,  delete: false, export: true  },
      'access-control': { view: false, create: false, edit: false, delete: false, export: false },
      'settings':       { view: true,  create: false, edit: false, delete: false, export: true  }
    }
  },
  nurse: {
    key: 'nurse',
    code: 'ROLE_NURSE',
    name: 'พยาบาลวิชาชีพ (Nurse)',
    shortBadge: 'Role Nurse',
    desc: 'ลงทะเบียนผู้ป่วย คัดกรองสัญญาณชีพ จัดการคิว นัดหมาย ส่งต่อผู้ป่วย และตัดคอร์สหัตถการจักษุ',
    permissions: {
      'home':           { view: true,  create: false, edit: false, delete: false, export: false },
      'records':        { view: true,  create: true,  edit: true,  delete: false, export: true  },
      'appointments':   { view: true,  create: true,  edit: true,  delete: true,  export: true  },
      'queue':          { view: true,  create: true,  edit: true,  delete: true,  export: false },
      'exam-room':      { view: true,  create: true,  edit: true,  delete: false, export: false },
      'billing':        { view: false, create: false, edit: false, delete: false, export: false },
      'pharmacy':       { view: false, create: false, edit: false, delete: false, export: false },
      'courses':        { view: true,  create: true,  edit: true,  delete: false, export: true  },
      'refer':          { view: true,  create: true,  edit: true,  delete: false, export: true  },
      'access-control': { view: false, create: false, edit: false, delete: false, export: false },
      'settings':       { view: false, create: false, edit: false, delete: false, export: false }
    }
  },
  pharmacist: {
    key: 'pharmacist',
    code: 'ROLE_PHARMACIST',
    name: 'เภสัชกร (Pharmacist)',
    shortBadge: 'Role Pharmacist',
    desc: 'บริหารคลังยาและเวชภัณฑ์ ตรวจสอบประวัติแพ้ยา เบิก-จ่ายยา FEFO และออกรายงาน อย. (ขย./วจ.)',
    permissions: {
      'home':           { view: true,  create: false, edit: false, delete: false, export: false },
      'records':        { view: true,  create: false, edit: true,  delete: false, export: false },
      'appointments':   { view: false, create: false, edit: false, delete: false, export: false },
      'queue':          { view: true,  create: false, edit: false, delete: false, export: false },
      'exam-room':      { view: false, create: false, edit: false, delete: false, export: false },
      'billing':        { view: false, create: false, edit: false, delete: false, export: false },
      'pharmacy':       { view: true,  create: true,  edit: true,  delete: true,  export: true  },
      'courses':        { view: false, create: false, edit: false, delete: false, export: false },
      'refer':          { view: false, create: false, edit: false, delete: false, export: false },
      'access-control': { view: false, create: false, edit: false, delete: false, export: false },
      'settings':       { view: true,  create: false, edit: false, delete: false, export: true  }
    }
  },
  cashier: {
    key: 'cashier',
    code: 'ROLE_CASHIER',
    name: 'เจ้าหน้าที่การเงิน (Cashier)',
    shortBadge: 'Role Cashier',
    desc: 'รับชำระค่ารักษาพยาบาล ออกใบเสร็จ ตรวจสอบสิทธิการรักษา และสรุปยอดปิดกะการเงิน',
    permissions: {
      'home':           { view: true,  create: false, edit: false, delete: false, export: false },
      'records':        { view: true,  create: false, edit: true,  delete: false, export: false },
      'appointments':   { view: true,  create: false, edit: false, delete: false, export: false },
      'queue':          { view: true,  create: false, edit: false, delete: false, export: false },
      'exam-room':      { view: false, create: false, edit: false, delete: false, export: false },
      'billing':        { view: true,  create: true,  edit: true,  delete: true,  export: true  },
      'pharmacy':       { view: false, create: false, edit: false, delete: false, export: false },
      'courses':        { view: true,  create: true,  edit: true,  delete: false, export: true  },
      'refer':          { view: false, create: false, edit: false, delete: false, export: false },
      'access-control': { view: false, create: false, edit: false, delete: false, export: false },
      'settings':       { view: false, create: false, edit: false, delete: false, export: false }
    }
  }
};

let clinicUserAccounts = [
  {
    id: 'USR-001',
    staffCode: 'EMP-001',
    fullName: 'คุณ สแตนลีย์ วงศ์สุวรรณ',
    fullNameEn: 'Mr. Stanley Wongsuwan',
    email: 'stanley@gmail.com',
    phone: '081-234-5678',
    citizenId: '1-1002-00345-67-8',
    role: 'admin',
    department: 'ฝ่ายบริหารและเทคโนโลยีสารสนเทศ',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
    startDate: '01/02/2565',
    lastLogin: '29 ต.ค. 69 • 11:47 น.',
    notes: 'ผู้ดูแลระบบสารสนเทศคลินิกและสิทธิ์การเข้าถึงข้อมูล',
    status: 'active'
  },
  {
    id: 'USR-002',
    staffCode: 'EMP-002',
    fullName: 'นพ. เปรมชัย เสือขาว',
    email: 'premchai.md@clinic.com',
    role: 'doctor',
    department: 'ห้องตรวจจักษุเฉพาะทาง 1',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=120',
    lastLogin: '28 ต.ค. 69 • 20:15 น.',
    status: 'active'
  },
  {
    id: 'USR-003',
    staffCode: 'EMP-003',
    fullName: 'พว. สมศรี ส้มแดง',
    email: 'somsri.nurse@clinic.com',
    role: 'nurse',
    department: 'แผนกการพยาบาลและคัดกรอง',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=120',
    lastLogin: '28 ต.ค. 69 • 21:10 น.',
    status: 'active'
  },
  {
    id: 'USR-004',
    staffCode: 'EMP-004',
    fullName: 'พญ. วรัญญา รักษาดี',
    email: 'waranya.md@clinic.com',
    role: 'doctor',
    department: 'ห้องตรวจจักษุและจอประสาทตา 2',
    avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=120',
    lastLogin: '28 ต.ค. 69 • 18:40 น.',
    status: 'active'
  },
  {
    id: 'USR-005',
    staffCode: 'EMP-005',
    fullName: 'ภก. ธีรภัทร เจริญเวช',
    email: 'teerapat.rx@clinic.com',
    role: 'pharmacist',
    department: 'ห้องจ่ายยาและคลังเวชภัณฑ์กลาง',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=120',
    lastLogin: '28 ต.ค. 69 • 19:22 น.',
    status: 'active'
  },
  {
    id: 'USR-006',
    staffCode: 'EMP-006',
    fullName: 'น.ส. นันทิดา การเงินดี',
    email: 'nantida.cash@clinic.com',
    role: 'cashier',
    department: 'เคาน์เตอร์การเงินและสิทธิการรักษา',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
    lastLogin: '28 ต.ค. 69 • 17:55 น.',
    status: 'active'
  },
  {
    id: 'USR-007',
    staffCode: 'EMP-007',
    fullName: 'นพ. กิตติพงษ์ วงศ์สว่าง',
    email: 'kittipong.md@clinic.com',
    role: 'doctor',
    department: 'ห้องตรวจจิตเวช 3',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=120',
    lastLogin: '27 ต.ค. 69 • 16:30 น.',
    status: 'active'
  },
  {
    id: 'USR-008',
    staffCode: 'EMP-008',
    fullName: 'นาย ภาณุพงศ์ ทดสอบสิทธิ์',
    email: 'panupong.temp@clinic.com',
    role: 'nurse',
    department: 'จุดซักประวัติผู้ป่วยนอก',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    lastLogin: '20 ต.ค. 69 • 11:05 น.',
    status: 'suspended'
  }
];

let accessAuditLogs = [
  { time: '28 ต.ค. 69 • 21:35 น.', user: 'คุณ สแตนลีย์ วงศ์สุวรรณ (stanley@gmail.com)', role: 'Super Admin', action: 'เข้าสู่ระบบสำเร็จ (Biometric / Password Sign In)', ip: '192.168.1.104 • Windows PC', status: 'success' },
  { time: '28 ต.ค. 69 • 21:10 น.', user: 'พว. สมศรี ส้มแดง (somsri.nurse@clinic.com)', role: 'Nurse', action: 'เข้าสู่ระบบและเปิดหน้าคัดกรองคิวห้องตรวจ', ip: '192.168.1.112 • Nurse Station 1', status: 'success' },
  { time: '28 ต.ค. 69 • 20:15 น.', user: 'นพ. เปรมชัย เสือขาว (premchai.md@clinic.com)', role: 'Doctor', action: 'บันทึกผลตรวจและส่งใบสั่งยาคิว A002', ip: '192.168.1.108 • Exam Room 1', status: 'success' },
  { time: '28 ต.ค. 69 • 19:22 น.', user: 'ภก. ธีรภัทร เจริญเวช (teerapat.rx@clinic.com)', role: 'Pharmacist', action: 'ตรวจสอบสต็อกยา FEFO และรายงาน อย. (วจ.2)', ip: '192.168.1.120 • Pharmacy PC', status: 'success' },
  { time: '28 ต.ค. 69 • 16:40 น.', user: 'นาย ภาณุพงศ์ ทดสอบสิทธิ์ (panupong.temp@clinic.com)', role: 'Nurse', action: 'พยายามเข้าสู่ระบบ (บัญชีถูกระงับสิทธิ์ชั่วคราว)', ip: '192.168.1.145 • Tablet OPD', status: 'blocked' }
];

let currentLoggedInUser = clinicUserAccounts[0];
let selectedRbacRoleKey = 'admin';
let selectedDemoLoginRole = 'admin';

function initAccessControlSystem() {
  // Close profile dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const wrap = document.querySelector('.user-capsule-wrapper');
    if (wrap && !wrap.contains(e.target)) {
      closeUserProfileDropdown();
    }
  });

  updateHeaderUserProfileUI();
  applyRoleSidebarVisibility();
  renderAccessControlView();
}

function selectDemoLoginAccount(roleKey, btnEl) {
  selectedDemoLoginRole = roleKey;
  document.querySelectorAll('.login-role-pill').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const demoMap = {
    admin: 'stanley@gmail.com',
    doctor: 'premchai.md@clinic.com',
    nurse: 'somsri.nurse@clinic.com',
    pharmacist: 'teerapat.rx@clinic.com',
    cashier: 'nantida.cash@clinic.com'
  };

  const userInp = document.getElementById('loginUsernameInput');
  const pwdInp = document.getElementById('loginPasswordInput');
  if (userInp && demoMap[roleKey]) userInp.value = demoMap[roleKey];
  if (pwdInp) pwdInp.value = '123456789012';

  const errBanner = document.getElementById('loginErrorBanner');
  if (errBanner) errBanner.style.display = 'none';
}

function toggleLoginPasswordVisibility() {
  const pwdInp = document.getElementById('loginPasswordInput');
  const iconEl = document.getElementById('loginPwdEyeIcon');
  if (!pwdInp) return;

  if (pwdInp.type === 'password') {
    pwdInp.type = 'text';
    if (iconEl) iconEl.setAttribute('data-lucide', 'eye-off');
  } else {
    pwdInp.type = 'password';
    if (iconEl) iconEl.setAttribute('data-lucide', 'eye');
  }
  if (window.lucide) window.lucide.createIcons();
}

function handleForgotPasswordPrompt() {
  showToast('แจ้งรีเซ็ตรหัสผ่าน (Forgot Password)', 'ระบบได้ส่งลิงก์สำหรับตั้งรหัสผ่านใหม่ไปยังอีเมลผู้ดูแลระบบคลินิกเรียบร้อยแล้ว', 'info');
}

function handleRequestNewAccountPrompt() {
  showToast('ขอเปิดบัญชีผู้ใช้งานใหม่', 'สามารถเพิ่มบัญชีบุคลากรและกำหนดสิทธิ์ได้ในเมนู "จัดการสิทธิการเข้าถึงระบบ"', 'info');
}

function handleClinicLoginSubmit(e) {
  if (e) e.preventDefault();

  const usernameVal = (document.getElementById('loginUsernameInput')?.value || '').trim().toLowerCase();
  const errBanner = document.getElementById('loginErrorBanner');
  const errText = document.getElementById('loginErrorText');

  // Match existing account or fallback to selected demo role
  let matchedUser = clinicUserAccounts.find(u => u.email.toLowerCase() === usernameVal || u.fullName.toLowerCase().includes(usernameVal));
  if (!matchedUser) {
    matchedUser = clinicUserAccounts.find(u => u.role === selectedDemoLoginRole) || clinicUserAccounts[0];
  }

  if (matchedUser.status === 'suspended') {
    if (errBanner && errText) {
      errText.textContent = `บัญชีของ "${matchedUser.fullName}" ถูกระงับสิทธิ์ชั่วคราว กรุณาติดต่อผู้ดูแลระบบ`;
      errBanner.style.display = 'flex';
    }
    showToast('ไม่สามารถเข้าสู่ระบบได้', 'บัญชีผู้ใช้งานนี้ถูกระงับสิทธิ์ชั่วคราว', 'warning');
    return;
  }

  if (errBanner) errBanner.style.display = 'none';
  currentLoggedInUser = matchedUser;

  const now = new Date();
  const timeStr = `28 ต.ค. 69 • ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} น.`;
  matchedUser.lastLogin = timeStr;

  const roleObj = rbacRolesConfig[matchedUser.role] || rbacRolesConfig.admin;
  accessAuditLogs.unshift({
    time: timeStr,
    user: `${matchedUser.fullName} (${matchedUser.email})`,
    role: roleObj.shortBadge,
    action: 'เข้าสู่ระบบสำเร็จผ่านหน้า Sign In',
    ip: '192.168.1.104 • Clinic Workstation',
    status: 'success'
  });

  updateHeaderUserProfileUI();
  applyRoleSidebarVisibility();

  // Hide login screen smoothly
  const overlay = document.getElementById('loginOverlayScreen');
  if (overlay) {
    overlay.classList.add('hidden-login');
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 260);
  }

  // Navigate to first allowed view
  const perms = roleObj.permissions;
  if (perms['home']?.view) {
    switchView('home');
  } else {
    const firstAllowed = RBAC_MODULES_LIST.find(m => perms[m.key]?.view);
    if (firstAllowed) switchView(firstAllowed.key);
  }

  if (typeof playHospitalChime === 'function') playHospitalChime();
  showToast('เข้าสู่ระบบสำเร็จ (Welcome Back)', `ยินดีต้อนรับ ${matchedUser.fullName} • สิทธิ์การใช้งาน: ${roleObj.name}`, 'success');
}

function openLoginScreen() {
  const overlay = document.getElementById('loginOverlayScreen');
  if (overlay) {
    overlay.style.display = 'flex';
    requestAnimationFrame(() => {
      overlay.classList.remove('hidden-login');
    });
  }
  if (window.lucide) window.lucide.createIcons();
}

function toggleUserProfileDropdown(e) {
  if (e) e.stopPropagation();
  const dd = document.getElementById('userProfileDropdown');
  if (!dd) return;
  dd.style.display = dd.style.display === 'none' ? 'block' : 'none';
  if (window.lucide) window.lucide.createIcons();
}

function closeUserProfileDropdown() {
  const dd = document.getElementById('userProfileDropdown');
  if (dd) dd.style.display = 'none';
}

function updateHeaderUserProfileUI() {
  if (!currentLoggedInUser) return;
  const roleObj = rbacRolesConfig[currentLoggedInUser.role] || rbacRolesConfig.admin;

  const avatarEl = document.getElementById('headerUserAvatar');
  const nameEl = document.getElementById('headerUserName');
  const roleBadgeEl = document.getElementById('headerUserRoleBadge');
  const updName = document.getElementById('updFullName');
  const updEmail = document.getElementById('updEmail');
  const updRole = document.getElementById('updRoleTag');

  if (avatarEl && currentLoggedInUser.avatar) avatarEl.src = currentLoggedInUser.avatar;
  if (nameEl) nameEl.textContent = currentLoggedInUser.fullName;
  if (roleBadgeEl) roleBadgeEl.textContent = roleObj.shortBadge;
  if (updName) updName.textContent = currentLoggedInUser.fullName;
  if (updEmail) updEmail.textContent = currentLoggedInUser.email;
  if (updRole) updRole.textContent = roleObj.name;
}

function switchActiveUserRole(roleKey) {
  const targetUser = clinicUserAccounts.find(u => u.role === roleKey && u.status === 'active') || clinicUserAccounts[0];
  currentLoggedInUser = targetUser;
  selectedRbacRoleKey = roleKey;

  updateHeaderUserProfileUI();
  applyRoleSidebarVisibility();
  closeUserProfileDropdown();

  const roleObj = rbacRolesConfig[roleKey] || rbacRolesConfig.admin;
  showToast('สลับบทบาทผู้ใช้งานสำเร็จ', `กำลังใช้งานในสิทธิ์ "${roleObj.name}" (${targetUser.fullName})`, 'info');

  if (typeof renderAccessControlView === 'function') {
    renderAccessControlView();
  }
}

function applyRoleSidebarVisibility() {
  if (!currentLoggedInUser) return;
  const roleObj = rbacRolesConfig[currentLoggedInUser.role] || rbacRolesConfig.admin;
  const perms = roleObj.permissions || {};

  RBAC_MODULES_LIST.forEach(mod => {
    const navBtn = document.getElementById(mod.navId);
    if (!navBtn) return;
    const canView = perms[mod.key] ? perms[mod.key].view : true;
    navBtn.style.display = canView ? 'flex' : 'none';
  });
}

function checkModuleViewPermission(viewName) {
  if (viewName === 'user-profile') return true;
  if (!currentLoggedInUser) return true;
  const roleObj = rbacRolesConfig[currentLoggedInUser.role] || rbacRolesConfig.admin;
  const perms = roleObj.permissions || {};

  // Map sub-views to parent module
  const moduleMap = {
    'home': 'home',
    'records': 'records',
    'records-create': 'records',
    'records-detail': 'records',
    'patient-rights': 'records',
    'appointments': 'appointments',
    'queue': 'queue',
    'queue-history': 'queue',
    'exam-room': 'exam-room',
    'exam-history': 'exam-room',
    'exam-detail': 'exam-room',
    'billing': 'billing',
    'billing-history': 'billing',
    'billing-executive': 'billing',
    'pharmacy': 'pharmacy',
    'courses': 'courses',
    'access-control': 'access-control',
    'settings': 'settings'
  };

  const modKey = moduleMap[viewName] || viewName;
  if (perms[modKey] && perms[modKey].view === false) {
    showToast(
      'จำกัดสิทธิ์การเข้าถึง (Access Denied)',
      `บทบาท "${roleObj.name}" ไม่มีสิทธิ์เข้าถึงเมนูนี้ กรุณาปรับสิทธิ์ที่เมนูจัดการสิทธิการเข้าถึงระบบ`,
      'warning'
    );
    return false;
  }
  return true;
}

// ==========================================================
// ACCESS CONTROL VIEW RENDERING (หน้าจัดการสิทธิการเข้าถึงระบบ)
// ==========================================================

let currentAclKpiFilter = 'all';

function updateAccessControlKpiActive(activeKey) {
  currentAclKpiFilter = activeKey || null;
  const cards = {
    all: document.getElementById('aclKpiCardAll'),
    roles: document.getElementById('aclKpiCardRoles'),
    active: document.getElementById('aclKpiCardOnline'),
    suspended: document.getElementById('aclKpiCardSuspended')
  };
  Object.keys(cards).forEach(key => {
    if (cards[key]) {
      cards[key].classList.toggle('active-navy', key === activeKey);
    }
  });
}

function selectAccessControlKpi(type) {
  updateAccessControlKpiActive(type);

  if (type === 'roles') {
    switchAccessControlTab('matrix', false);
  } else {
    // Switch to User Accounts tab
    switchAccessControlTab('users', false);
    const sel = document.getElementById('aclUserStatusFilter');
    if (sel) sel.value = type;
    renderAccessUsersTable();
  }
}

function switchAccessControlTab(tabKey, syncKpi = true) {
  const panels = {
    matrix: document.getElementById('aclPanelMatrix'),
    users: document.getElementById('aclPanelUsers'),
    logs: document.getElementById('aclPanelLogs')
  };
  const btns = {
    matrix: document.getElementById('aclTabBtnMatrix'),
    users: document.getElementById('aclTabBtnUsers'),
    logs: document.getElementById('aclTabBtnLogs')
  };

  Object.keys(panels).forEach(k => {
    if (panels[k]) panels[k].style.display = k === tabKey ? 'block' : 'none';
    if (btns[k]) btns[k].classList.toggle('active', k === tabKey);
  });

  if (syncKpi) {
    if (tabKey === 'matrix') {
      updateAccessControlKpiActive('roles');
    } else if (tabKey === 'users') {
      const status = document.getElementById('aclUserStatusFilter')?.value || 'all';
      updateAccessControlKpiActive(status);
    } else {
      updateAccessControlKpiActive(null);
    }
  }

  renderAccessControlView();
}

function renderAccessControlView() {
  // Update KPI counters
  const totalUsers = clinicUserAccounts.length;
  const activeUsers = clinicUserAccounts.filter(u => u.status === 'active').length;
  const suspendedUsers = clinicUserAccounts.filter(u => u.status === 'suspended').length;
  const rolesCount = Object.keys(rbacRolesConfig).length;

  const setKpi = (id, num, unit) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = `${num} <span class="unit">${unit}</span>`;
  };
  setKpi('aclKpiTotalUsers', totalUsers, 'บัญชี');
  setKpi('aclKpiRolesCount', rolesCount, 'กลุ่มสิทธิ์');
  setKpi('aclKpiOnlineUsers', activeUsers, 'บัญชี');
  setKpi('aclKpiSuspendedUsers', suspendedUsers, 'บัญชี');

  if (currentAclKpiFilter) {
    updateAccessControlKpiActive(currentAclKpiFilter);
  }

  renderRbacRolesSidebar();
  renderRbacMatrixTable();
  renderAccessUsersTable();
  renderAccessAuditLogsTable();

  if (window.lucide) window.lucide.createIcons();
}

function renderRbacRolesSidebar() {
  const container = document.getElementById('aclRolesSidebarList');
  if (!container) return;

  container.innerHTML = Object.values(rbacRolesConfig).map(role => {
    const count = clinicUserAccounts.filter(u => u.role === role.key).length;
    const allowedModulesCount = RBAC_MODULES_LIST.filter(m => role.permissions[m.key]?.view).length;
    const isActive = role.key === selectedRbacRoleKey;

    return `
      <div class="acl-role-item-card ${isActive ? 'active' : ''}" onclick="selectRbacRole('${role.key}')">
        <div class="acl-role-card-top">
          <div class="acl-role-card-name">
            <i data-lucide="shield" style="width:16px;height:16px;color:#0D3B5E;"></i>
            <span>${role.name}</span>
          </div>
          <span class="acl-role-card-count">${count} บัญชี</span>
        </div>
        <div class="acl-role-card-desc">${role.desc}</div>
        <div style="margin-top: 8px; font-size: 11.5px; font-weight: 700; color: #0284C7;">
          เข้าถึงได้ ${allowedModulesCount} / ${RBAC_MODULES_LIST.length} เมนูหลัก
        </div>
      </div>
    `;
  }).join('');
}

function selectRbacRole(roleKey) {
  selectedRbacRoleKey = roleKey;
  renderRbacRolesSidebar();
  renderRbacMatrixTable();
  if (window.lucide) window.lucide.createIcons();
}

function renderRbacMatrixTable() {
  const tbody = document.getElementById('rbacMatrixTableBody');
  if (!tbody) return;

  const role = rbacRolesConfig[selectedRbacRoleKey] || rbacRolesConfig.admin;
  const titleEl = document.getElementById('aclSelectedRoleTitle');
  const badgeEl = document.getElementById('aclSelectedRoleBadge');
  const descEl = document.getElementById('aclSelectedRoleDesc');

  if (titleEl) titleEl.textContent = role.name;
  if (badgeEl) badgeEl.textContent = role.code;
  if (descEl) descEl.textContent = role.desc;

  const permTypes = ['view', 'create', 'edit', 'delete', 'export'];

  tbody.innerHTML = RBAC_MODULES_LIST.map(mod => {
    const modPerms = role.permissions[mod.key] || { view: false, create: false, edit: false, delete: false, export: false };

    const togglesHtml = permTypes.map(pKey => `
      <td style="text-align: center;">
        <label class="acl-toggle-switch">
          <input type="checkbox" ${modPerms[pKey] ? 'checked' : ''}
            onchange="toggleRbacPermission('${role.key}', '${mod.key}', '${pKey}', this.checked)">
          <span class="acl-toggle-slider"></span>
        </label>
      </td>
    `).join('');

    return `
      <tr>
        <td>
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 32px; height: 32px; border-radius: 8px; background: #F1F5F9; color: #0D3B5E; display: flex; align-items: center; justify-content: center;">
              <i data-lucide="${mod.icon}" style="width: 16px; height: 16px;"></i>
            </div>
            <div>
              <div style="font-weight: 700; color: #0F172A; font-size: 13.5px;">${mod.label}</div>
              <div style="font-size: 11.5px; color: #64748B;">Module ID: ${mod.key}</div>
            </div>
          </div>
        </td>
        ${togglesHtml}
      </tr>
    `;
  }).join('');
}

function toggleRbacPermission(roleKey, moduleKey, permKey, checked) {
  if (!rbacRolesConfig[roleKey] || !rbacRolesConfig[roleKey].permissions[moduleKey]) return;
  rbacRolesConfig[roleKey].permissions[moduleKey][permKey] = checked;

  // If currently logged-in user belongs to this role, immediately update sidebar visibility
  if (currentLoggedInUser && currentLoggedInUser.role === roleKey) {
    applyRoleSidebarVisibility();
  }
  renderRbacRolesSidebar();
  if (window.lucide) window.lucide.createIcons();
}

function saveRbacRolePermissions() {
  const role = rbacRolesConfig[selectedRbacRoleKey] || rbacRolesConfig.admin;
  applyRoleSidebarVisibility();
  if (typeof playHospitalChime === 'function') playHospitalChime();
  showToast('บันทึกสิทธิการเข้าถึงระบบสำเร็จ', `อัปเดตตารางสิทธิ์ของกลุ่ม "${role.name}" และปรับการแสดงผลเมนูเรียบร้อยแล้ว`, 'success');
}

function filterAccessUsersByStatus(status) {
  const sel = document.getElementById('aclUserStatusFilter');
  if (sel) sel.value = status;
  updateAccessControlKpiActive(status);
  renderAccessUsersTable();
}

function renderAccessUsersTable() {
  const tbody = document.getElementById('accessUsersTableBody');
  if (!tbody) return;

  const roleFilter = document.getElementById('aclUserRoleFilter')?.value || 'all';
  const statusFilter = document.getElementById('aclUserStatusFilter')?.value || 'all';
  const query = (document.getElementById('aclUserSearchInput')?.value || '').trim().toLowerCase();

  const filtered = clinicUserAccounts.filter(u => {
    if (roleFilter !== 'all' && u.role !== roleFilter) return false;
    if (statusFilter !== 'all' && u.status !== statusFilter) return false;
    if (query) {
      const hay = `${u.fullName} ${u.email} ${u.staffCode} ${u.department}`.toLowerCase();
      if (!hay.includes(query)) return false;
    }
    return true;
  });

  tbody.innerHTML = filtered.map(u => {
    const roleObj = rbacRolesConfig[u.role] || rbacRolesConfig.nurse;
    const allowedMods = RBAC_MODULES_LIST.filter(m => roleObj.permissions[m.key]?.view);
    const isAct = u.status === 'active';

    return `
      <tr>
        <td>
          <div style="display: flex; align-items: center; gap: 10px;">
            <img src="${u.avatar}" alt="${u.fullName}" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; border: 1px solid #E2E8F0;">
            <div>
              <div style="font-weight: 700; color: #0F172A; font-size: 13.5px;">${u.fullName}</div>
              <div style="font-size: 12px; color: #64748B;">${u.email} • <strong style="color:#0D3B5E;">${u.staffCode}</strong></div>
            </div>
          </div>
        </td>
        <td>
          <span style="display: inline-flex; align-items: center; gap: 5px; padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 700; background: #EFF6FF; color: #1D4ED8; border: 1px solid #BFDBFE;">
            <i data-lucide="shield-check" style="width: 13px; height: 13px;"></i>
            ${roleObj.shortBadge}
          </span>
        </td>
        <td style="font-size: 13px; color: #334155; font-weight: 500;">${u.department}</td>
        <td>
          <div style="font-size: 12.5px; font-weight: 700; color: #0F766E;">เข้าถึงได้ ${allowedMods.length} / ${RBAC_MODULES_LIST.length} เมนู</div>
          <div style="font-size: 11.5px; color: #64748B; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 210px;">
            ${allowedMods.map(m => m.label.replace(/^\d+\.\s*/, '').split(' ')[0]).join(', ')}
          </div>
        </td>
        <td style="font-size: 12.5px; color: #475569;">${u.lastLogin}</td>
        <td style="text-align: center;">
          <label class="acl-toggle-switch" title="เปิด/ระงับสิทธิ์บัญชีนี้">
            <input type="checkbox" ${isAct ? 'checked' : ''} onchange="toggleUserAccountStatus('${u.id}')">
            <span class="acl-toggle-slider"></span>
          </label>
        </td>
        <td style="text-align: center;">
          <div style="display: inline-flex; align-items: center; gap: 6px;">
            <button type="button" class="btn-exam-top-outline" style="height: 30px; padding: 0 10px; font-size: 12px;" onclick="openUserAccessModal('${u.id}')" title="แก้ไขข้อมูลและสิทธิ์">
              <i data-lucide="edit-3" style="width: 13px; height: 13px;"></i>
            </button>
            <button type="button" class="btn-exam-top-outline" style="height: 30px; padding: 0 10px; font-size: 12px;" onclick="resetUserPasswordPrompt('${u.id}')" title="รีเซ็ตรหัสผ่าน">
              <i data-lucide="key-round" style="width: 13px; height: 13px;"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function toggleUserAccountStatus(userId) {
  const user = clinicUserAccounts.find(u => u.id === userId);
  if (!user) return;
  user.status = user.status === 'active' ? 'suspended' : 'active';
  renderAccessControlView();
  showToast(
    'อัปเดตสถานะบัญชีผู้ใช้งาน',
    `เปลี่ยนสถานะของ ${user.fullName} เป็น "${user.status === 'active' ? 'เปิดใช้งานปกติ' : 'ระงับสิทธิ์ชั่วคราว'}" เรียบร้อยแล้ว`,
    user.status === 'active' ? 'success' : 'warning'
  );
}

function openUserAccessModal(userId) {
  const modal = document.getElementById('modalUserAccessForm');
  if (!modal) return;

  const titleEl = document.getElementById('modalUserAccessTitle');
  const idInp = document.getElementById('editUserAccessId');
  const nameInp = document.getElementById('uaFullNameInput');
  const codeInp = document.getElementById('uaStaffCodeInput');
  const emailInp = document.getElementById('uaEmailInput');
  const roleSel = document.getElementById('uaRoleSelect');
  const deptInp = document.getElementById('uaDepartmentInput');
  const statusSel = document.getElementById('uaStatusSelect');

  if (userId) {
    const u = clinicUserAccounts.find(item => item.id === userId);
    if (u) {
      if (titleEl) titleEl.textContent = `แก้ไขสิทธิ์ผู้ใช้งาน: ${u.fullName}`;
      if (idInp) idInp.value = u.id;
      if (nameInp) nameInp.value = u.fullName;
      if (codeInp) codeInp.value = u.staffCode;
      if (emailInp) emailInp.value = u.email;
      if (roleSel) roleSel.value = u.role;
      if (deptInp) deptInp.value = u.department;
      if (statusSel) statusSel.value = u.status;
    }
  } else {
    if (titleEl) titleEl.textContent = 'เพิ่มผู้ใช้งานและกำหนดสิทธิ์เข้าถึงระบบ';
    if (idInp) idInp.value = '';
    if (nameInp) nameInp.value = '';
    if (codeInp) codeInp.value = `EMP-00${clinicUserAccounts.length + 1}`;
    if (emailInp) emailInp.value = '';
    if (roleSel) roleSel.value = 'nurse';
    if (deptInp) deptInp.value = 'แผนกการพยาบาลและคัดกรอง';
    if (statusSel) statusSel.value = 'active';
  }

  modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

function closeUserAccessModal() {
  const modal = document.getElementById('modalUserAccessForm');
  if (modal) modal.style.display = 'none';
}

function handleSaveUserAccessSubmit(e) {
  if (e) e.preventDefault();

  const editId = document.getElementById('editUserAccessId')?.value;
  const fullName = document.getElementById('uaFullNameInput')?.value.trim();
  const staffCode = document.getElementById('uaStaffCodeInput')?.value.trim();
  const email = document.getElementById('uaEmailInput')?.value.trim();
  const role = document.getElementById('uaRoleSelect')?.value || 'nurse';
  const department = document.getElementById('uaDepartmentInput')?.value.trim();
  const status = document.getElementById('uaStatusSelect')?.value || 'active';

  if (editId) {
    const existing = clinicUserAccounts.find(u => u.id === editId);
    if (existing) {
      existing.fullName = fullName;
      existing.staffCode = staffCode;
      existing.email = email;
      existing.role = role;
      existing.department = department;
      existing.status = status;
    }
    showToast('อัปเดตสิทธิ์ผู้ใช้งานสำเร็จ', `บันทึกการแก้ไขข้อมูลและระดับสิทธิ์ของ "${fullName}" เรียบร้อยแล้ว`, 'success');
  } else {
    clinicUserAccounts.unshift({
      id: 'USR-' + Date.now(),
      staffCode,
      fullName,
      email,
      role,
      department,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
      lastLogin: 'เพิ่งสร้างบัญชีใหม่',
      status
    });
    showToast('เพิ่มบัญชีผู้ใช้งานใหม่สำเร็จ', `เพิ่ม "${fullName}" เข้าสู่กลุ่มสิทธิ์ ${rbacRolesConfig[role]?.shortBadge || role} เรียบร้อยแล้ว`, 'success');
  }

  closeUserAccessModal();
  renderAccessControlView();
}

function resetUserPasswordPrompt(userId) {
  const u = clinicUserAccounts.find(item => item.id === userId);
  if (!u) return;
  showToast('รีเซ็ตรหัสผ่านสำเร็จ', `ส่งรหัสผ่านชั่วคราว (One-Time Password) ไปยัง ${u.email} เรียบร้อยแล้ว`, 'info');
}

function renderAccessAuditLogsTable() {
  const tbody = document.getElementById('accessAuditLogsTableBody');
  if (!tbody) return;

  tbody.innerHTML = accessAuditLogs.map(log => {
    const isOk = log.status === 'success';
    const badge = isOk
      ? `<span style="display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:999px;font-size:11.5px;font-weight:700;background:#ECFDF5;color:#059669;border:1px solid #A7F3D0;">สำเร็จ</span>`
      : `<span style="display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:999px;font-size:11.5px;font-weight:700;background:#FEF2F2;color:#DC2626;border:1px solid #FECACA;">ถูกบล็อก</span>`;

    return `
      <tr>
        <td style="text-align: center; font-weight: 600; color: #334155; font-size: 12.5px;">${log.time}</td>
        <td style="font-weight: 700; color: #0F172A; font-size: 13px;">${log.user}</td>
        <td>
          <span style="padding: 3px 9px; border-radius: 6px; background: #F1F5F9; color: #0D3B5E; font-size: 12px; font-weight: 700;">${log.role}</span>
        </td>
        <td style="font-size: 13px; color: #334155;">${log.action}</td>
        <td style="text-align: center; font-size: 12px; color: #64748B;">${log.ip}</td>
        <td style="text-align: center;">${badge}</td>
      </tr>
    `;
  }).join('');
}

// ==========================================================
// PATIENT REFERRAL SYSTEM (ระบบส่งต่อผู้ป่วยไปโรงพยาบาล - Refer)
// ==========================================================

let referHistoryData = [
  {
    id: 'REF-690801',
    date: '06/08/69',
    referCode: 'R69-008412',
    hospital: 'โรงพยาบาลศิริราช',
    status: 'ส่งตัวสำเร็จ',
    statusType: 'completed'
  },
  {
    id: 'REF-690518',
    date: '18/05/69',
    referCode: 'R69-005109',
    hospital: 'โรงพยาบาลจักษุรัตนิน',
    status: 'รับตัวแล้ว',
    statusType: 'accepted'
  },
  {
    id: 'REF-690211',
    date: '11/02/69',
    referCode: 'R69-001924',
    hospital: 'โรงพยาบาลเมตตาประชารักษ์ (วัดไร่ขิง)',
    status: 'สิ้นสุดการส่งต่อ',
    statusType: 'finished'
  }
];

function renderReferHistoryTable() {
  const tbody = document.getElementById('referHistoryTableBody');
  if (!tbody) return;

  tbody.innerHTML = referHistoryData.map(item => {
    let badgeStyle = 'background:#ECFDF5;color:#059669;border:1px solid #A7F3D0;';
    if (item.statusType === 'pending') {
      badgeStyle = 'background:#FEF3C7;color:#D97706;border:1px solid #FDE68A;';
    } else if (item.statusType === 'accepted') {
      badgeStyle = 'background:#EFF6FF;color:#2563EB;border:1px solid #BFDBFE;';
    }

    return `
      <tr>
        <td>
          <button type="button" class="btn-refer-print-mini" title="พิมพ์ใบส่งตัว ${item.referCode}" onclick="printReferSheetById('${item.id}')">
            <i data-lucide="printer"></i>
          </button>
        </td>
        <td style="font-weight: 600;">${item.date}</td>
        <td style="font-weight: 700; color: #0D3B5E;">${item.referCode}</td>
        <td style="font-weight: 600;">${item.hospital}</td>
        <td>
          <span style="display:inline-block;padding:2px 9px;border-radius:999px;font-size:11px;font-weight:700;${badgeStyle}">
            ${item.status}
          </span>
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function openReferFromExamRoom() {
  if (typeof activeExamQueueItem !== 'undefined' && activeExamQueueItem) {
    const setEl = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };
    setEl('referPtName', activeExamQueueItem.patientName);
    setEl('referPtHn', activeExamQueueItem.hn);
    setEl('referPtQueueNo', activeExamQueueItem.queueNo);
  }
  switchView('refer');
}

function handleReferHospitalChange(hospitalName) {
  const kmMap = {
    'โรงพยาบาลศิริราช': '14.5',
    'โรงพยาบาลจักษุรัตนิน': '8.2',
    'โรงพยาบาลรามาธิบดี': '11.0',
    'โรงพยาบาลราชวิถี': '10.4',
    'โรงพยาบาลเมตตาประชารักษ์ (วัดไร่ขิง)': '34.8',
    'โรงพยาบาลจุฬาลงกรณ์': '9.6'
  };
  const kmInp = document.getElementById('referDistanceKm');
  if (kmInp && kmMap[hospitalName]) {
    kmInp.value = kmMap[hospitalName];
  }
}

function handleReferIcdChange(type, val) {
  if (!val) return;
  if (type === 'initial') {
    const dxInp = document.getElementById('referDxInitial');
    if (dxInp && !dxInp.value.trim()) {
      dxInp.value = `ผู้ป่วยมาด้วยอาการตามัวลงอย่างรวดเร็ว ตรวจพบ ${val} พิจารณาส่งตัวเพื่อรับการรักษาเฉพาะทางต่อ`;
    }
  } else if (type === 'discharge') {
    const dxDis = document.getElementById('referDxDischarge');
    if (dxDis && !dxDis.value.trim()) {
      dxDis.value = `ให้การรักษาเบื้องต้นและควบคุมความดันลูกตาแล้ว ส่งต่อเพื่อรับการผ่าตัด/หัตถการ (${val})`;
    }
  }
}

function triggerReferDatePicker(displayId, hiddenId) {
  const hidden = document.getElementById(hiddenId);
  if (hidden) {
    if (typeof hidden.showPicker === 'function') {
      hidden.showPicker();
    } else {
      hidden.focus();
      hidden.click();
    }
  }
}

function syncReferDate(val, displayId) {
  if (!val) return;
  const parts = val.split('-');
  if (parts.length === 3) {
    const year = String(parseInt(parts[0], 10) + 543).slice(-2);
    const month = parts[1];
    const day = parts[2];
    const displayEl = document.getElementById(displayId);
    if (displayEl) displayEl.value = `${day}/${month}/${year}`;
  }
}

function triggerReferDateTimePicker(displayId, hiddenId) {
  const hidden = document.getElementById(hiddenId);
  if (hidden) {
    if (typeof hidden.showPicker === 'function') {
      hidden.showPicker();
    } else {
      hidden.focus();
      hidden.click();
    }
  }
}

function syncReferDateTime(val, displayId) {
  if (!val) return;
  const [dPart, tPart] = val.split('T');
  if (dPart && tPart) {
    const parts = dPart.split('-');
    if (parts.length === 3) {
      const year = String(parseInt(parts[0], 10) + 543).slice(-2);
      const month = parts[1];
      const day = parts[2];
      const displayEl = document.getElementById(displayId);
      if (displayEl) displayEl.value = `${day}/${month}/${year} - ${tPart}`;
    }
  }
}

function handleSaveReferSubmit(e) {
  if (e) e.preventDefault();

  const destHosp = document.getElementById('referDestHospital')?.value || 'โรงพยาบาลศิริราช';
  const referDate = document.getElementById('referDateInput')?.value || '06/08/69';
  const ptName = document.getElementById('referPtName')?.textContent || 'น.ส. กุลธิดา ชุมยางสิม';
  const newCode = 'R69-' + String(Math.floor(100000 + Math.random() * 900000));

  referHistoryData.unshift({
    id: 'REF-' + Date.now(),
    date: referDate,
    referCode: newCode,
    hospital: destHosp,
    status: 'ส่งตัวสำเร็จ',
    statusType: 'completed'
  });

  renderReferHistoryTable();
  if (typeof playHospitalChime === 'function') playHospitalChime();
  showToast(
    'บันทึกและส่งต่อผู้ป่วย (Refer) สำเร็จ',
    `ออกใบส่งตัวเลขที่ ${newCode} สำหรับ "${ptName}" ไปยัง "${destHosp}" เรียบร้อยแล้ว`,
    'success'
  );
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetReferForm() {
  const form = document.getElementById('referPatientForm');
  if (form) form.reset();
  showToast('ล้างข้อมูลฟอร์ม Refer', 'รีเซ็ตข้อมูลในแบบฟอร์มการส่งต่อผู้ป่วยเรียบร้อยแล้ว', 'info');
}

function printReferSheetById(referId) {
  const rec = referHistoryData.find(r => r.id === referId) || referHistoryData[0];
  if (!rec) return;
  showToast(
    'กำลังพิมพ์ใบส่งตัวผู้ป่วย (Referral Letter)',
    `เตรียมพิมพ์ใบส่งตัวเลขที่ ${rec.referCode} ปลายทาง: ${rec.hospital}`,
    'info'
  );
}

function printLatestReferSheet() {
  if (referHistoryData.length > 0) {
    printReferSheetById(referHistoryData[0].id);
  }
}

// ==========================================================
// USER PROFILE CONTROLLER & PHOTO MANAGEMENT
// ==========================================================

function handleUserCapsuleClick(e) {
  if (e && e.target && e.target.closest('#userDropdownTrigger')) {
    toggleUserProfileDropdown(e);
    return;
  }
  closeUserProfileDropdown();
  switchView('user-profile');
}

function renderUserProfileView() {
  if (!currentLoggedInUser) return;
  const roleObj = rbacRolesConfig[currentLoggedInUser.role] || rbacRolesConfig.admin;

  // 1. Hero Card
  const avatar = currentLoggedInUser.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=240';
  const pvAvatar = document.getElementById('profileViewAvatar');
  if (pvAvatar) pvAvatar.src = avatar;

  const pvFullName = document.getElementById('profileViewFullName');
  if (pvFullName) pvFullName.textContent = currentLoggedInUser.fullName || '-';

  const pvStaffCodeBadge = document.getElementById('profileViewStaffCodeBadge');
  if (pvStaffCodeBadge) pvStaffCodeBadge.textContent = currentLoggedInUser.staffCode || 'EMP-001';

  const pvRoleName = document.getElementById('profileViewRoleName');
  if (pvRoleName) pvRoleName.innerHTML = `<i data-lucide="shield-check" style="width:14px;height:14px;vertical-align:-2px;"></i> ${roleObj.name}`;

  const pvDept = document.getElementById('profileViewDepartment');
  if (pvDept) pvDept.textContent = currentLoggedInUser.department || '-';

  const pvEmail = document.getElementById('profileViewEmail');
  if (pvEmail) pvEmail.textContent = currentLoggedInUser.email || '-';

  const pvPhone = document.getElementById('profileViewPhone');
  if (pvPhone) pvPhone.textContent = currentLoggedInUser.phone || '081-234-5678';

  const pvLastLogin = document.getElementById('profileViewLastLogin');
  if (pvLastLogin) pvLastLogin.textContent = currentLoggedInUser.lastLogin || '29 ต.ค. 2569 • 11:47 น.';

  // 2. Personal & Staff Details
  const pvStaffCode = document.getElementById('pvStaffCode');
  if (pvStaffCode) pvStaffCode.textContent = currentLoggedInUser.staffCode || 'EMP-001';

  const pvFullNameDetail = document.getElementById('pvFullName');
  if (pvFullNameDetail) pvFullNameDetail.textContent = currentLoggedInUser.fullName || '-';

  const pvFullNameEn = document.getElementById('pvFullNameEn');
  if (pvFullNameEn) pvFullNameEn.textContent = currentLoggedInUser.fullNameEn || (currentLoggedInUser.role === 'admin' ? 'Mr. Stanley Wongsuwan' : 'Clinical Staff');

  const pvCitizenId = document.getElementById('pvCitizenId');
  if (pvCitizenId) pvCitizenId.textContent = currentLoggedInUser.citizenId || '1-1002-00345-67-8';

  const pvLicenseNo = document.getElementById('pvLicenseNo');
  if (pvLicenseNo) pvLicenseNo.textContent = currentLoggedInUser.licenseNo || (currentLoggedInUser.role === 'doctor' ? 'ว. 38492' : currentLoggedInUser.role === 'nurse' ? 'พย. 19283' : currentLoggedInUser.role === 'pharmacist' ? 'ภ. 09281' : '-');

  const pvDepartmentDetail = document.getElementById('pvDepartment');
  if (pvDepartmentDetail) pvDepartmentDetail.textContent = currentLoggedInUser.department || '-';

  const pvRoleDetail = document.getElementById('pvRole');
  if (pvRoleDetail) pvRoleDetail.textContent = roleObj.name;

  const pvEmailDetail = document.getElementById('pvEmail');
  if (pvEmailDetail) pvEmailDetail.textContent = currentLoggedInUser.email || '-';

  const pvPhoneDetail = document.getElementById('pvPhone');
  if (pvPhoneDetail) pvPhoneDetail.textContent = currentLoggedInUser.phone || '081-234-5678';

  const pvStartDate = document.getElementById('pvStartDate');
  if (pvStartDate) pvStartDate.textContent = currentLoggedInUser.startDate || '01/02/2565';

  const pvNotes = document.getElementById('pvNotes');
  if (pvNotes) pvNotes.textContent = currentLoggedInUser.notes || 'บุคลากรประจำศูนย์บริการการแพทย์และจักษุเฉพาะทาง';

  // 3. Security & RBAC Box
  const pvRbacTitle = document.getElementById('pvRbacTitle');
  if (pvRbacTitle) pvRbacTitle.textContent = roleObj.name;

  const pvRbacDesc = document.getElementById('pvRbacDesc');
  if (pvRbacDesc) pvRbacDesc.textContent = roleObj.desc;

  const pvLastLoginAudit = document.getElementById('pvLastLoginAudit');
  if (pvLastLoginAudit) pvLastLoginAudit.textContent = currentLoggedInUser.lastLogin || '29 ต.ค. 2569 • 11:47 น.';

  const pillsContainer = document.getElementById('pvModulePills');
  if (pillsContainer) {
    pillsContainer.innerHTML = RBAC_MODULES_LIST.map(mod => {
      const isAllowed = roleObj.permissions && roleObj.permissions[mod.key]?.view;
      return `
        <span class="module-pill ${isAllowed ? 'active' : ''}">
          <i data-lucide="${isAllowed ? 'check-circle-2' : 'lock'}"></i>
          <span>${mod.label.split('. ')[1] || mod.label}</span>
        </span>
      `;
    }).join('');
  }

  if (window.lucide) window.lucide.createIcons();
}

function openEditUserProfileModal() {
  if (!currentLoggedInUser) return;
  const modal = document.getElementById('editUserProfileModal');
  if (!modal) return;

  const avatar = currentLoggedInUser.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=240';
  const preview = document.getElementById('editModalAvatarPreview');
  const hiddenUrl = document.getElementById('editModalAvatarUrl');
  if (preview) preview.src = avatar;
  if (hiddenUrl) hiddenUrl.value = avatar;

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  };

  setVal('editUserFullName', currentLoggedInUser.fullName || '');
  setVal('editUserFullNameEn', currentLoggedInUser.fullNameEn || (currentLoggedInUser.role === 'admin' ? 'Mr. Stanley Wongsuwan' : ''));
  setVal('editUserEmail', currentLoggedInUser.email || '');
  setVal('editUserPhone', currentLoggedInUser.phone || '081-234-5678');
  setVal('editUserDepartment', currentLoggedInUser.department || '');
  setVal('editUserCitizenId', currentLoggedInUser.citizenId || '1-1002-00345-67-8');
  setVal('editUserLicenseNo', currentLoggedInUser.licenseNo || '');
  setVal('editUserStaffCode', currentLoggedInUser.staffCode || 'EMP-001');
  setVal('editUserNotes', currentLoggedInUser.notes || '');

  modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

function closeEditUserProfileModal() {
  const modal = document.getElementById('editUserProfileModal');
  if (modal) modal.style.display = 'none';
}

function triggerProfilePhotoUpload() {
  const input = document.getElementById('userProfilePhotoFileInput');
  if (input) input.click();
}

function handleProfilePhotoSelected(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    const dataUrl = evt.target.result;
    applyNewProfileAvatar(dataUrl);
    showToast('เปลี่ยนรูปภาพโปรไฟล์สำเร็จ', 'อัปเดตรูปถ่ายประจำตัวของผู้ใช้งานเรียบร้อยแล้ว', 'success');
  };
  reader.readAsDataURL(file);
  e.target.value = '';
}

function handleModalPhotoSelected(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    const dataUrl = evt.target.result;
    const preview = document.getElementById('editModalAvatarPreview');
    const hiddenUrl = document.getElementById('editModalAvatarUrl');
    if (preview) preview.src = dataUrl;
    if (hiddenUrl) hiddenUrl.value = dataUrl;
  };
  reader.readAsDataURL(file);
  e.target.value = '';
}

function promptPhotoUrl() {
  const currentVal = document.getElementById('editModalAvatarUrl')?.value || '';
  const url = prompt('ระบุ URL รูปภาพโปรไฟล์ที่ต้องการใช้งาน (HTTPS):', currentVal);
  if (url && url.trim()) {
    const preview = document.getElementById('editModalAvatarPreview');
    const hiddenUrl = document.getElementById('editModalAvatarUrl');
    if (preview) preview.src = url.trim();
    if (hiddenUrl) hiddenUrl.value = url.trim();
  }
}

function resetToDefaultPhoto() {
  const defaultUrl = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=240';
  const preview = document.getElementById('editModalAvatarPreview');
  const hiddenUrl = document.getElementById('editModalAvatarUrl');
  if (preview) preview.src = defaultUrl;
  if (hiddenUrl) hiddenUrl.value = defaultUrl;
}

function applyNewProfileAvatar(newAvatarUrl) {
  if (!currentLoggedInUser) return;
  currentLoggedInUser.avatar = newAvatarUrl;

  // Sync back to clinicUserAccounts list
  const userInList = clinicUserAccounts.find(u => u.id === currentLoggedInUser.id);
  if (userInList) userInList.avatar = newAvatarUrl;

  updateHeaderUserProfileUI();
  renderUserProfileView();
}

function saveUserProfileData(e) {
  if (e) e.preventDefault();
  if (!currentLoggedInUser) return;

  const newFullName = document.getElementById('editUserFullName')?.value.trim();
  const newFullNameEn = document.getElementById('editUserFullNameEn')?.value.trim();
  const newEmail = document.getElementById('editUserEmail')?.value.trim();
  const newPhone = document.getElementById('editUserPhone')?.value.trim();
  const newDepartment = document.getElementById('editUserDepartment')?.value.trim();
  const newCitizenId = document.getElementById('editUserCitizenId')?.value.trim();
  const newLicenseNo = document.getElementById('editUserLicenseNo')?.value.trim();
  const newNotes = document.getElementById('editUserNotes')?.value.trim();
  const newAvatar = document.getElementById('editModalAvatarUrl')?.value.trim();

  if (!newFullName || !newEmail || !newPhone) {
    showToast('กรุณากรอกข้อมูลสำคัญให้ครบถ้วน', 'ต้องระบุชื่อ-สกุล, อีเมล และเบอร์โทรศัพท์', 'warning');
    return;
  }

  currentLoggedInUser.fullName = newFullName;
  currentLoggedInUser.fullNameEn = newFullNameEn;
  currentLoggedInUser.email = newEmail;
  currentLoggedInUser.phone = newPhone;
  currentLoggedInUser.department = newDepartment;
  currentLoggedInUser.citizenId = newCitizenId;
  currentLoggedInUser.licenseNo = newLicenseNo;
  currentLoggedInUser.notes = newNotes;
  if (newAvatar) currentLoggedInUser.avatar = newAvatar;

  // Also sync in clinicUserAccounts
  const userIdx = clinicUserAccounts.findIndex(u => u.id === currentLoggedInUser.id);
  if (userIdx !== -1) {
    clinicUserAccounts[userIdx] = { ...clinicUserAccounts[userIdx], ...currentLoggedInUser };
  }

  updateHeaderUserProfileUI();
  renderUserProfileView();
  closeEditUserProfileModal();

  if (typeof playHospitalChime === 'function') playHospitalChime();
  showToast('บันทึกข้อมูลโปรไฟล์สำเร็จ', `อัปเดตข้อมูลผู้ใช้งานและรูปภาพของ "${newFullName}" เรียบร้อยแล้ว`, 'success');
}

// ==========================================================
// OPHTHALMOLOGY TREATMENT & ORDER MODAL (เพิ่มค่าใช้จ่ายการรักษาและหัตถการจักษุ)
// ==========================================================

const OPH_TREATMENT_CATALOG = [
  {
    id: 'OPH-01',
    code: 'OPH-01',
    name: 'ขยายม่านตาและวัดความดันลูกตา (Tonometry)',
    category: 'procedures',
    categoryLabel: 'หัตถการตา',
    price: 300,
    defaultEye: 'OU',
    supportsCourse: false,
    desc: 'ตรวจความดันตาด้วย Goldman / Non-contact Tonometry พร้อมหยอดยาขยายม่านตา'
  },
  {
    id: 'OCT-02',
    code: 'OCT-02',
    name: 'สแกนขั้วประสาทตาและจุดรับภาพ (OCT Scan)',
    category: 'devices',
    categoryLabel: 'เครื่องมือพิเศษ',
    price: 1500,
    defaultEye: 'OU',
    supportsCourse: false,
    desc: 'High-resolution Optical Coherence Tomography (Macula & RNFL)'
  },
  {
    id: 'FUN-03',
    code: 'FUN-03',
    name: 'ถ่ายภาพจอประสาทตา (Fundus Photography)',
    category: 'devices',
    categoryLabel: 'เครื่องมือพิเศษ',
    price: 800,
    defaultEye: 'OU',
    supportsCourse: false,
    desc: 'Ultra-widefield Digital Color Retinal Photography'
  },
  {
    id: 'VF-04',
    code: 'VF-04',
    name: 'ลานสายตาคอมพิวเตอร์ (Visual Field Test)',
    category: 'devices',
    categoryLabel: 'เครื่องมือพิเศษ',
    price: 1200,
    defaultEye: 'OU',
    supportsCourse: false,
    desc: 'Humphrey Visual Field (HVF 24-2 / 30-2 SITA Standard)'
  },
  {
    id: 'SPA-05',
    code: 'SPA-05',
    name: 'ประคบอุ่นและนวดทำความสะอาดเปลือกตา (Eye Spa / Eyelid Hygiene)',
    category: 'procedures',
    categoryLabel: 'หัตถการตา',
    price: 900,
    defaultEye: 'OU',
    supportsCourse: false,
    desc: 'Deep eyelid cleansing, warm compress & Meibomian gland expression'
  },
  {
    id: 'IPL-06',
    code: 'IPL-06',
    name: 'เลเซอร์รักษาภาวะตาแห้ง (IPL Dry Eye)',
    category: 'procedures',
    categoryLabel: 'หัตถการตา',
    price: 3500,
    defaultEye: 'OU',
    supportsCourse: true,
    courseName: 'คอร์ส IPL Dry Eye (คงเหลือ 2/4 ครั้ง)',
    desc: 'Intense Pulsed Light therapy สำหรับต่อมไขมันเปลือกตาอุดตัน (MGD)'
  },
  {
    id: 'OPH-07',
    code: 'OPH-07',
    name: 'เขี่ยสิ่งแปลกปลอมออกจากกระจกตา / ล้างตา',
    category: 'procedures',
    categoryLabel: 'หัตถการตา',
    price: 600,
    defaultEye: 'OD',
    supportsCourse: false,
    desc: 'Corneal/Conjunctival foreign body removal under Slit-lamp'
  },
  {
    id: 'LAB-08',
    code: 'LAB-08',
    name: 'เจาะเลือดตรวจน้ำตาลสะสม (HbA1c - Outlab)',
    category: 'lab',
    categoryLabel: 'ส่งตรวจ Lab',
    price: 250,
    defaultEye: null,
    supportsCourse: false,
    desc: 'Hemoglobin A1c สำหรับผู้ป่วยเบาหวานขึ้นจอตา'
  },
  {
    id: 'SRV-09',
    code: 'SRV-09',
    name: 'ใบรับรองแพทย์ตรวจสายตาสำหรับต่อใบขับขี่ / สมัครงาน',
    category: 'services',
    categoryLabel: 'ค่าบริการ/ใบรับรอง',
    price: 200,
    defaultEye: null,
    supportsCourse: false,
    desc: 'Medical Certificate with Visual Acuity & Color Vision Test'
  },
  {
    id: 'OPH-10',
    code: 'OPH-10',
    name: 'ตรวจย้อมสีและทดสอบเยื่อบุกระจกตา (Fluorescein Staining)',
    category: 'procedures',
    categoryLabel: 'หัตถการตา',
    price: 350,
    defaultEye: 'OU',
    supportsCourse: false,
    desc: 'Corneal abrasion & tear breakup time (TBUT) evaluation'
  }
];

const OPH_FAVORITE_SETS = {
  glaucoma: {
    name: 'ชุดคัดกรองต้อหิน (Glaucoma Set)',
    itemIds: ['OCT-02', 'VF-04', 'OPH-01']
  },
  dr_screening: {
    name: 'ชุดตรวจเบาหวานขึ้นตา (DR Screening)',
    itemIds: ['OPH-01', 'FUN-03']
  },
  dry_eye_spa: {
    name: 'ชุดสปาเปลือกตาตาแห้ง (Dry Eye Spa Set)',
    itemIds: ['SPA-05', 'IPL-06']
  },
  annual_checkup: {
    name: 'ชุดตรวจสุขภาพตาประจำปี',
    itemIds: ['OPH-01', 'FUN-03', 'SRV-09']
  }
};

let activeOphCategory = 'all';
let ophSearchQuery = '';
let isOphStatActive = false;

// Default initial state matches the exact user screenshot specification:
// 1. OCT Scan (OU) - 1,500 ฿
// 2. Tonometry (OU) - 300 ฿
// 3. IPL Dry Eye (OU) - Course deducted (0.00 ฿)
// Total 3 items (1 course), net ฿1,800.00 บาท
let ophSelectedOrders = [
  {
    id: 'OCT-02',
    name: 'สแกนขั้วประสาทตาและจุดรับภาพ (OCT Scan)',
    code: 'OCT-02',
    price: 1500,
    qty: 1,
    eyeSide: 'OU',
    supportsCourse: false,
    isCourseDeducted: false
  },
  {
    id: 'OPH-01',
    name: 'ขยายม่านตาและวัดความดันลูกตา (Tonometry)',
    code: 'OPH-01',
    price: 300,
    qty: 1,
    eyeSide: 'OU',
    supportsCourse: false,
    isCourseDeducted: false
  },
  {
    id: 'IPL-06',
    name: 'เลเซอร์รักษาภาวะตาแห้ง (IPL Dry Eye)',
    code: 'IPL-06',
    price: 3500,
    qty: 1,
    eyeSide: 'OU',
    supportsCourse: true,
    isCourseDeducted: true
  }
];

// ========================================================
// ORDER LAB MODULE (สั่ง Lab - Doctor Examination Room)
// ========================================================
let labMasterItems = [
  { id: 1, name: "Anti HIV Screening test", price: 120.00, group: "lab3", category: "blood", favorite: true, selected: true },
  { id: 2, name: "Calcium", price: 120.00, group: "lab2", category: "blood", favorite: true, selected: true },
  { id: 3, name: "Electrolyte", price: 120.00, group: "lab2", category: "blood", favorite: true, selected: true },
  { id: 4, name: "FT4 ( Free Thyroxine )", price: 120.00, group: "lab3", category: "special", favorite: false, selected: false },
  { id: 5, name: "Phosphorus", price: 120.00, group: "lab2", category: "blood", favorite: false, selected: false },
  { id: 6, name: "TSH(ThyroidStimulatingHormone)", price: 120.00, group: "lab3", category: "special", favorite: false, selected: false },
  { id: 7, name: "VDRL/RPR", price: 120.00, group: "lab3", category: "blood", favorite: false, selected: false },
  { id: 8, name: "Alkaline Phosphatase(ALP)", price: 120.00, group: "lab2", category: "blood", favorite: false, selected: false },
  { id: 9, name: "Albumin", price: 120.00, group: "lab2", category: "blood", favorite: false, selected: false },
  { id: 10, name: "Blood Urea Nitrogen", price: 120.00, group: "lab2", category: "blood", favorite: false, selected: false },
  { id: 11, name: "Complete Blood Count (CBC)", price: 150.00, group: "lab1", category: "blood", favorite: true, selected: false },
  { id: 12, name: "Creatinine", price: 120.00, group: "lab2", category: "blood", favorite: true, selected: false },
  { id: 13, name: "Fasting Blood Sugar (FBS)", price: 100.00, group: "lab2", category: "blood", favorite: true, selected: false },
  { id: 14, name: "HbA1c", price: 250.00, group: "lab2", category: "blood", favorite: true, selected: false },
  { id: 15, name: "Urinalysis (UA)", price: 100.00, group: "lab4", category: "urine", favorite: true, selected: false }
];

let labFilterState = {
  favorite: '',
  group: '',
  category: '',
  search: ''
};

function openOrderLabModal() {
  const modal = document.getElementById('modalOrderLab');
  if (!modal) return;

  renderLabItemsList();
  modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

function closeOrderLabModal() {
  const modal = document.getElementById('modalOrderLab');
  if (modal) modal.style.display = 'none';
}

function handleLabFilterChange() {
  const favEl = document.getElementById('labFavoriteSelect');
  const grpEl = document.getElementById('labGroupSelect');
  const catEl = document.getElementById('labCategorySelect');
  const schEl = document.getElementById('labSearchInput');

  labFilterState.favorite = favEl ? favEl.value : '';
  labFilterState.group = grpEl ? grpEl.value : '';
  labFilterState.category = catEl ? catEl.value : '';
  labFilterState.search = schEl ? schEl.value.trim().toLowerCase() : '';

  renderLabItemsList();
}

function getFilteredLabItems() {
  return labMasterItems.filter(item => {
    if (labFilterState.favorite === 'favorite' && !item.favorite) return false;
    if (labFilterState.group && labFilterState.group !== 'all' && item.group !== labFilterState.group) return false;
    if (labFilterState.category && labFilterState.category !== 'all' && item.category !== labFilterState.category) return false;
    if (labFilterState.search && !item.name.toLowerCase().includes(labFilterState.search)) return false;
    return true;
  });
}

function renderLabItemsList() {
  const container = document.getElementById('orderLabListBody');
  if (!container) return;

  const filtered = getFilteredLabItems();

  // Update select all checkbox in header
  const selectAllEl = document.getElementById('labSelectAllCheck');
  const allSelected = filtered.length > 0 && filtered.every(item => item.selected);
  if (selectAllEl) {
    selectAllEl.className = `order-lab-checkbox ${allSelected ? 'checked' : ''}`;
    selectAllEl.innerHTML = allSelected ? '<i data-lucide="check"></i>' : '';
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 36px 16px; color: #94A3B8; font-size: 13.5px;">
        <i data-lucide="flask-conical" style="width: 28px; height: 28px; margin-bottom: 6px; color: #CBD5E1;"></i>
        <div>ไม่พบรายการตรวจ Lab ที่ตรงกับเงื่อนไขค้นหา</div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  let html = '';
  filtered.forEach(item => {
    html += `
      <div class="order-lab-row ${item.selected ? 'is-selected' : ''}" onclick="toggleLabItemSelect(${item.id})">
        <div class="order-lab-col-check">
          <div class="order-lab-checkbox ${item.selected ? 'checked' : ''}">
            ${item.selected ? '<i data-lucide="check"></i>' : ''}
          </div>
        </div>
        <div class="order-lab-col-name">${item.name}</div>
        <div class="order-lab-col-price">${item.price.toFixed(2)}</div>
        <div class="order-lab-col-action">
          <button type="button" class="btn-lab-item-delete" onclick="event.stopPropagation(); deleteLabItem(${item.id})" title="ลบรายการนี้">
            <i data-lucide="trash-2"></i>
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}

function addNewLabItem() {
  const nameInput = document.getElementById('newLabNameInput');
  const priceInput = document.getElementById('newLabPriceInput');
  if (!nameInput) return;

  const nameVal = nameInput.value.trim();
  if (!nameVal) {
    if (typeof showToast === 'function') {
      showToast('กรุณาระบุชื่อรายการ', 'โปรดกรอกชื่อรายการตรวจ Lab ที่ต้องการเพิ่ม', 'warning');
    }
    nameInput.focus();
    return;
  }

  let priceVal = 120.00;
  if (priceInput && priceInput.value !== '') {
    const parsed = parseFloat(priceInput.value);
    if (!isNaN(parsed) && parsed >= 0) {
      priceVal = parsed;
    }
  }

  const newItem = {
    id: Date.now(),
    name: nameVal,
    price: priceVal,
    group: labFilterState.group && labFilterState.group !== 'all' ? labFilterState.group : 'lab1',
    category: labFilterState.category && labFilterState.category !== 'all' ? labFilterState.category : 'blood',
    favorite: true,
    selected: true
  };

  labMasterItems.unshift(newItem);
  nameInput.value = '';
  renderLabItemsList();

  if (typeof showToast === 'function') {
    showToast('เพิ่มรายการสำเร็จ', `เพิ่ม "${nameVal}" (ราคา ${priceVal.toFixed(2)} บาท) เรียบร้อยแล้ว`, 'success');
  }
}

function deleteLabItem(id) {
  const index = labMasterItems.findIndex(i => i.id === id);
  if (index === -1) return;

  const deletedItem = labMasterItems[index];
  labMasterItems.splice(index, 1);
  renderLabItemsList();

  if (typeof showToast === 'function') {
    showToast('ลบรายการสำเร็จ', `ลบรายการ "${deletedItem.name}" เรียบร้อยแล้ว`, 'info');
  }
}

function toggleLabItemSelect(id) {
  const item = labMasterItems.find(i => i.id === id);
  if (item) {
    item.selected = !item.selected;
    renderLabItemsList();
  }
}

function toggleSelectAllLabs() {
  const filtered = getFilteredLabItems();
  const allSelected = filtered.length > 0 && filtered.every(item => item.selected);
  const targetState = !allSelected;

  filtered.forEach(item => {
    item.selected = targetState;
  });

  renderLabItemsList();
}

function confirmOrderLab() {
  const selectedItems = labMasterItems.filter(item => item.selected);
  if (selectedItems.length === 0) {
    showToast('กรุณาเลือกรายการ Lab', 'โปรดคลิกเลือกรายการตรวจทางห้องปฏิบัติการอย่างน้อย 1 รายการ', 'info');
    return;
  }

  // Add into examChargesList
  let totalAmount = 0;
  selectedItems.forEach(item => {
    totalAmount += item.price;
    examChargesList.unshift({
      id: Date.now() + Math.random(),
      title: `[Lab] ${item.name}`,
      amount: item.price,
      credit: 0,
      discount: 0,
      claimable: item.price,
      nonClaimable: 0
    });
  });

  if (typeof renderExamChargesTable === 'function') {
    renderExamChargesTable();
  }

  closeOrderLabModal();
  if (typeof playHospitalChime === 'function') playHospitalChime();

  showToast(
    'สั่งออร์เดอร์ Lab สำเร็จ',
    `บันทึกรายการตรวจทางห้องปฏิบัติการ (${selectedItems.length} รายการ รวม ${totalAmount.toLocaleString('th-TH')} บาท) เรียบร้อยแล้ว`,
    'success'
  );
}

function openAddOphTreatmentModal() {
  const modal = document.getElementById('modalAddOphTreatment');
  if (!modal) return;

  // Sync patient info from active patient in examination if available
  const pName = activeExamQueueItem ? activeExamQueueItem.patientName : (activeRecordPatient ? activeRecordPatient.name : 'นาย ชัยรัตน์ โสภณ');
  const pHn = activeExamQueueItem ? activeExamQueueItem.hn : (activeRecordPatient ? activeRecordPatient.hn : '1252569-69');

  const pillName = document.getElementById('ophPillName');
  const pillHn = document.getElementById('ophPillHn');
  if (pillName) pillName.textContent = pName;
  if (pillHn) pillHn.textContent = pHn;

  // Reset search & category filter
  activeOphCategory = 'all';
  ophSearchQuery = '';
  const searchInput = document.getElementById('ophCatalogSearchInput');
  if (searchInput) searchInput.value = '';
  const clearBtn = document.getElementById('ophSearchClearBtn');
  if (clearBtn) clearBtn.style.display = 'none';

  // Reset category pills active class
  const pills = document.querySelectorAll('.oph-filter-pill');
  pills.forEach(p => p.classList.toggle('active', p.getAttribute('data-category') === 'all'));

  renderOphCatalogList();
  renderOphSelectedCards();

  modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

function closeAddOphTreatmentModal() {
  const modal = document.getElementById('modalAddOphTreatment');
  if (modal) modal.style.display = 'none';
}

function filterOphCatalogCategory(btnEl, category) {
  activeOphCategory = category;
  document.querySelectorAll('.oph-filter-pill').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderOphCatalogList();
}

function handleOphCatalogSearch(query) {
  ophSearchQuery = (query || '').trim().toLowerCase();
  const clearBtn = document.getElementById('ophSearchClearBtn');
  if (clearBtn) clearBtn.style.display = ophSearchQuery ? 'flex' : 'none';
  renderOphCatalogList();
}

function clearOphCatalogSearch() {
  const inp = document.getElementById('ophCatalogSearchInput');
  if (inp) inp.value = '';
  ophSearchQuery = '';
  const clearBtn = document.getElementById('ophSearchClearBtn');
  if (clearBtn) clearBtn.style.display = 'none';
  renderOphCatalogList();
}

function handleOphStatToggle(isChecked) {
  isOphStatActive = isChecked;
  if (isChecked) {
    showToast('เปิดโหมด ด่วน (STAT)', 'รายการตรวจรักษาจะถูกระบุเป็นกรณีด่วนเร่งด่วน', 'info');
  }
}

function renderOphCatalogList() {
  const container = document.getElementById('ophCatalogListContainer');
  const countEl = document.getElementById('ophCatalogItemCount');
  if (!container) return;

  const filtered = OPH_TREATMENT_CATALOG.filter(item => {
    if (activeOphCategory !== 'all' && item.category !== activeOphCategory) return false;
    if (ophSearchQuery) {
      const hay = `${item.code} ${item.name} ${item.desc} ${item.categoryLabel}`.toLowerCase();
      if (!hay.includes(ophSearchQuery)) return false;
    }
    return true;
  });

  if (countEl) {
    countEl.textContent = `แสดง ${filtered.length} รายการ`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="padding: 40px 10px; text-align: center; color: #94A3B8;">
        <i data-lucide="search-x" style="width: 32px; height: 32px; margin: 0 auto 8px; color: #CBD5E1;"></i>
        <div style="font-weight: 600; font-size: 13px;">ไม่พบรายการตรวจรักษาที่ตรงกับคำค้นหา</div>
        <div style="font-size: 11.5px; margin-top: 4px;">ลองเปลี่ยนหมวดหมู่หรือคำค้นหา</div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isSelected = ophSelectedOrders.some(o => o.id === item.id);
    const badgeHtml = item.supportsCourse
      ? `<span class="oph-item-course-badge"><i data-lucide="ticket"></i> ใช้สิทธิ์คอร์สได้</span>`
      : '';

    return `
      <div class="oph-catalog-item-row ${isSelected ? 'selected' : ''}" onclick="toggleOphCatalogItem('${item.id}')">
        <div class="oph-item-left">
          <input type="checkbox" class="oph-item-check" ${isSelected ? 'checked' : ''} onclick="event.stopPropagation(); toggleOphCatalogItem('${item.id}')">
          <div class="oph-item-info">
            <div class="oph-item-title-line">
              <span class="oph-item-code">${item.code}</span>
              <span class="oph-item-name">${item.name}</span>
              ${badgeHtml}
            </div>
            <div class="oph-item-desc">${item.desc}</div>
          </div>
        </div>
        <div class="oph-item-right">
          <span class="oph-item-price">฿${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function toggleOphCatalogItem(itemId) {
  const existingIdx = ophSelectedOrders.findIndex(o => o.id === itemId);
  if (existingIdx !== -1) {
    ophSelectedOrders.splice(existingIdx, 1);
  } else {
    const item = OPH_TREATMENT_CATALOG.find(i => i.id === itemId);
    if (item) {
      ophSelectedOrders.push({
        id: item.id,
        name: item.name,
        code: item.code,
        price: item.price,
        qty: 1,
        eyeSide: item.defaultEye || 'OU',
        supportsCourse: !!item.supportsCourse,
        isCourseDeducted: false
      });
    }
  }

  // Clear active favorite button highlight if custom selection changed
  document.querySelectorAll('.oph-fav-set-btn').forEach(b => b.classList.remove('active'));

  renderOphCatalogList();
  renderOphSelectedCards();
}

function applyOphFavoriteSet(setKey) {
  const favSet = OPH_FAVORITE_SETS[setKey];
  if (!favSet) return;

  // Highlight button
  document.querySelectorAll('.oph-fav-set-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`favSet_${setKey}`);
  if (btn) btn.classList.add('active');

  // Load items from set
  ophSelectedOrders = favSet.itemIds.map(id => {
    const item = OPH_TREATMENT_CATALOG.find(i => i.id === id);
    return {
      id: item.id,
      name: item.name,
      code: item.code,
      price: item.price,
      qty: 1,
      eyeSide: item.defaultEye || 'OU',
      supportsCourse: !!item.supportsCourse,
      isCourseDeducted: false
    };
  });

  renderOphCatalogList();
  renderOphSelectedCards();

  if (typeof playHospitalChime === 'function') playHospitalChime();
  showToast('เลือกชุดตรวจด่วน', `โหลด "${favSet.name}" จำนวน ${ophSelectedOrders.length} รายการแล้ว`, 'info');
}

function setOphItemEyeSide(itemId, side) {
  const item = ophSelectedOrders.find(o => o.id === itemId);
  if (item) {
    item.eyeSide = side;
    renderOphSelectedCards();
  }
}

function toggleOphItemCourse(itemId) {
  const item = ophSelectedOrders.find(o => o.id === itemId);
  if (item && item.supportsCourse) {
    item.isCourseDeducted = !item.isCourseDeducted;
    renderOphSelectedCards();
    if (item.isCourseDeducted) {
      showToast('ใช้สิทธิคอร์สจักษุ', `ตัดการรักษา "${item.name}" จากคอร์สคงเหลือของผู้ป่วย`, 'success');
    }
  }
}

function changeOphItemQty(itemId, delta) {
  const item = ophSelectedOrders.find(o => o.id === itemId);
  if (item) {
    item.qty = Math.max(1, item.qty + delta);
    renderOphSelectedCards();
  }
}

function removeOphSelectedItem(itemId) {
  ophSelectedOrders = ophSelectedOrders.filter(o => o.id !== itemId);
  document.querySelectorAll('.oph-fav-set-btn').forEach(b => b.classList.remove('active'));
  renderOphCatalogList();
  renderOphSelectedCards();
}

function clearAllOphSelectedItems() {
  if (ophSelectedOrders.length === 0) return;
  ophSelectedOrders = [];
  document.querySelectorAll('.oph-fav-set-btn').forEach(b => b.classList.remove('active'));
  renderOphCatalogList();
  renderOphSelectedCards();
  showToast('ล้างรายการทั้งหมด', 'นำรายการที่เลือกออกจากตระกร้าเรียบร้อยแล้ว', 'info');
}

function renderOphSelectedCards() {
  const container = document.getElementById('ophSelectedCardsContainer');
  const countBadge = document.getElementById('ophSelectedCountBadge');
  const summarySubtext = document.getElementById('ophSummarySubtext');
  const summaryPrice = document.getElementById('ophSummaryPrice');
  const submitBtnLabel = document.getElementById('ophSubmitBtnLabel');
  if (!container) return;

  const count = ophSelectedOrders.length;
  if (countBadge) countBadge.textContent = `${count} รายการ`;
  if (submitBtnLabel) submitBtnLabel.textContent = `+ บันทึกรายการรักษา (${count})`;

  if (count === 0) {
    container.innerHTML = `
      <div class="oph-selected-empty">
        <i data-lucide="shopping-cart"></i>
        <div style="font-weight: 700; color: #475569; font-size: 13.5px;">ยังไม่มีรายการที่เลือก</div>
        <div style="font-size: 12px; color: #94A3B8; max-width: 220px; line-height: 1.4;">
          คลิกเลือกชุดตรวจด่วนด้านซ้าย หรือติ๊กรายการหัตถการจากตารางตรงกลาง
        </div>
      </div>
    `;
    if (summarySubtext) summarySubtext.textContent = 'ยอดรวม 0 รายการ:';
    if (summaryPrice) summaryPrice.textContent = '฿0.00 บาท';
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  let totalAmount = 0;
  let courseDeductedCount = 0;

  container.innerHTML = ophSelectedOrders.map(item => {
    const isFree = !!item.isCourseDeducted;
    if (isFree) {
      courseDeductedCount++;
    } else {
      totalAmount += (item.price * item.qty);
    }

    // Segmented buttons for eye side
    const hasEyeSide = item.eyeSide !== null;
    const eyeSideHtml = hasEyeSide ? `
      <div class="oph-eye-side-segmented">
        <button type="button" class="oph-segment-btn ${item.eyeSide === 'OD' ? 'active' : ''}" onclick="setOphItemEyeSide('${item.id}', 'OD')">
          OD ขวา
        </button>
        <button type="button" class="oph-segment-btn ${item.eyeSide === 'OS' ? 'active' : ''}" onclick="setOphItemEyeSide('${item.id}', 'OS')">
          OS ซ้าย
        </button>
        <button type="button" class="oph-segment-btn ${item.eyeSide === 'OU' ? 'active' : ''}" onclick="setOphItemEyeSide('${item.id}', 'OU')">
          OU ทั้งสองข้าง
        </button>
      </div>
    ` : `
      <div style="font-size: 11px; color: #64748B; background: #F8FAFC; border: 1px solid #E2E8F0; padding: 4px 8px; border-radius: 4px; display: inline-flex; align-items: center; gap: 4px;">
        <i data-lucide="minus-circle" style="width: 12px; height: 12px;"></i> ไม่ระบุข้างตา
      </div>
    `;

    // Course deduction toggle for items supporting courses
    const courseToggleHtml = item.supportsCourse ? `
      <div class="oph-course-toggle-box">
        <label class="oph-course-switch-wrap" title="สลับการตัดคอร์ส">
          <input type="checkbox" ${item.isCourseDeducted ? 'checked' : ''} onchange="toggleOphItemCourse('${item.id}')">
          <span class="oph-slider"></span>
        </label>
        <div class="oph-course-info-txt">
          <span class="oph-course-lead">ตัดจากคอร์สคงเหลือ (ครั้งที่ 3/4)</span>
          <span class="oph-course-sub">สิทธิคอร์ส IPL Dry Eye (เหลือ 2 ครั้ง)</span>
        </div>
      </div>
    ` : '';

    const priceDisplayHtml = isFree ? `
      <div class="oph-card-price-wrap">
        <span class="oph-orig-strikethrough">฿${(item.price * item.qty).toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
        <span class="oph-card-price free">0.00 ฿</span>
      </div>
    ` : `
      <span class="oph-card-price">฿${(item.price * item.qty).toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
    `;

    return `
      <div class="oph-selected-card">
        <div class="oph-card-top-row">
          <div class="oph-card-title-wrap">
            <span class="oph-card-code">${item.code}</span>
            <span class="oph-card-name">${item.name}</span>
          </div>
          <button type="button" class="btn-card-del" onclick="removeOphSelectedItem('${item.id}')" title="ลบรายการนี้">
            <i data-lucide="trash-2"></i>
          </button>
        </div>

        ${eyeSideHtml}

        ${courseToggleHtml}

        <div class="oph-card-bottom-row">
          <div class="oph-qty-stepper">
            <button type="button" class="btn-oph-qty" onclick="changeOphItemQty('${item.id}', -1)" title="ลดจำนวน">-</button>
            <span class="oph-qty-num">${item.qty}</span>
            <button type="button" class="btn-oph-qty" onclick="changeOphItemQty('${item.id}', 1)" title="เพิ่มจำนวน">+</button>
          </div>
          ${priceDisplayHtml}
        </div>
      </div>
    `;
  }).join('');

  if (summarySubtext) {
    if (courseDeductedCount > 0) {
      summarySubtext.textContent = `ยอดรวม ${count} รายการ (ใช้คอร์ส ${courseDeductedCount} รายการ):`;
    } else {
      summarySubtext.textContent = `ยอดรวม ${count} รายการ:`;
    }
  }

  if (summaryPrice) {
    summaryPrice.textContent = `฿${totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} บาท`;
  }

  if (window.lucide) window.lucide.createIcons();
}

function submitOphTreatmentOrders() {
  if (ophSelectedOrders.length === 0) {
    showToast('กรุณาเลือกรายการรักษา', 'ยังไม่มีรายการใดถูกเลือก กรุณาติ๊กเลือกรายการอย่างน้อย 1 รายการ', 'warning');
    return;
  }

  const doctorSelect = document.getElementById('ophOrderingDoctor');
  const orderingDoctor = doctorSelect ? doctorSelect.value : 'นพ. กานต์ จักษุแพทย์';

  // Format and prepend orders into examChargesList
  ophSelectedOrders.forEach(item => {
    let sideText = '';
    if (item.eyeSide === 'OD') sideText = ' [ตาขวา OD]';
    else if (item.eyeSide === 'OS') sideText = ' [ตาซ้าย OS]';
    else if (item.eyeSide === 'OU') sideText = ' [ทั้งสองข้าง OU]';

    const statText = isOphStatActive ? ' (ด่วน STAT)' : '';
    const courseText = item.isCourseDeducted ? ' • [ตัดสิทธิ์คอร์ส]' : '';
    const fullTitle = `${item.name}${sideText}${statText}${courseText}`;

    const originalAmount = item.price * item.qty;
    const finalAmount = item.isCourseDeducted ? 0 : originalAmount;
    const discountAmount = item.isCourseDeducted ? originalAmount : 0;

    examChargesList.unshift({
      id: Date.now() + Math.floor(Math.random() * 1000),
      title: fullTitle,
      amount: finalAmount,
      credit: 0,
      discount: discountAmount,
      claimable: 0,
      nonClaimable: 0,
      doctor: orderingDoctor
    });
  });

  renderExamChargesTable();
  closeAddOphTreatmentModal();

  if (typeof playHospitalChime === 'function') playHospitalChime();
  showToast(
    'บันทึกรายการรักษาสำเร็จ',
    `เพิ่ม ${ophSelectedOrders.length} รายการเข้าสู่ตารางค่ารักษาในห้องตรวจเรียบร้อยแล้ว`,
    'success'
  );
}

// Close Oph Modal on Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const rxModal = document.getElementById('modalPrescriptionOrder');
    if (rxModal && rxModal.style.display === 'flex') {
      closePrescriptionModal();
    }
    const labModal = document.getElementById('modalOrderLab');
    if (labModal && labModal.style.display === 'flex') {
      closeOrderLabModal();
    }
    const ophModal = document.getElementById('modalAddOphTreatment');
    if (ophModal && ophModal.style.display === 'flex') {
      closeAddOphTreatmentModal();
    }
    const odModal = document.getElementById('modalOrderDaily');
    if (odModal && odModal.style.display === 'flex') {
      closeOrderDailyModal();
    }
  }
});

// ==========================================================
// PRESCRIPTION ORDERS MODAL MODULE (โมดูลสั่งยาตามภาพที่ 2)
// ==========================================================

let prescriptionItems = [
  {
    id: 1,
    checked: true,
    name: '(EXTEMP.) CEFTAZIDIME EYE DROP\n(50 MG/ML) 10 ML -ED',
    type: '-',
    qty: 0,
    dispensed: '109.00',
    amount: '0.00',
    credit: '0.00',
    claimable: '0.00',
    nonClaimable: '0.00',
    discount: '0.00',
    overdue: '0.00',
    paid: '0.00',
    billed: '0.00',
    status: ''
  },
  {
    id: 2,
    checked: false,
    name: '(EXTEMP.) CEFTAZIDIME EYE DROP\n(50 MG/ML) 10 ML -ED',
    type: '-',
    qty: 0,
    dispensed: '109.00',
    amount: '0.00',
    credit: '0.00',
    claimable: '0.00',
    nonClaimable: '0.00',
    discount: '0.00',
    overdue: '0.00',
    paid: '0.00',
    billed: '0.00',
    status: ''
  },
  {
    id: 3,
    checked: false,
    name: '(EXTEMP.) CEFTAZIDIME EYE DROP\n(50 MG/ML) 10 ML -ED',
    type: '-',
    qty: 0,
    dispensed: '109.00',
    amount: '0.00',
    credit: '0.00',
    claimable: '0.00',
    nonClaimable: '0.00',
    discount: '0.00',
    overdue: '0.00',
    paid: '0.00',
    billed: '0.00',
    status: ''
  },
  {
    id: 4,
    checked: false,
    name: '0.9% NaCl,100 ml-ED',
    type: '-',
    qty: 0,
    dispensed: '109.00',
    amount: '0.00',
    credit: '0.00',
    claimable: '0.00',
    nonClaimable: '0.00',
    discount: '0.00',
    overdue: '0.00',
    paid: '0.00',
    billed: '0.00',
    status: ''
  },
  {
    id: 5,
    checked: false,
    name: '0.9% NaCl,100 ml-ED',
    type: '-',
    qty: 0,
    dispensed: '109.00',
    amount: '0.00',
    credit: '0.00',
    claimable: '0.00',
    nonClaimable: '0.00',
    discount: '0.00',
    overdue: '0.00',
    paid: '0.00',
    billed: '0.00',
    status: ''
  },
  {
    id: 6,
    checked: false,
    name: '0.9% NaCl,100 ml-ED',
    type: '-',
    qty: 0,
    dispensed: '109.00',
    amount: '0.00',
    credit: '0.00',
    claimable: '0.00',
    nonClaimable: '0.00',
    discount: '0.00',
    overdue: '0.00',
    paid: '0.00',
    billed: '0.00',
    status: ''
  }
];

let isAddingToPrescriptionModal = false;

function openPrescriptionModal() {
  const modal = document.getElementById('modalPrescriptionOrder');
  if (!modal) return;
  renderPrescriptionTable();
  modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

function closePrescriptionModal() {
  const modal = document.getElementById('modalPrescriptionOrder');
  if (modal) modal.style.display = 'none';
}

function renderPrescriptionTable() {
  const tbody = document.getElementById('rxTableBody');
  if (!tbody) return;

  if (prescriptionItems.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="14" style="text-align: center; padding: 48px 16px; color: #94a3b8; font-size: 14px;">
          ไม่มีรายการยาในตาราง กรุณากดปุ่ม "+ เพิ่มรายการยา" เพื่อเพิ่มยาใหม่
        </td>
      </tr>
    `;
    updatePrescriptionHeaderCheckbox();
    return;
  }

  tbody.innerHTML = prescriptionItems.map((item, index) => {
    const formattedName = (item.name || '').replace(/\n/g, '<br>');
    const isChecked = !!item.checked;
    return `
      <tr class="${isChecked ? 'row-selected' : ''}">
        <td class="rx-td-check">
          <div class="rx-checkbox-box ${isChecked ? 'checked' : ''}" onclick="togglePrescriptionCheckbox(${index})" title="${isChecked ? 'ยกเลิกการเลือก' : 'เลือกรายการนี้'}">
            <i data-lucide="check" style="${isChecked ? 'display: block;' : 'display: none;'}"></i>
          </div>
        </td>
        <td class="rx-td-name">${formattedName}</td>
        <td class="rx-td-type">${item.type || '-'}</td>
        <td class="rx-td-qty">
          <div class="rx-stepper">
            <input type="number" class="rx-qty-input" value="${item.qty || 0}" min="0"
              onchange="updatePrescriptionItemQty(${index}, this.value)"
              onclick="event.stopPropagation()">
            <div class="rx-stepper-btns">
              <button type="button" class="rx-step-btn up" onclick="stepPrescriptionItemQty(${index}, 1)" title="เพิ่มจำนวน"><i data-lucide="chevron-up"></i></button>
              <button type="button" class="rx-step-btn down" onclick="stepPrescriptionItemQty(${index}, -1)" title="ลดจำนวน"><i data-lucide="chevron-down"></i></button>
            </div>
          </div>
        </td>
        <td class="rx-td-dispensed">${item.dispensed || '109.00'}</td>
        <td class="rx-td-num">${item.amount || '0.00'}</td>
        <td class="rx-td-num">${item.credit || '0.00'}</td>
        <td class="rx-td-num">${item.claimable || '0.00'}</td>
        <td class="rx-td-num">${item.nonClaimable || '0.00'}</td>
        <td class="rx-td-num">${item.discount || '0.00'}</td>
        <td class="rx-td-num">${item.overdue || '0.00'}</td>
        <td class="rx-td-num">${item.paid || '0.00'}</td>
        <td class="rx-td-num">${item.billed || '0.00'}</td>
        <td class="rx-td-num">${item.status || ''}</td>
      </tr>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
  updatePrescriptionHeaderCheckbox();
}

function updatePrescriptionHeaderCheckbox() {
  const headerBox = document.getElementById('rxCheckAllBox');
  const headerSvg = document.getElementById('rxCheckAllSvg');
  if (!headerBox) return;

  const allChecked = prescriptionItems.length > 0 && prescriptionItems.every(i => i.checked);
  if (allChecked) {
    headerBox.classList.add('checked');
    if (headerSvg) headerSvg.style.display = 'block';
  } else {
    headerBox.classList.remove('checked');
    if (headerSvg) headerSvg.style.display = 'none';
  }
}

function togglePrescriptionCheckbox(index) {
  if (prescriptionItems[index]) {
    prescriptionItems[index].checked = !prescriptionItems[index].checked;
    renderPrescriptionTable();
  }
}

function toggleAllPrescriptionCheckboxes() {
  const allChecked = prescriptionItems.length > 0 && prescriptionItems.every(i => i.checked);
  const targetState = !allChecked;
  prescriptionItems.forEach(i => i.checked = targetState);
  renderPrescriptionTable();
}

function stepPrescriptionItemQty(index, delta) {
  if (prescriptionItems[index]) {
    const currentQty = parseInt(prescriptionItems[index].qty, 10) || 0;
    const newQty = Math.max(0, currentQty + delta);
    prescriptionItems[index].qty = newQty;
    if (newQty > 0) {
      prescriptionItems[index].checked = true;
    }
    renderPrescriptionTable();
  }
}

function updatePrescriptionItemQty(index, val) {
  if (prescriptionItems[index]) {
    const newQty = Math.max(0, parseInt(val, 10) || 0);
    prescriptionItems[index].qty = newQty;
    if (newQty > 0) {
      prescriptionItems[index].checked = true;
    }
    renderPrescriptionTable();
  }
}

function scrollRxTable(offset) {
  const container = document.getElementById('rxTableContainer');
  if (container) {
    container.scrollBy({ left: offset, behavior: 'smooth' });
  }
}

function deleteSelectedPrescriptionItems() {
  const selectedCount = prescriptionItems.filter(i => i.checked).length;
  if (selectedCount === 0) {
    showToast('แจ้งเตือน', 'กรุณาเลือกรายการยาที่ต้องการลบ (ติ๊กเครื่องหมายถูกหน้าชื่อยา)', 'warning');
    return;
  }

  prescriptionItems = prescriptionItems.filter(i => !i.checked);
  renderPrescriptionTable();
  showToast('ลบรายการยาสำเร็จ', `ลบรายการยาที่เลือกจำนวน ${selectedCount} รายการเรียบร้อยแล้ว`, 'info');
}

function openAddMedicineToPrescription() {
  isAddingToPrescriptionModal = true;
  openOrderDailyFormModal();
}

function submitPrescriptionOrder() {
  // Collect checked items or items with qty > 0
  let selected = prescriptionItems.filter(i => i.checked);
  if (selected.length === 0) {
    selected = prescriptionItems.filter(i => (i.qty || 0) > 0);
  }
  if (selected.length === 0 && prescriptionItems.length > 0) {
    // Default to the first item if nothing was checked
    selected = [prescriptionItems[0]];
  }

  if (selected.length === 0) {
    showToast('แจ้งเตือน', 'ไม่มีรายการยาให้สั่งออร์เดอร์', 'warning');
    return;
  }

  // Prepend to examChargesList
  selected.forEach(item => {
    const qty = (item.qty && item.qty > 0) ? item.qty : 1;
    const unitPrice = parseFloat(item.dispensed) || 109;
    const totalAmount = unitPrice * qty;
    const cleanName = (item.name || 'ยาเวชภัณฑ์').replace(/\n/g, ' ');

    examChargesList.unshift({
      id: Date.now() + Math.floor(Math.random() * 1000),
      title: `ค่ายา: ${cleanName} x ${qty}`,
      amount: totalAmount,
      credit: parseFloat(item.credit) || 0,
      discount: parseFloat(item.discount) || 0,
      claimable: parseFloat(item.claimable) || 0,
      nonClaimable: parseFloat(item.nonClaimable) || 0
    });
  });

  renderExamChargesTable();
  closePrescriptionModal();

  if (typeof playHospitalChime === 'function') playHospitalChime();
  showToast(
    'สั่งออร์เดอร์สำเร็จ',
    `บันทึกรายการสั่งยาและเวชภัณฑ์จำนวน ${selected.length} รายการเข้าสู่ตารางค่ารักษาเรียบร้อยแล้ว`,
    'success'
  );
}

// ==========================================================

// ==========================================================
// ORDER ORDERS MODULE (โมดูลสั่ง Orders / หัตถการและการรักษา)
// ==========================================================

let ordersMasterItems = [
  { id: 101, name: "Eye Irrigation (ล้างตา)", price: 150.00, type: "oph", category: "wound", favorite: true, selected: true },
  { id: 102, name: "Tonometry (วัดความดันลูกตา)", price: 100.00, type: "diagnostic", category: "exam", favorite: true, selected: true },
  { id: 103, name: "Fundus Photography (ถ่ายภาพจอประสาทตา)", price: 300.00, type: "diagnostic", category: "exam", favorite: true, selected: true },
  { id: 104, name: "Optical Coherence Tomography (OCT สแกนขั้วประสาทตา)", price: 800.00, type: "diagnostic", category: "exam", favorite: false, selected: false },
  { id: 105, name: "Visual Field Test (ตรวจลานสายตาคอมพิวเตอร์)", price: 600.00, type: "diagnostic", category: "exam", favorite: false, selected: false },
  { id: 106, name: "Foreign Body Removal (คีบสิ่งแปลกปลอมออกจากตา)", price: 350.00, type: "oph", category: "treat", favorite: false, selected: false },
  { id: 107, name: "Fluorescein Staining (ย้อมสีตรวจแผลกระจกตา)", price: 120.00, type: "oph", category: "exam", favorite: false, selected: false },
  { id: 108, name: "Slit Lamp Biomicroscopy (ตรวจตาด้วยกล้องสลิตแลมป์)", price: 150.00, type: "oph", category: "exam", favorite: false, selected: false },
  { id: 109, name: "Eyelid Epilation (ถอนขนตาคดเก)", price: 120.00, type: "oph", category: "treat", favorite: false, selected: false },
  { id: 110, name: "Subconjunctival Injection (ฉีดยาใต้เยื่อบุตา)", price: 400.00, type: "oph", category: "treat", favorite: false, selected: false },
  { id: 111, name: "Eye Dressing & Patch (ทำแผลและปิดตา)", price: 100.00, type: "nursing", category: "wound", favorite: true, selected: false },
  { id: 112, name: "Auto Refractometer Test (ตรวจวัดสายตาคอมพิวเตอร์)", price: 100.00, type: "diagnostic", category: "exam", favorite: true, selected: false },
  { id: 113, name: "Tear Break-Up Time (TBUT วัดฟิล์มน้ำตา)", price: 150.00, type: "oph", category: "exam", favorite: true, selected: false },
  { id: 114, name: "Schirmer Test (ตรวจปริมาณน้ำตา)", price: 120.00, type: "oph", category: "exam", favorite: true, selected: false },
  { id: 115, name: "YAG Laser Capsulotomy (เลเซอร์ถุงหุ้มเลนส์ตา)", price: 1500.00, type: "oph", category: "laser", favorite: false, selected: false }
];

let ordersFilterState = {
  favorite: '',
  type: '',
  category: '',
  search: ''
};

function openOrderOrdersModal() {
  const modal = document.getElementById('modalOrderOrders');
  if (!modal) return;

  renderOrdersItemsList();
  modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

function closeOrderOrdersModal() {
  const modal = document.getElementById('modalOrderOrders');
  if (modal) modal.style.display = 'none';
}

function handleOrdersFilterChange() {
  const favEl = document.getElementById('ordersFavoriteSelect');
  const typEl = document.getElementById('ordersTypeSelect');
  const catEl = document.getElementById('ordersCategorySelect');
  const schEl = document.getElementById('ordersSearchInput');

  ordersFilterState.favorite = favEl ? favEl.value : '';
  ordersFilterState.type = typEl ? typEl.value : '';
  ordersFilterState.category = catEl ? catEl.value : '';
  ordersFilterState.search = schEl ? schEl.value.trim().toLowerCase() : '';

  renderOrdersItemsList();
}

function getFilteredOrdersItems() {
  return ordersMasterItems.filter(item => {
    if (ordersFilterState.favorite === 'favorite' && !item.favorite) return false;
    if (ordersFilterState.type && ordersFilterState.type !== 'all' && item.type !== ordersFilterState.type) return false;
    if (ordersFilterState.category && ordersFilterState.category !== 'all' && item.category !== ordersFilterState.category) return false;
    if (ordersFilterState.search && !item.name.toLowerCase().includes(ordersFilterState.search)) return false;
    return true;
  });
}

function renderOrdersItemsList() {
  const container = document.getElementById('orderOrdersListBody');
  if (!container) return;

  const filtered = getFilteredOrdersItems();

  // Update select all checkbox in header
  const selectAllEl = document.getElementById('ordersSelectAllCheck');
  const allSelected = filtered.length > 0 && filtered.every(item => item.selected);
  if (selectAllEl) {
    selectAllEl.className = `order-lab-checkbox ${allSelected ? 'checked' : ''}`;
    selectAllEl.innerHTML = allSelected ? '<i data-lucide="check"></i>' : '';
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 36px 16px; color: #94A3B8; font-size: 13.5px;">
        <i data-lucide="clipboard-list" style="width: 28px; height: 28px; margin-bottom: 6px; color: #CBD5E1;"></i>
        <div>ไม่พบรายการ Orders หรือหัตถการที่ตรงกับเงื่อนไขค้นหา</div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  let html = '';
  filtered.forEach(item => {
    html += `
      <div class="order-lab-row ${item.selected ? 'is-selected' : ''}" onclick="toggleOrdersItemSelect(${item.id})">
        <div class="order-lab-col-check">
          <div class="order-lab-checkbox ${item.selected ? 'checked' : ''}">
            ${item.selected ? '<i data-lucide="check"></i>' : ''}
          </div>
        </div>
        <div class="order-lab-col-name">${item.name}</div>
        <div class="order-lab-col-price">${item.price.toFixed(2)}</div>
        <div class="order-lab-col-action">
          <button type="button" class="btn-lab-item-delete" onclick="event.stopPropagation(); deleteOrdersItem(${item.id})" title="ลบรายการนี้">
            <i data-lucide="trash-2"></i>
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}

function toggleOrdersItemSelect(id) {
  const item = ordersMasterItems.find(i => i.id === id);
  if (item) {
    item.selected = !item.selected;
    renderOrdersItemsList();
  }
}

function toggleSelectAllOrders() {
  const filtered = getFilteredOrdersItems();
  const allSelected = filtered.length > 0 && filtered.every(item => item.selected);
  const targetState = !allSelected;

  filtered.forEach(item => {
    item.selected = targetState;
  });

  renderOrdersItemsList();
}

function addNewOrdersItem() {
  const nameInput = document.getElementById('newOrdersNameInput');
  const priceInput = document.getElementById('newOrdersPriceInput');
  if (!nameInput) return;

  const nameVal = nameInput.value.trim();
  if (!nameVal) {
    if (typeof showToast === 'function') {
      showToast('กรุณาระบุชื่อรายการ', 'โปรดกรอกชื่อรายการ Orders หรือหัตถการที่ต้องการเพิ่ม', 'warning');
    }
    nameInput.focus();
    return;
  }

  let priceVal = 250.00;
  if (priceInput && priceInput.value !== '') {
    const parsed = parseFloat(priceInput.value);
    if (!isNaN(parsed) && parsed >= 0) {
      priceVal = parsed;
    }
  }

  const newItem = {
    id: Date.now(),
    name: nameVal,
    price: priceVal,
    type: ordersFilterState.type && ordersFilterState.type !== 'all' ? ordersFilterState.type : 'oph',
    category: ordersFilterState.category && ordersFilterState.category !== 'all' ? ordersFilterState.category : 'treat',
    favorite: true,
    selected: true
  };

  ordersMasterItems.unshift(newItem);
  nameInput.value = '';
  renderOrdersItemsList();

  if (typeof showToast === 'function') {
    showToast('เพิ่มรายการสำเร็จ', `เพิ่ม "${nameVal}" (ราคา ${priceVal.toFixed(2)} บาท) เรียบร้อยแล้ว`, 'success');
  }
}

function deleteOrdersItem(id) {
  const index = ordersMasterItems.findIndex(i => i.id === id);
  if (index === -1) return;

  const deletedItem = ordersMasterItems[index];
  ordersMasterItems.splice(index, 1);
  renderOrdersItemsList();

  if (typeof showToast === 'function') {
    showToast('ลบรายการสำเร็จ', `ลบรายการ "${deletedItem.name}" เรียบร้อยแล้ว`, 'info');
  }
}

function confirmOrderOrders() {
  const selectedItems = ordersMasterItems.filter(item => item.selected);
  if (selectedItems.length === 0) {
    showToast('กรุณาเลือกรายการ Orders', 'โปรดคลิกเลือกรายการ Orders หรือหัตถการอย่างน้อย 1 รายการ', 'info');
    return;
  }

  // Add into examChargesList
  let totalAmount = 0;
  selectedItems.forEach(item => {
    totalAmount += item.price;
    examChargesList.unshift({
      id: Date.now() + Math.random(),
      title: `[Order] ${item.name}`,
      amount: item.price,
      credit: 0,
      discount: 0,
      claimable: item.price,
      nonClaimable: 0
    });
  });

  if (typeof renderExamChargesTable === 'function') {
    renderExamChargesTable();
  }

  closeOrderOrdersModal();
  if (typeof playHospitalChime === 'function') playHospitalChime();

  showToast(
    'สั่งออร์เดอร์สำเร็จ',
    `บันทึกรายการ Orders / หัตถการ (${selectedItems.length} รายการ รวม ${totalAmount.toLocaleString('th-TH')} บาท) เรียบร้อยแล้ว`,
    'success'
  );
}

// ==========================================================
// ORDER DAILY MODAL MODULE (ระบบสั่งยา Order Daily)
// ==========================================================

const OD_SAMPLE_MEDICINES = [
  {
    code: 'MED-01',
    name: 'Hista-Oph 0.05% Eye Drops (5 ml)',
    generic: 'Antazoline + Tetrahydrozoline',
    route: 'หยอดตาสองข้าง (OU)',
    dose: '1',
    unit: 'หยด',
    timeUsage: 'วันละ 4 ครั้ง (เช้า กลางวัน เย็น ก่อนนอน)',
    mealTime1: 'พร้อมอาหาร',
    mealTime2: 'เช้า-กลางวัน-เย็น-ก่อนนอน',
    dosingInterval: 'ทุกวัน (Daily)',
    indication: 'บรรเทาอาการตาแห้ง ระคายเคืองตา',
    precaution: 'ระวังปลายหลอดสัมผัสตาหรือสิ่งแปลกปลอม',
    price: 180
  },
  {
    code: 'MED-02',
    name: 'Tears Naturale Free Preservative-Free (32 หลอด)',
    generic: 'Dextran 70 + Hydroxypropyl methylcellulose',
    route: 'หยอดตาสองข้าง (OU)',
    dose: '1',
    unit: 'หยด',
    timeUsage: 'หยอดเมื่อมีอาการ (prn)',
    mealTime1: 'หลังอาหารทันที',
    mealTime2: 'เช้า-กลางวัน-เย็น-ก่อนนอน',
    dosingInterval: 'ทุกวัน (Daily)',
    indication: 'บรรเทาอาการตาแห้ง ระคายเคืองตา',
    precaution: 'หลังเปิดขวดเก็บได้ไม่เกิน 30 วัน',
    price: 390
  },
  {
    code: 'MED-03',
    name: 'Vidisic Gel 10g (เจลหล่อลื่นดวงตา)',
    generic: 'Carbomer 980',
    route: 'ป้ายตาสองข้าง (Eye Ointment OU)',
    dose: '1',
    unit: 'หยด',
    timeUsage: 'วันละ 1 ครั้ง ก่อนนอน',
    mealTime1: 'ก่อนนอน',
    mealTime2: 'ก่อนนอน',
    dosingInterval: 'ทุกวัน (Daily)',
    indication: 'บรรเทาอาการตาแห้ง ระคายเคืองตา',
    precaution: 'อาจมีอาการตามัวชั่วคราวหลังหยอด',
    price: 240
  },
  {
    code: 'MED-04',
    name: 'Cravit 0.5% Eye Drops (Levofloxacin 5 ml)',
    generic: 'Levofloxacin Hydrate',
    route: 'หยอดตาสองข้าง (OU)',
    dose: '1',
    unit: 'หยด',
    timeUsage: 'วันละ 4 ครั้ง (เช้า กลางวัน เย็น ก่อนนอน)',
    mealTime1: 'หลังอาหารทันที',
    mealTime2: 'เช้า-กลางวัน-เย็น-ก่อนนอน',
    dosingInterval: 'ทุกวัน (Daily)',
    indication: 'ต้านการติดเชื้อแบคทีเรียที่ดวงตา',
    precaution: 'ควรถอดคอนแทคเลนส์ก่อนหยอดยา 15 นาที',
    price: 320
  },
  {
    code: 'MED-05',
    name: 'Tobradex Eye Drops 5 ml',
    generic: 'Tobramycin 0.3% + Dexamethasone 0.1%',
    route: 'หยอดตาข้างขวา (OD)',
    dose: '1',
    unit: 'หยด',
    timeUsage: 'วันละ 4 ครั้ง (เช้า กลางวัน เย็น ก่อนนอน)',
    mealTime1: 'หลังอาหารทันที',
    mealTime2: 'เช้า-กลางวัน-เย็น-ก่อนนอน',
    dosingInterval: 'ทุกวัน (Daily)',
    indication: 'ลดการอักเสบหลังผ่าตัดตา',
    precaution: 'ระวังปลายหลอดสัมผัสตาหรือสิ่งแปลกปลอม',
    price: 290
  },
  {
    code: 'MED-06',
    name: 'Latanoprost 0.005% Eye Drops (Xalatan 2.5 ml)',
    generic: 'Latanoprost',
    route: 'หยอดตาสองข้าง (OU)',
    dose: '1',
    unit: 'หยด',
    timeUsage: 'วันละ 1 ครั้ง ก่อนนอน',
    mealTime1: 'ก่อนนอน',
    mealTime2: 'ก่อนนอน',
    dosingInterval: 'ทุกวัน (Daily)',
    indication: 'ลดความดันลูกตาในผู้ป่วยต้อหิน',
    precaution: 'ระวังปลายหลอดสัมผัสตาหรือสิ่งแปลกปลอม',
    price: 650
  },
  {
    code: 'MED-07',
    name: 'Amlodipine 5 mg Tablet (ตรวจประวัติแพ้ยา)',
    generic: 'Amlodipine Besylate',
    route: 'รับประทาน (Oral)',
    dose: '1',
    unit: 'เม็ด',
    timeUsage: 'วันละ 1 ครั้ง ก่อนนอน',
    mealTime1: 'หลังอาหารทันที',
    mealTime2: 'เช้า-เย็น',
    dosingInterval: 'ทุกวัน (Daily)',
    indication: 'ลดความดันโลหิต',
    precaution: 'ห้ามใช้ในผู้ที่มีประวัติแพ้ยา',
    price: 120,
    isAllergicAlert: true
  }
];

let selectedOdMedicineItem = null;

function openOrderDailyModal() {
  openPrescriptionModal();
}

function openOrderDailyFormModal() {
  const modal = document.getElementById('modalOrderDaily');
  if (!modal) return;

  // Reset form or set initial values matching Image 1
  const searchInput = document.getElementById('odMedSearchInput');
  const qtyInput = document.getElementById('odMedQtyInput');
  const doseSelect = document.getElementById('odDoseSelect');
  const unitSelect = document.getElementById('odUnitSelect');
  const routeSelect = document.getElementById('odRouteSelect');
  const timeUsageSelect = document.getElementById('odTimeUsageSelect');
  const mealTimeSelect1 = document.getElementById('odMealTimeSelect1');
  const mealTimeSelect2 = document.getElementById('odMealTimeSelect2');
  const dosingIntervalSelect = document.getElementById('odDosingIntervalSelect');
  const indicationSelect = document.getElementById('odIndicationSelect');
  const precautionSelect = document.getElementById('odPrecautionSelect');
  const note1 = document.getElementById('odLabelNote1');
  const note2 = document.getElementById('odLabelNote2');
  const nonEdReason = document.getElementById('odNonEdReason');
  const freqInput = document.getElementById('odFreqInput');
  const startDate = document.getElementById('odStartDateInput');
  const endDate = document.getElementById('odEndDateInput');

  if (searchInput) searchInput.value = '';
  if (qtyInput) qtyInput.value = '0';
  if (doseSelect) doseSelect.value = '0';
  if (unitSelect) unitSelect.value = '-';
  if (routeSelect) routeSelect.value = '';
  if (timeUsageSelect) timeUsageSelect.value = '';
  if (mealTimeSelect1) mealTimeSelect1.value = '';
  if (mealTimeSelect2) mealTimeSelect2.value = '';
  if (dosingIntervalSelect) dosingIntervalSelect.value = '';
  if (indicationSelect) indicationSelect.value = '';
  if (precautionSelect) precautionSelect.value = '';
  if (note1) note1.value = '-';
  if (note2) note2.value = '-';
  if (nonEdReason) nonEdReason.value = '-';
  if (freqInput) freqInput.value = '-';
  if (startDate) startDate.value = '12/09/69';
  if (endDate) endDate.value = '08:00';

  // Reset character counts for extra note inputs
  for (let i = 1; i <= 4; i++) {
    const el = document.getElementById(`odExtraNote${i}`);
    if (el) {
      el.value = '';
      updateOdCharCount(el);
    }
  }

  // Hide suggestions
  const dropdown = document.getElementById('odMedSuggestionsDropdown');
  if (dropdown) dropdown.style.display = 'none';

  selectedOdMedicineItem = null;

  modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

function closeOrderDailyModal() {
  const modal = document.getElementById('modalOrderDaily');
  if (modal) modal.style.display = 'none';
  const dropdown = document.getElementById('odMedSuggestionsDropdown');
  if (dropdown) dropdown.style.display = 'none';
}

function updateOdCharCount(inputEl) {
  if (!inputEl) return;
  const wrap = inputEl.closest('.od-char-input-wrap');
  if (wrap) {
    const counter = wrap.querySelector('.od-char-counter');
    if (counter) {
      counter.textContent = `${inputEl.value.length}/38`;
    }
  }
}

function getCombinedOdMedicines() {
  const baseCodes = new Set(OD_SAMPLE_MEDICINES.map(m => m.code));
  const extraFromInventory = (typeof pharmacyInventoryData !== 'undefined' ? pharmacyInventoryData : [])
    .filter(item => item.status !== 'inactive' && !baseCodes.has(item.code))
    .map(item => ({
      code: item.code,
      name: item.tradeName,
      generic: item.genericName || '-',
      route: item.category === 'ophtho' ? 'หยอดตาสองข้าง (OU)' : 'รับประทาน (Oral)',
      dose: '1',
      unit: item.category === 'ophtho' ? 'หยด' : (item.baseUnit || 'เม็ด'),
      timeUsage: 'วันละ 4 ครั้ง (เช้า กลางวัน เย็น ก่อนนอน)',
      mealTime1: 'หลังอาหารทันที',
      mealTime2: 'เช้า-กลางวัน-เย็น-ก่อนนอน',
      dosingInterval: 'ทุกวัน (Daily)',
      indication: 'ตามแพทย์สั่ง',
      precaution: 'ระวังปลายหลอดสัมผัสตาหรือสิ่งแปลกปลอม',
      price: item.sellPrice || 150
    }));
  return [...OD_SAMPLE_MEDICINES, ...extraFromInventory];
}

function showOdMedSuggestions() {
  const dropdown = document.getElementById('odMedSuggestionsDropdown');
  if (!dropdown) return;
  renderOdMedSuggestions(getCombinedOdMedicines());
  dropdown.style.display = 'block';
}

function handleOdMedSearchInput(val) {
  const dropdown = document.getElementById('odMedSuggestionsDropdown');
  if (!dropdown) return;

  const query = (val || '').trim().toLowerCase();
  const pool = getCombinedOdMedicines();
  const filtered = pool.filter(m =>
    m.name.toLowerCase().includes(query) ||
    m.generic.toLowerCase().includes(query) ||
    m.code.toLowerCase().includes(query)
  );

  renderOdMedSuggestions(filtered);
  dropdown.style.display = 'block';
}

function renderOdMedSuggestions(medList) {
  const dropdown = document.getElementById('odMedSuggestionsDropdown');
  if (!dropdown) return;

  if (medList.length === 0) {
    dropdown.innerHTML = `<div style="padding: 12px; text-align: center; color: #94A3B8; font-size: 12px;">ไม่พบรายการยาที่ตรงกับคำค้นหา</div>`;
    return;
  }

  dropdown.innerHTML = medList.map(item => `
    <div class="od-suggestion-item" onclick="selectOdMedicine('${item.code}')">
      <div>
        <div class="od-sugg-name">
          ${item.name}
          ${item.isAllergicAlert ? '<span style="color:#DC2626; font-size:11px; margin-left:6px; font-weight:700;">⚠️ ผู้ป่วยแพ้ยานี้!</span>' : ''}
        </div>
        <div class="od-sugg-desc">${item.generic} • ${item.route}</div>
      </div>
      <div class="od-sugg-price">฿${item.price}</div>
    </div>
  `).join('');
}

function selectOdMedicine(medCode) {
  const item = getCombinedOdMedicines().find(m => m.code === medCode);
  if (!item) return;

  // Patient Allergy Warning: Check if patient has AMLODIPINE allergy
  const patientAllergy = document.getElementById('examDetAllergy')?.textContent?.trim() || 'AMLODIPINE';
  if (item.isAllergicAlert || item.name.toUpperCase().includes(patientAllergy.toUpperCase())) {
    if (!confirm(`⚠️ คำเตือนการแพ้ยา (Drug Allergy Alert)!\n\nผู้ป่วยมีประวัติแพ้ยา "${patientAllergy}"\nคุณแน่ใจหรือไม่ว่าต้องการเลือกยานี้?`)) {
      return;
    }
  }

  selectedOdMedicineItem = item;

  const searchInput = document.getElementById('odMedSearchInput');
  const qtyInput = document.getElementById('odMedQtyInput');
  const doseSelect = document.getElementById('odDoseSelect');
  const unitSelect = document.getElementById('odUnitSelect');
  const routeSelect = document.getElementById('odRouteSelect');
  const timeUsageSelect = document.getElementById('odTimeUsageSelect');
  const mealTimeSelect1 = document.getElementById('odMealTimeSelect1');
  const mealTimeSelect2 = document.getElementById('odMealTimeSelect2');
  const dosingIntervalSelect = document.getElementById('odDosingIntervalSelect');
  const indicationSelect = document.getElementById('odIndicationSelect');
  const precautionSelect = document.getElementById('odPrecautionSelect');
  const freqInput = document.getElementById('odFreqInput');

  if (searchInput) searchInput.value = item.name;
  if (qtyInput) qtyInput.value = '1';
  if (doseSelect) doseSelect.value = item.dose || '1';
  if (unitSelect) unitSelect.value = item.unit || 'หยด';
  if (routeSelect) routeSelect.value = item.route || 'หยอดตาสองข้าง (OU)';
  if (timeUsageSelect) timeUsageSelect.value = item.timeUsage || '';
  if (mealTimeSelect1) mealTimeSelect1.value = item.mealTime1 || '';
  if (mealTimeSelect2) mealTimeSelect2.value = item.mealTime2 || '';
  if (dosingIntervalSelect) dosingIntervalSelect.value = item.dosingInterval || 'ทุกวัน (Daily)';
  if (indicationSelect) indicationSelect.value = item.indication || '';
  if (precautionSelect) precautionSelect.value = item.precaution || '';
  if (freqInput) freqInput.value = 'q 6 hr (ทุก 6 ชม.)';

  const dropdown = document.getElementById('odMedSuggestionsDropdown');
  if (dropdown) dropdown.style.display = 'none';

  showToast('เลือกรายการยา', `ระบุ "${item.name}" พร้อมตั้งค่าการบริหารยาอัตโนมัติแล้ว`, 'info');
}

function handleOdUsageTypeChange(usageType) {
  if (usageType === 'custom') {
    const input1 = document.getElementById('odExtraNote1');
    if (input1) input1.focus();
  }
}

function openOdOtherUsageModal() {
  showToast('วิธีใช้อื่นๆ', 'เปิดหน้าต่างเลือกวิธีการใช้ยาเพิ่มเติม', 'info');
}

function openOdTemplateModal() {
  showToast('Template วิธีใช้ยา', 'เปิดคลัง Template คำแนะนำการใช้ยามาตรฐาน', 'info');
}

function submitOrderDaily() {
  const searchInput = document.getElementById('odMedSearchInput');
  const rawMedName = searchInput ? searchInput.value.trim() : '';
  const medName = rawMedName || (selectedOdMedicineItem ? selectedOdMedicineItem.name : 'Hista-Oph 0.05% Eye Drops (5 ml)');

  const qty = parseInt(document.getElementById('odMedQtyInput')?.value, 10) || 1;
  const dose = document.getElementById('odDoseSelect')?.value || '1';
  const unit = document.getElementById('odUnitSelect')?.value || 'หยด';
  const route = document.getElementById('odRouteSelect')?.value || 'OU';
  const timeUsage = document.getElementById('odTimeUsageSelect')?.value || 'วันละ 4 ครั้ง';

  const price = (selectedOdMedicineItem ? selectedOdMedicineItem.price : 180) * qty;

  if (isAddingToPrescriptionModal) {
    prescriptionItems.push({
      id: Date.now(),
      checked: true,
      name: `${medName}\n(${dose} ${unit} ${route})`,
      type: 'ED',
      qty: qty,
      dispensed: (price / qty).toFixed(2),
      amount: '0.00',
      credit: '0.00',
      claimable: '0.00',
      nonClaimable: '0.00',
      discount: '0.00',
      overdue: '0.00',
      paid: '0.00',
      billed: '0.00',
      status: ''
    });
    isAddingToPrescriptionModal = false;
    closeOrderDailyModal();
    renderPrescriptionTable();
    showToast('เพิ่มรายการยาสำเร็จ', `เพิ่ม "${medName}" ลงในรายการสั่งยาเรียบร้อยแล้ว`, 'success');
    return;
  }

  const itemTitle = `ค่ายา: ${medName} (${dose} ${unit} ${route} ${timeUsage}) x ${qty}`;

  // Add to exam charges table
  examChargesList.unshift({
    id: Date.now(),
    title: itemTitle,
    amount: price,
    credit: 0,
    discount: 0,
    claimable: 0,
    nonClaimable: 0
  });

  renderExamChargesTable();
  closeOrderDailyModal();

  if (typeof playHospitalChime === 'function') playHospitalChime();
  showToast(
    'สั่งยาสำเร็จ (Order Daily)',
    `บันทึกรายการ "${medName}" จำนวน ${qty} หน่วย เข้าสู่ตารางค่ารักษาเรียบร้อยแล้ว`,
    'success'
  );
}

// Close suggestion dropdown when clicking outside
document.addEventListener('click', (e) => {
  const wrap = document.querySelector('.od-search-input-wrap');
  if (wrap && !wrap.contains(e.target)) {
    const dropdown = document.getElementById('odMedSuggestionsDropdown');
    if (dropdown) dropdown.style.display = 'none';
  }
});

// ==========================================================
// PATIENT CLINICAL SUMMARY MODULE (สรุปประวัติการรักษาผู้ป่วย)
// ==========================================================

let summaryDiagItems = [
  { id: 1, diagnosis: 'Myopia (สายตาสั้น)', icd10: 'H52.1', type: 'Principal Dx', side: 'ตาสองข้าง (OU)' }
];

let summaryOpItems = [];
let summaryNonOpItems = [];

function openPatientSummaryView(customPatient) {
  // 1. Sync Patient Demographics
  const nameEl = document.getElementById('examDetName');
  const hnEl = document.getElementById('examDetHn');
  const ageEl = document.getElementById('examDetAge');
  const phoneEl = document.getElementById('examDetPhone');
  const queueEl = document.getElementById('examDetQueueNo');
  const underlyingEl = document.getElementById('examDetUnderlying');
  const allergyEl = document.getElementById('examDetAllergy');
  const avatarEl = document.getElementById('examDetAvatar');

  if (document.getElementById('summaryPtName')) {
    document.getElementById('summaryPtName').textContent = customPatient?.name || nameEl?.textContent || 'น.ส. กุลธิดา ขุนยาสงขิม';
  }
  if (document.getElementById('summaryPtHn')) {
    document.getElementById('summaryPtHn').textContent = customPatient?.hn || hnEl?.textContent || '500570/69';
  }
  if (document.getElementById('summaryPtAge')) {
    document.getElementById('summaryPtAge').textContent = customPatient?.age || ageEl?.textContent || '9 ปี 0 ด.';
  }
  if (document.getElementById('summaryPtPhone')) {
    document.getElementById('summaryPtPhone').textContent = customPatient?.phone || phoneEl?.textContent || '098261748192';
  }
  if (document.getElementById('summaryPtQueue')) {
    document.getElementById('summaryPtQueue').textContent = customPatient?.queue || queueEl?.textContent || 'A001';
  }
  if (document.getElementById('summaryPtUnderlying')) {
    document.getElementById('summaryPtUnderlying').textContent = customPatient?.underlying || underlyingEl?.textContent || '-';
  }
  if (document.getElementById('summaryPtAllergy')) {
    document.getElementById('summaryPtAllergy').textContent = customPatient?.allergy || allergyEl?.textContent || 'AMLODIPINE';
  }
  if (document.getElementById('summaryPtAvatar') && avatarEl) {
    document.getElementById('summaryPtAvatar').src = customPatient?.avatar || avatarEl.src;
  }

  // 2. Sync Vitals
  const pr1 = document.getElementById('vitalPr1')?.value || '78';
  const bp1Sys = document.getElementById('vitalBp1Sys')?.value || '110';
  const bp1Dia = document.getElementById('vitalBp1Dia')?.value || '70';
  const map1 = document.getElementById('vitalMap1')?.value || '83';
  const weight = document.getElementById('vitalWeight')?.value || '48';
  const chest = document.getElementById('vitalChest')?.value || '-';
  const height = document.getElementById('vitalHeight')?.value || '155';
  const bt = document.getElementById('vitalTemp')?.value || '36.5';
  const o2sat = document.getElementById('vitalO2Sat')?.value || '99';
  const painScore = document.getElementById('examPainScoreVal')?.value || '0';

  if (document.getElementById('summaryPr1')) document.getElementById('summaryPr1').value = pr1;
  if (document.getElementById('summaryBp1Sys')) document.getElementById('summaryBp1Sys').value = bp1Sys;
  if (document.getElementById('summaryBp1Dia')) document.getElementById('summaryBp1Dia').value = bp1Dia;
  if (document.getElementById('summaryMap1')) document.getElementById('summaryMap1').value = map1;
  if (document.getElementById('summaryWeight')) document.getElementById('summaryWeight').value = weight;
  if (document.getElementById('summaryChest')) document.getElementById('summaryChest').value = chest;
  if (document.getElementById('summaryHeight')) document.getElementById('summaryHeight').value = height;
  if (document.getElementById('summaryBt')) document.getElementById('summaryBt').value = bt;
  if (document.getElementById('summaryO2Sat')) document.getElementById('summaryO2Sat').value = o2sat;

  selectSummaryPain(parseInt(painScore, 10) || 0);
  renderSummaryDiagList();
  renderSummaryOpTable();
  renderSummaryNonOpTable();

  switchView('patient-summary');
}

function selectSummaryPain(val) {
  const scoreInput = document.getElementById('summaryPainScore');
  const labelEl = document.getElementById('summaryPainLabel');
  if (scoreInput) scoreInput.value = val;

  const labels = [
    'ไม่เจ็บปวด', 'เจ็บเล็กน้อย', 'เจ็บเล็กน้อย',
    'เจ็บปานกลาง', 'เจ็บปานกลาง', 'เจ็บค่อนข้างมาก',
    'เจ็บค่อนข้างมาก', 'เจ็บมาก', 'เจ็บมาก',
    'เจ็บรุนแรง', 'เจ็บปวดที่สุด'
  ];
  if (labelEl) labelEl.textContent = labels[val] || 'ไม่เจ็บปวด';

  document.querySelectorAll('.summary-pain-cell').forEach(cell => {
    const radio = cell.querySelector('input[type="radio"]');
    if (radio) {
      const isMatch = parseInt(radio.value, 10) === val;
      radio.checked = isMatch;
      cell.classList.toggle('active', isMatch);
    }
  });
}

function autoSyncSummaryIcd(code) {
  const icdSelect = document.getElementById('summaryIcd10Select');
  if (icdSelect && code) {
    icdSelect.value = code;
  }
}

function renderSummaryDiagList() {
  const container = document.getElementById('summaryDiagRowsList');
  if (!container) return;

  if (summaryDiagItems.length === 0) {
    container.style.display = 'none';
    container.innerHTML = '';
    return;
  }

  container.style.display = 'block';
  container.innerHTML = `
    <div class="summary-diag-table-wrap">
      <table class="summary-diag-table">
        <thead>
          <tr>
            <th>การวินิจฉัย (Diagnosis)</th>
            <th>ICD 10</th>
            <th>ประเภท (Type)</th>
            <th>ด้าน (Side)</th>
            <th style="width: 44px; text-align: center;">ลบ</th>
          </tr>
        </thead>
        <tbody>
          ${summaryDiagItems.map((item, idx) => `
            <tr>
              <td><strong>${item.diagnosis}</strong></td>
              <td><span class="summary-code-badge">${item.icd10}</span></td>
              <td>${item.type}</td>
              <td>${item.side}</td>
              <td style="text-align: center;">
                <button type="button" class="btn-summary-row-del" onclick="deleteSummaryDiagItem(${item.id})" title="ลบรายการ">
                  <i data-lucide="trash-2"></i>
                </button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  if (window.lucide) window.lucide.createIcons();
}

function addSummaryDiagItem() {
  const diagSel = document.getElementById('summaryDiagSelect');
  const icdSel = document.getElementById('summaryIcd10Select');
  const typeSel = document.getElementById('summaryTypeSelect');
  const sideSel = document.getElementById('summarySideSelect');

  const diagText = (diagSel?.options && diagSel.selectedIndex >= 0 && diagSel.options[diagSel.selectedIndex])
    ? diagSel.options[diagSel.selectedIndex].text
    : (diagSel?.value || '');
  const icdVal = icdSel?.value || diagSel?.value || 'H52.1';
  const typeVal = typeSel?.value || 'Principal Dx';
  const sideVal = sideSel?.value || 'ตาสองข้าง (OU)';

  if (!diagSel?.value && !icdSel?.value) {
    showToast('กรุณาเลือกการวินิจฉัย', 'โปรดเลือก Diagnosis หรือระบุรหัส ICD 10', 'warning');
    return;
  }

  summaryDiagItems.push({
    id: Date.now(),
    diagnosis: diagText.replace(/\(.*\)/, '').trim() || 'Myopia (สายตาสั้น)',
    icd10: icdVal,
    type: typeVal,
    side: sideVal
  });

  renderSummaryDiagList();
  showToast('เพิ่มการวินิจฉัยสำเร็จ', `บันทึกรหัส ${icdVal} เข้าสู่รายการวินิจฉัยเรียบร้อยแล้ว`, 'success');
}

function deleteSummaryDiagItem(id) {
  summaryDiagItems = summaryDiagItems.filter(i => i.id !== id);
  renderSummaryDiagList();
  showToast('ลบรายการวินิจฉัยแล้ว', 'นำรายการวินิจฉัยออกจากตารางเรียบร้อยแล้ว', 'info');
}

function reDiagSummary() {
  if (summaryDiagItems.length === 0) {
    summaryDiagItems = [
      { id: Date.now(), diagnosis: 'Myopia (สายตาสั้น)', icd10: 'H52.1', type: 'Principal Dx', side: 'ตาสองข้าง (OU)' }
    ];
  } else {
    showToast('Re-diag เรียบร้อย', 'ปรับปรุงสถานะการวินิจฉัยโรคล่าสุดเรียบร้อยแล้ว', 'info');
  }
  renderSummaryDiagList();
}

function renderSummaryOpTable() {
  const tbody = document.getElementById('summaryOpTableBody');
  if (!tbody) return;

  if (summaryOpItems.length === 0) {
    tbody.innerHTML = '<tr><td colspan="3" class="summary-empty-td">ไม่มีข้อมูล</td></tr>';
    return;
  }

  tbody.innerHTML = summaryOpItems.map((item, index) => `
    <tr>
      <td>${item.proc}</td>
      <td>${item.date}</td>
      <td>${item.time}</td>
    </tr>
  `).join('');
}

function addSummaryOperationRow() {
  const procName = prompt('ระบุชื่อหัตถการผ่าตัด (Operating Room Procedure):', 'Phacoemulsification with Intraocular Lens (IOL)');
  if (!procName) return;

  const today = new Date();
  const dateStr = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear() + 543}`;
  const timeStr = `${String(today.getHours()).padStart(2, '0')}:${String(today.getMinutes()).padStart(2, '0')} น.`;

  summaryOpItems.push({
    id: Date.now(),
    proc: procName,
    date: dateStr,
    time: timeStr
  });

  renderSummaryOpTable();
  showToast('เพิ่มหัตถการผ่าตัดแล้ว', `บันทึกรายการ "${procName}" เรียบร้อยแล้ว`, 'success');
}

function renderSummaryNonOpTable() {
  const tbody = document.getElementById('summaryNonOpTableBody');
  if (!tbody) return;

  if (summaryNonOpItems.length === 0) {
    tbody.innerHTML = '<tr><td colspan="9" class="summary-empty-td">ไม่มีข้อมูล</td></tr>';
    return;
  }

  tbody.innerHTML = summaryNonOpItems.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td><strong>${item.name}</strong></td>
      <td><span class="summary-code-badge">${item.icd9}</span></td>
      <td>${item.price}</td>
      <td>${item.ext}</td>
      <td>${item.doctor}</td>
      <td>${item.type}</td>
      <td>${item.start}</td>
      <td>${item.end}</td>
    </tr>
  `).join('');
}

function addSummaryNonOpRow() {
  const procName = prompt('ระบุชื่อหัตถการนอกห้องผ่าตัด (Non Operating Procedure):', 'Slit-lamp Biomicroscopy with Fluorescein Exam');
  if (!procName) return;

  const today = new Date();
  const dateStr = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear() + 543}`;
  const timeStr = `${String(today.getHours()).padStart(2, '0')}:${String(today.getMinutes()).padStart(2, '0')}`;

  summaryNonOpItems.push({
    id: Date.now(),
    name: procName,
    icd9: '95.02',
    price: '350.00',
    ext: '-',
    doctor: 'นพ. ธีรพัฒน์ จิตต์ประสงค์',
    type: 'Diagnostic',
    start: `${dateStr} ${timeStr}`,
    end: `${dateStr} ${timeStr}`
  });

  renderSummaryNonOpTable();
  showToast('เพิ่มหัตถการแล้ว', `บันทึกรายการ "${procName}" เรียบร้อยแล้ว`, 'success');
}

function savePatientSummary() {
  if (typeof playHospitalChime === 'function') playHospitalChime();
  showToast(
    'บันทึก Summary สำเร็จ',
    'บันทึกข้อมูลสรุปประวัติการรักษา (Discharge & Clinical Summary) ของผู้ป่วยเรียบร้อยแล้ว',
    'success'
  );
}

// ==========================================================
// VIEW 10: SETTINGS & MASTER DATA MANAGEMENT SYSTEM
// ==========================================================

let activeSettingsMasterTab = 'medications';

let masterIcdData = [
  { id: 1, type: 'icd10', code: 'H25.1', nameEn: 'Senile nuclear cataract', nameTh: 'ต้อกระจกตามวัย ชนิดนิวเคลียร์', isFrequent: true, status: 'active' },
  { id: 2, type: 'icd10', code: 'H40.1', nameEn: 'Primary open-angle glaucoma', nameTh: 'ต้อหินมุมเปิดปฐมภูมิ', isFrequent: true, status: 'active' },
  { id: 3, type: 'icd10', code: 'H04.12', nameEn: 'Dry eye syndrome of bilateral lacrimal glands', nameTh: 'ภาวะตาแห้งเรื้อรังสองข้าง', isFrequent: true, status: 'active' },
  { id: 4, type: 'icd10', code: 'H33.0', nameEn: 'Retinal detachment with retinal break', nameTh: 'จอประสาทตาหลุดลอกมีรอยฉีกขาด', isFrequent: true, status: 'active' },
  { id: 5, type: 'icd10', code: 'E11.31', nameEn: 'Type 2 DM with mild nonproliferative diabetic retinopathy', nameTh: 'เบาหวานขึ้นจอตา (NPDR ชนิดเล็กน้อย)', isFrequent: true, status: 'active' },
  { id: 6, type: 'icd10', code: 'H10.1', nameEn: 'Acute atopic conjunctivitis', nameTh: 'เยื่อบุตาอักเสบจากภูมิแพ้เฉียบพลัน', isFrequent: true, status: 'active' },
  { id: 7, type: 'icd10', code: 'H52.1', nameEn: 'Myopia', nameTh: 'ภาวะสายตาสั้น', isFrequent: true, status: 'active' },
  { id: 8, type: 'icd10', code: 'H52.2', nameEn: 'Astigmatism', nameTh: 'ภาวะสายตาเอียง', isFrequent: true, status: 'active' },
  { id: 9, type: 'icd10', code: 'H43.81', nameEn: 'Vitreous degeneration', nameTh: 'ภาวะน้ำวุ้นตาเสื่อม มีตะกอนลอย', isFrequent: true, status: 'active' },
  { id: 10, type: 'icd10', code: 'F41.1', nameEn: 'Generalized anxiety disorder', nameTh: 'โรควิตกกังวลทั่วไป', isFrequent: false, status: 'active' },
  { id: 11, type: 'icd10', code: 'G47.0', nameEn: 'Insomnia disorder', nameTh: 'โรคนอนไม่หลับเรื้อรัง', isFrequent: false, status: 'active' },
  { id: 12, type: 'icd10', code: 'G43.1', nameEn: 'Migraine with aura', nameTh: 'โรคไมเกรนชนิดมีอาการเตือนทางสายตา', isFrequent: false, status: 'active' },
  { id: 13, type: 'icd9', code: '95.02', nameEn: 'Comprehensive eye examination', nameTh: 'การตรวจสายตาและจอตาอย่างละเอียดด้วย Slit-lamp', isFrequent: true, status: 'active' },
  { id: 14, type: 'icd9', code: '95.11', nameEn: 'Fundus photography / OCT Macula Scan', nameTh: 'การถ่ายภาพจอประสาทตาและสแกนจุดรับภาพ', isFrequent: true, status: 'active' },
  { id: 15, type: 'icd9', code: '89.11', nameEn: 'Tonometry', nameTh: 'การวัดความดันลูกตาแบบไร้สัมผัส (NCT)', isFrequent: true, status: 'active' },
  { id: 16, type: 'icd9', code: '13.41', nameEn: 'Phacoemulsification of cataract with aspiration', nameTh: 'ผ่าตัดสลายต้อกระจกด้วยคลื่นเสียงความถี่สูง', isFrequent: true, status: 'active' },
  { id: 17, type: 'icd9', code: '14.24', nameEn: 'Destruction of chorioretinal lesion by laser photocoagulation', nameTh: 'การยิงเลเซอร์รักษาจอประสาทตา', isFrequent: true, status: 'active' },
  { id: 18, type: 'icd9', code: '95.05', nameEn: 'Visual field examination', nameTh: 'การตรวจลานสายตาคอมพิวเตอร์ (HVF)', isFrequent: true, status: 'active' }
];

let masterCoursesData = [
  { id: 1, code: 'CRS-001', name: 'คอร์สเลเซอร์รักษาตาแห้ง (IPL Dry Eye Therapy)', sessions: 4, validityDays: 365, defaultEye: 'OU', price: 12000, status: 'active' },
  { id: 2, code: 'CRS-002', name: 'แพ็กเกจฉีดยาเข้าน้ำวุ้นตา (Anti-VEGF Macular Injection)', sessions: 3, validityDays: 180, defaultEye: 'OD', price: 28500, status: 'active' },
  { id: 3, code: 'CRS-003', name: 'คอร์สฝึกกล้ามเนื้อตาและการมองเห็น (Vision Therapy)', sessions: 8, validityDays: 180, defaultEye: 'OU', price: 9600, status: 'active' },
  { id: 4, code: 'CRS-004', name: 'แพ็กเกจผ่าตัดสลายต้อกระจกเลนส์แก้วตาเทียม (Phaco + Monofocal IOL)', sessions: 1, validityDays: 90, defaultEye: 'OU', price: 35000, status: 'active' },
  { id: 5, code: 'CRS-005', name: 'แพ็กเกจผ่าตัดแก้ไขสายตา Femto-LASIK ไร้ใบมีด', sessions: 1, validityDays: 365, defaultEye: 'OU', price: 59000, status: 'active' },
  { id: 6, code: 'CRS-006', name: 'คอร์สสปาเปลือกตาและนวดต่อมไขมัน Meibomian (Dry Eye Spa)', sessions: 6, validityDays: 180, defaultEye: 'OU', price: 4800, status: 'active' },
  { id: 7, code: 'CRS-007', name: 'แพ็กเกจเลเซอร์รักษาต้อหินมุมเปิด (Selective Laser Trabeculoplasty - SLT)', sessions: 2, validityDays: 180, defaultEye: 'OU', price: 15000, status: 'active' },
  { id: 8, code: 'CRS-008', name: 'คอร์สฟื้นฟูตาขี้เกียจในเด็ก (Pediatric Amblyopia Occlusion Therapy)', sessions: 12, validityDays: 365, defaultEye: 'OU', price: 14500, status: 'active' }
];

let masterRoomsData = [
  { id: 1, code: 'ROOM-01', name: 'ห้องตรวจจักษุ 1 (General Ophthalmology)', department: 'แผนกจักษุวิทยา', equipment: 'Slit-lamp Bio-microscope, Tonometer, Chart Projector', staff: 'นพ. เปรมชัย เสือขาว', status: 'active' },
  { id: 2, code: 'ROOM-02', name: 'ห้องตรวจจักษุเฉพาะทาง 2 (Retina & Glaucoma)', department: 'แผนกจอตาและต้อหิน', equipment: 'Slit-lamp, Fundus Camera, Laser Indirect Ophthalmoscope', staff: 'พญ. วรัญญา รักษาดี', status: 'active' },
  { id: 3, code: 'ROOM-03', name: 'ห้องตรวจจิตเวชและสุขภาพใจ 3', department: 'แผนกจิตเวชศาสตร์', equipment: 'โซฟาสนทนาบำบัด, Biofeedback Heart-rate Monitor', staff: 'นพ. กิตติพงษ์ วงศ์สว่าง', status: 'active' },
  { id: 4, code: 'ROOM-04', name: 'ห้องเลเซอร์รักษาตาแห้ง (IPL Dry Eye Room)', department: 'หัตถการจักษุพิเศษ', equipment: 'เครื่อง IPL Dry Eye System, แว่นป้องกันเลเซอร์, เจลเย็นบำบัด', staff: 'พว. สมศรี ส้มแดง', status: 'active' },
  { id: 5, code: 'ROOM-05', name: 'ห้องหัตถการปลอดเชื้อ (Minor OR-Eye)', department: 'ผ่าตัดเล็กจักษุ', equipment: 'กล้องผ่าตัด Microscope, เครื่องวัดสัญญาณชีพ, ชุดฉีดยาวุ้นตา', staff: 'นพ. เปรมชัย / พว. กัลยา', status: 'active' },
  { id: 6, code: 'ROOM-06', name: 'ห้องเครื่องมือพิเศษและลานสายตา (Special Diagnostic)', department: 'แผนกวินิจฉัยพิเศษ', equipment: 'OCT Scan Macula/RNFL, Humphrey Visual Field (HVF 24-2)', staff: 'นักทัศนมาตร (Optometrist)', status: 'active' }
];

let clinicGeneralConfig = {
  nameTh: 'ศูนย์บริการการแพทย์และจักษุเฉพาะทาง (Ophthalmology & Specialty Clinic)',
  nameEn: 'Ophthalmology & Medical Specialty Care Center',
  licenseNo: '10101004869',
  taxId: '0-1055-69001-23-4',
  phone: '02-987-6543, 089-123-4567',
  email: 'contact@eyespecialtyclinic.com',
  address: '88/19 อาคารศูนย์การแพทย์เฉพาะทาง ถนนสุขุมวิท แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพมหานคร 10110',
  hours: 'จันทร์ - เสาร์: 08:30 - 20:00 น. | อาทิตย์: 09:00 - 17:00 น.',
  director: 'นพ. กานต์ จักษุแพทย์ (ว. 38492)',
  receiptNote: 'ขอบพระคุณที่ไว้วางใจใช้บริการศูนย์บริการการแพทย์และจักษุเฉพาะทาง • โทรนัดหมายตรวจติดตาม 02-987-6543'
};

function switchSettingsMasterTab(tabKey) {
  activeSettingsMasterTab = tabKey;

  // 1. Update tab navigation buttons
  document.querySelectorAll('.settings-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabKey);
  });

  // 2. Update KPI cards highlight
  const kpiMap = {
    'medications': 'kpiCardMed',
    'procedures': 'kpiCardProc',
    'icd': 'kpiCardIcd',
    'courses': 'kpiCardCourse',
    'rooms': 'kpiCardRooms'
  };
  Object.keys(kpiMap).forEach(key => {
    const card = document.getElementById(kpiMap[key]);
    if (card) {
      card.classList.toggle('active-tab-card', key === tabKey);
    }
  });

  // 3. Switch visible panels
  const panelMap = {
    'medications': 'settingsPanelMedications',
    'procedures': 'settingsPanelProcedures',
    'icd': 'settingsPanelIcd',
    'courses': 'settingsPanelCourses',
    'rooms': 'settingsPanelRooms',
    'clinic-info': 'settingsPanelClinicInfo'
  };

  Object.keys(panelMap).forEach(key => {
    const panel = document.getElementById(panelMap[key]);
    if (panel) {
      panel.style.display = key === tabKey ? 'block' : 'none';
    }
  });

  // 4. Update "+ เพิ่มข้อมูลหลัก" main button label
  const btnLabel = document.getElementById('btnAddMasterDataLabel');
  if (btnLabel) {
    const labels = {
      'medications': '+ เพิ่มทะเบียนยาใหม่',
      'procedures': '+ เพิ่มหัตถการใหม่',
      'icd': '+ เพิ่มรหัสการวินิจฉัย',
      'courses': '+ สร้างแพ็กเกจคอร์สใหม่',
      'rooms': '+ เพิ่มห้องตรวจใหม่',
      'clinic-info': '+ บันทึกข้อมูลคลินิก'
    };
    btnLabel.textContent = labels[tabKey] || '+ เพิ่มข้อมูลหลัก';
  }

  // 5. Render corresponding panel data
  if (tabKey === 'medications') renderSettingsMedicationsTable();
  else if (tabKey === 'procedures') renderSettingsProceduresTable();
  else if (tabKey === 'icd') renderSettingsIcdTable();
  else if (tabKey === 'courses') renderSettingsCoursesTable();
  else if (tabKey === 'rooms') renderSettingsRoomsTable();

  if (window.lucide) window.lucide.createIcons();
}

function renderSettingsMasterDataView() {
  // Update Top 5 KPI Counts
  const medCountEl = document.getElementById('kpiMasterMedCount');
  const procCountEl = document.getElementById('kpiMasterProcCount');
  const icdCountEl = document.getElementById('kpiMasterIcdCount');
  const courseCountEl = document.getElementById('kpiMasterCourseCount');
  const roomCountEl = document.getElementById('kpiMasterRoomCount');

  if (medCountEl) medCountEl.textContent = pharmacyInventoryData.length;
  if (procCountEl) procCountEl.textContent = OPH_TREATMENT_CATALOG.length;
  if (icdCountEl) icdCountEl.textContent = masterIcdData.length;
  if (courseCountEl) courseCountEl.textContent = masterCoursesData.length;
  if (roomCountEl) roomCountEl.textContent = masterRoomsData.length;

  switchSettingsMasterTab(activeSettingsMasterTab);
}

// -------------------------------------------------------------
// TAB 1: ทะเบียนยาและเวชภัณฑ์ (Medications Master)
// -------------------------------------------------------------
function renderSettingsMedicationsTable() {
  const tbody = document.getElementById('settingsMedicationsTableBody');
  if (!tbody) return;

  const catFilter = document.getElementById('settingsMedCategoryFilter')?.value || 'all';
  const statusFilter = document.getElementById('settingsMedStatusFilter')?.value || 'all';
  const query = (document.getElementById('settingsMedSearchInput')?.value || '').trim().toLowerCase();

  const filtered = pharmacyInventoryData.filter(item => {
    // Category filter
    if (catFilter !== 'all') {
      if (catFilter === 'ophtho' && item.category !== 'ophtho') return false;
      if (catFilter === 'psych-wj4' && item.fdaClass !== 'วจ.4') return false;
      if (catFilter === 'psych-wj2' && item.fdaClass !== 'วจ.2') return false;
      if (catFilter === 'supply' && item.category !== 'supply') return false;
    }

    // Status filter
    const itemStatus = item.status || 'active';
    if (statusFilter !== 'all' && itemStatus !== statusFilter) return false;

    // Search query
    if (query) {
      const searchTarget = `${item.code} ${item.tmtCode || ''} ${item.tradeName} ${item.genericName} ${item.dosageForm}`.toLowerCase();
      if (!searchTarget.includes(query)) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 36px 16px; color: #94A3B8;">
          <i data-lucide="package-x" style="width: 32px; height: 32px; margin-bottom: 8px; color: #CBD5E1;"></i>
          <div style="font-size: 14px; font-weight: 600;">ไม่พบข้อมูลทะเบียนยาที่ตรงกับเงื่อนไข</div>
          <div style="font-size: 12px;">ลองเปลี่ยนตัวกรองหมวดหมู่หรือล้างคำค้นหา</div>
        </td>
      </tr>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  tbody.innerHTML = filtered.map(item => {
    const itemStatus = item.status || 'active';
    const isAct = itemStatus === 'active';

    let catBadgeHtml = '';
    if (item.category === 'ophtho') {
      catBadgeHtml = `<span class="pharm-tag-pill pharm-tag-ophtho"><i data-lucide="eye" style="width:12px;height:12px;"></i> ยาจักษุ</span>`;
    } else if (item.fdaClass === 'วจ.2' || item.fdaClass === 'วจ.4') {
      catBadgeHtml = `<span class="pharm-tag-pill pharm-tag-psych"><i data-lucide="alert-circle" style="width:12px;height:12px;"></i> ควบคุม ${item.fdaClass}</span>`;
    } else {
      catBadgeHtml = `<span class="pharm-tag-pill pharm-tag-supply"><i data-lucide="box" style="width:12px;height:12px;"></i> เวชภัณฑ์</span>`;
    }

    const coldChainBadge = item.coldChain 
      ? `<span class="master-cold-chain-pill"><i data-lucide="snowflake" style="width:11px;height:11px;"></i> แช่เย็น 2-8°C</span>` 
      : `<span style="font-size: 11.5px; color: #64748B;">อุณหภูมิห้อง (≤30°C)</span>`;

    return `
      <tr>
        <td>
          <span class="master-code-badge">${item.code}</span>
          <span class="master-tmt-badge">${item.tmtCode || '-'}</span>
        </td>
        <td>
          <div style="font-weight: 700; color: #0F172A; font-size: 13px;">${item.tradeName}</div>
          <div style="font-size: 11.5px; color: #64748B; margin-top: 2px;">รูปแบบ: ${item.dosageForm || 'ยาหยอดตา'}</div>
        </td>
        <td>
          <div style="font-size: 12.5px; color: #334155; font-style: italic;">${item.genericName}</div>
          <div style="font-size: 11px; color: #94A3B8;">หน่วยนับ: ${item.baseUnit || 'ขวด'}</div>
        </td>
        <td>${catBadgeHtml}</td>
        <td style="text-align: right; font-variant-numeric: tabular-nums;">
          <div style="font-size: 11.5px; color: #64748B;">ทุน ฿${Number(item.costPrice || 0).toLocaleString()}</div>
          <div style="font-size: 13.5px; font-weight: 700; color: #0D3B5E;">ขาย ฿${Number(item.sellPrice || 0).toLocaleString()}</div>
        </td>
        <td style="text-align: center;">${coldChainBadge}</td>
        <td style="text-align: center;">
          <span class="master-status-badge ${isAct ? 'active' : 'inactive'}">
            <span style="width:6px;height:6px;border-radius:50%;background:${isAct ? '#16A34A' : '#94A3B8'};"></span>
            ${isAct ? 'เปิดใช้' : 'ปิดใช้'}
          </span>
        </td>
        <td style="text-align: center;">
          <div class="master-action-group">
            <button type="button" class="btn-master-action" onclick="openAddMasterItemModal('medications', ${item.id})" title="แก้ไขทะเบียนยา">
              <i data-lucide="edit-3"></i>
            </button>
            <button type="button" class="btn-master-action ${isAct ? 'toggle-on' : 'toggle-off'}" onclick="toggleMasterItemStatus('medications', ${item.id})" title="${isAct ? 'คลิกเพื่อปิดใช้งาน' : 'คลิกเพื่อเปิดใช้งาน'}">
              <i data-lucide="${isAct ? 'toggle-right' : 'toggle-left'}"></i>
            </button>
            <button type="button" class="btn-master-action del" onclick="deleteMasterItem('medications', ${item.id})" title="ลบข้อมูล">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

// -------------------------------------------------------------
// TAB 2: หัตถการและบริการ (Procedures Master)
// -------------------------------------------------------------
function renderSettingsProceduresTable() {
  const tbody = document.getElementById('settingsProceduresTableBody');
  if (!tbody) return;

  const catFilter = document.getElementById('settingsProcCategoryFilter')?.value || 'all';
  const query = (document.getElementById('settingsProcSearchInput')?.value || '').trim().toLowerCase();

  const filtered = OPH_TREATMENT_CATALOG.filter(item => {
    if (catFilter !== 'all' && item.category !== catFilter) return false;
    if (query) {
      const target = `${item.code} ${item.name} ${item.desc || ''} ${item.categoryLabel || ''}`.toLowerCase();
      if (!target.includes(query)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 36px 16px; color: #94A3B8;">
          <i data-lucide="stethoscope" style="width: 32px; height: 32px; margin-bottom: 8px; color: #CBD5E1;"></i>
          <div style="font-size: 14px; font-weight: 600;">ไม่พบรายการหัตถการที่ตรงกับเงื่อนไข</div>
        </td>
      </tr>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  tbody.innerHTML = filtered.map(item => {
    const isAct = item.status !== 'inactive';
    const eyeSide = item.defaultEye ? item.defaultEye.toUpperCase() : 'OU';
    const eyeClass = eyeSide === 'OU' ? 'ou' : (eyeSide === 'OD' ? 'od' : 'os');

    const coursePill = item.supportsCourse 
      ? `<span class="master-course-badge"><i data-lucide="ticket" style="width:11px;height:11px;"></i> ใช้คอร์สได้</span>`
      : `<span style="font-size: 11.5px; color: #94A3B8;">-</span>`;

    return `
      <tr>
        <td><span class="master-code-badge">${item.code}</span></td>
        <td>
          <div style="font-weight: 700; color: #0F172A; font-size: 13px;">${item.name}</div>
          <div style="font-size: 11.5px; color: #64748B; margin-top: 2px;">${item.desc || '-'}</div>
        </td>
        <td>
          <span style="display:inline-block; font-size: 11.5px; font-weight: 600; padding: 3px 9px; border-radius: 6px; background: #F1F5F9; color: #334155;">
            ${item.categoryLabel || item.category}
          </span>
        </td>
        <td style="text-align: center;">
          <span class="master-eye-badge ${eyeClass}">${eyeSide}</span>
        </td>
        <td style="text-align: center;">${coursePill}</td>
        <td style="text-align: right; font-weight: 700; color: #0D3B5E; font-size: 14px; font-variant-numeric: tabular-nums;">
          ฿${Number(item.price || 0).toLocaleString()}
        </td>
        <td style="text-align: center;">
          <span class="master-status-badge ${isAct ? 'active' : 'inactive'}">
            <span style="width:6px;height:6px;border-radius:50%;background:${isAct ? '#16A34A' : '#94A3B8'};"></span>
            ${isAct ? 'เปิดใช้' : 'ปิดใช้'}
          </span>
        </td>
        <td style="text-align: center;">
          <div class="master-action-group">
            <button type="button" class="btn-master-action" onclick="openAddMasterItemModal('procedures', '${item.id}')" title="แก้ไขรายการหัตถการ">
              <i data-lucide="edit-3"></i>
            </button>
            <button type="button" class="btn-master-action ${isAct ? 'toggle-on' : 'toggle-off'}" onclick="toggleMasterItemStatus('procedures', '${item.id}')" title="${isAct ? 'ปิดใช้งาน' : 'เปิดใช้งาน'}">
              <i data-lucide="${isAct ? 'toggle-right' : 'toggle-left'}"></i>
            </button>
            <button type="button" class="btn-master-action del" onclick="deleteMasterItem('procedures', '${item.id}')" title="ลบรายการ">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

// -------------------------------------------------------------
// TAB 3: รหัสโรคและการวินิจฉัย (ICD-10 / ICD-9 Master)
// -------------------------------------------------------------
function renderSettingsIcdTable() {
  const tbody = document.getElementById('settingsIcdTableBody');
  if (!tbody) return;

  const typeFilter = document.getElementById('settingsIcdTypeFilter')?.value || 'all';
  const query = (document.getElementById('settingsIcdSearchInput')?.value || '').trim().toLowerCase();

  const filtered = masterIcdData.filter(item => {
    if (typeFilter !== 'all' && item.type !== typeFilter) return false;
    if (query) {
      const target = `${item.code} ${item.nameEn} ${item.nameTh}`.toLowerCase();
      if (!target.includes(query)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 36px 16px; color: #94A3B8;">
          <i data-lucide="file-question" style="width: 32px; height: 32px; margin-bottom: 8px; color: #CBD5E1;"></i>
          <div style="font-size: 14px; font-weight: 600;">ไม่พบรหัสการวินิจฉัยโรคตามเงื่อนไข</div>
        </td>
      </tr>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  tbody.innerHTML = filtered.map(item => {
    const isIcd10 = item.type === 'icd10';
    const stdBadge = isIcd10 
      ? `<span style="background: #EFF6FF; color: #1D4ED8; border: 1px solid #BFDBFE; font-size: 11px; font-weight: 700; padding: 2px 7px; border-radius: 4px;">ICD-10</span>`
      : `<span style="background: #FDF2F8; color: #BE185D; border: 1px solid #FBCFE8; font-size: 11px; font-weight: 700; padding: 2px 7px; border-radius: 4px;">ICD-9</span>`;

    const freqBadge = item.isFrequent 
      ? `<span style="background: #FEF3C7; color: #B45309; font-size: 11px; font-weight: 600; padding: 2px 8px; border-radius: 9999px;">⭐ บ่อย</span>` 
      : `<span style="color: #94A3B8; font-size: 11px;">ทั่วไป</span>`;

    return `
      <tr>
        <td>${stdBadge}</td>
        <td><span class="master-code-badge">${item.code}</span></td>
        <td style="font-weight: 600; color: #0F172A; font-size: 13px;">${item.nameEn}</td>
        <td style="color: #334155; font-size: 13px;">${item.nameTh}</td>
        <td style="text-align: center;">${freqBadge}</td>
        <td style="text-align: center;">
          <div class="master-action-group">
            <button type="button" class="btn-master-action" onclick="openAddMasterItemModal('icd', ${item.id})" title="แก้ไขรหัสวินิจฉัย">
              <i data-lucide="edit-3"></i>
            </button>
            <button type="button" class="btn-master-action del" onclick="deleteMasterItem('icd', ${item.id})" title="ลบข้อมูล">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

// -------------------------------------------------------------
// TAB 4: คอร์สและแพ็กเกจรักษา (Courses Master)
// -------------------------------------------------------------
function renderSettingsCoursesTable() {
  const tbody = document.getElementById('settingsCoursesTableBody');
  if (!tbody) return;

  const query = (document.getElementById('settingsCourseSearchInput')?.value || '').trim().toLowerCase();

  const filtered = masterCoursesData.filter(item => {
    if (query) {
      const target = `${item.code} ${item.name}`.toLowerCase();
      if (!target.includes(query)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 36px 16px; color: #94A3B8;">
          <i data-lucide="ticket-x" style="width: 32px; height: 32px; margin-bottom: 8px; color: #CBD5E1;"></i>
          <div style="font-size: 14px; font-weight: 600;">ไม่พบคอร์สหรือแพ็กเกจการรักษาที่ค้นหา</div>
        </td>
      </tr>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  tbody.innerHTML = filtered.map(item => {
    const isAct = item.status === 'active';
    const eyeSide = item.defaultEye || 'OU';
    const eyeClass = eyeSide === 'OU' ? 'ou' : (eyeSide === 'OD' ? 'od' : 'os');

    return `
      <tr>
        <td><span class="master-code-badge">${item.code}</span></td>
        <td style="font-weight: 700; color: #0F172A; font-size: 13.5px;">${item.name}</td>
        <td style="text-align: center; font-weight: 700; color: #0D3B5E;">${item.sessions} ครั้ง</td>
        <td style="text-align: center; font-size: 12.5px; color: #475569;">${item.validityDays} วัน</td>
        <td style="text-align: center;"><span class="master-eye-badge ${eyeClass}">${eyeSide}</span></td>
        <td style="text-align: right; font-weight: 800; color: #0D3B5E; font-size: 14px; font-variant-numeric: tabular-nums;">
          ฿${Number(item.price).toLocaleString()}
        </td>
        <td style="text-align: center;">
          <span class="master-status-badge ${isAct ? 'active' : 'inactive'}">
            <span style="width:6px;height:6px;border-radius:50%;background:${isAct ? '#16A34A' : '#94A3B8'};"></span>
            ${isAct ? 'เปิดใช้' : 'ปิดใช้'}
          </span>
        </td>
        <td style="text-align: center;">
          <div class="master-action-group">
            <button type="button" class="btn-master-action" onclick="openAddMasterItemModal('courses', ${item.id})" title="แก้ไขแพ็กเกจคอร์ส">
              <i data-lucide="edit-3"></i>
            </button>
            <button type="button" class="btn-master-action ${isAct ? 'toggle-on' : 'toggle-off'}" onclick="toggleMasterItemStatus('courses', ${item.id})" title="${isAct ? 'ปิดใช้งาน' : 'เปิดใช้งาน'}">
              <i data-lucide="${isAct ? 'toggle-right' : 'toggle-left'}"></i>
            </button>
            <button type="button" class="btn-master-action del" onclick="deleteMasterItem('courses', ${item.id})" title="ลบข้อมูล">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

// -------------------------------------------------------------
// TAB 5: ห้องตรวจและแผนก (Rooms Master)
// -------------------------------------------------------------
function renderSettingsRoomsTable() {
  const tbody = document.getElementById('settingsRoomsTableBody');
  if (!tbody) return;

  const query = (document.getElementById('settingsRoomSearchInput')?.value || '').trim().toLowerCase();

  const filtered = masterRoomsData.filter(item => {
    if (query) {
      const target = `${item.code} ${item.name} ${item.department} ${item.equipment} ${item.staff}`.toLowerCase();
      if (!target.includes(query)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 36px 16px; color: #94A3B8;">
          <i data-lucide="door-closed" style="width: 32px; height: 32px; margin-bottom: 8px; color: #CBD5E1;"></i>
          <div style="font-size: 14px; font-weight: 600;">ไม่พบห้องตรวจที่ตรงกับคำค้นหา</div>
        </td>
      </tr>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  tbody.innerHTML = filtered.map(item => {
    const isAct = item.status === 'active';

    return `
      <tr>
        <td><span class="master-code-badge">${item.code}</span></td>
        <td style="font-weight: 700; color: #0F172A; font-size: 13.5px;">${item.name}</td>
        <td>
          <span style="background: #F0FDF4; color: #166534; font-size: 11.5px; font-weight: 600; padding: 2px 8px; border-radius: 6px;">
            ${item.department}
          </span>
        </td>
        <td style="font-size: 12px; color: #475569; max-width: 280px; line-height: 1.4;">${item.equipment}</td>
        <td style="text-align: center; font-size: 12.5px; font-weight: 600; color: #0D3B5E;">${item.staff}</td>
        <td style="text-align: center;">
          <span class="master-status-badge ${isAct ? 'active' : 'inactive'}">
            <span style="width:6px;height:6px;border-radius:50%;background:${isAct ? '#16A34A' : '#94A3B8'};"></span>
            ${isAct ? 'พร้อมใช้' : 'งดใช้'}
          </span>
        </td>
        <td style="text-align: center;">
          <div class="master-action-group">
            <button type="button" class="btn-master-action" onclick="openAddMasterItemModal('rooms', ${item.id})" title="แก้ไขห้องตรวจ">
              <i data-lucide="edit-3"></i>
            </button>
            <button type="button" class="btn-master-action ${isAct ? 'toggle-on' : 'toggle-off'}" onclick="toggleMasterItemStatus('rooms', ${item.id})" title="${isAct ? 'ปิดใช้งาน' : 'เปิดใช้งาน'}">
              <i data-lucide="${isAct ? 'toggle-right' : 'toggle-left'}"></i>
            </button>
            <button type="button" class="btn-master-action del" onclick="deleteMasterItem('rooms', ${item.id})" title="ลบข้อมูล">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

// -------------------------------------------------------------
// SHORTCUT OPENERS
// -------------------------------------------------------------
function openAddMedMasterModal(id) { openAddMasterItemModal('medications', id); }
function openAddProcedureMasterModal(id) { openAddMasterItemModal('procedures', id); }
function openAddIcdMasterModal(id) { openAddMasterItemModal('icd', id); }
function openAddRoomMasterModal(id) { openAddMasterItemModal('rooms', id); }

// -------------------------------------------------------------
// MODAL: เพิ่ม/แก้ไขข้อมูลหลัก MASTER DATA MODAL
// -------------------------------------------------------------
function openAddMasterItemModal(itemType, itemId) {
  const type = itemType || activeSettingsMasterTab;
  if (type === 'clinic-info') {
    // If clinic info, switch tab and focus
    switchSettingsMasterTab('clinic-info');
    document.getElementById('cfgClinicNameTh')?.focus();
    return;
  }

  const modal = document.getElementById('modalMasterDataEdit');
  const titleEl = document.getElementById('masterModalTitle');
  const subtitleEl = document.getElementById('masterModalSubtitle');
  const iconEl = document.getElementById('masterModalIcon');
  const formBody = document.getElementById('masterModalFormBody');
  const typeInput = document.getElementById('masterEditItemType');
  const idInput = document.getElementById('masterEditItemId');

  if (!modal || !formBody) return;

  typeInput.value = type;
  idInput.value = itemId || '';

  const isEdit = !!itemId;

  // Set modal headers
  if (type === 'medications') {
    titleEl.textContent = isEdit ? 'แก้ไขทะเบียนยาและเวชภัณฑ์' : 'เพิ่มทะเบียนยาและเวชภัณฑ์ใหม่';
    subtitleEl.textContent = 'บันทึกรหัสยา ชื่อสามัญ รูปแบบยา และราคาเข้าสู่ระบบคลัง';
    if (iconEl) iconEl.setAttribute('data-lucide', 'pill');
    
    const item = isEdit ? pharmacyInventoryData.find(m => m.id == itemId) || {} : {};
    formBody.innerHTML = `
      <div class="form-grid-2">
        <div class="create-appt-field">
          <label class="create-appt-label"><span class="req-red">*</span>รหัสยาภายใน (Clinic Code)</label>
          <input type="text" class="create-appt-input" id="mdfMedCode" value="${item.code || 'MED-' + String(pharmacyInventoryData.length + 1).padStart(3, '0')}" required>
        </div>
        <div class="create-appt-field">
          <label class="create-appt-label">รหัสมาตรฐาน TMT</label>
          <input type="text" class="create-appt-input" id="mdfMedTmt" value="${item.tmtCode || ''}" placeholder="เช่น TMT-741028">
        </div>
        <div class="create-appt-field" style="grid-column: span 2;">
          <label class="create-appt-label"><span class="req-red">*</span>ชื่อการค้า (Trade Name)</label>
          <input type="text" class="create-appt-input" id="mdfMedTradeName" value="${item.tradeName || ''}" placeholder="เช่น Xalatan 0.005% Eye Drops" required>
        </div>
        <div class="create-appt-field" style="grid-column: span 2;">
          <label class="create-appt-label"><span class="req-red">*</span>ชื่อสามัญทางยา (Generic Name)</label>
          <input type="text" class="create-appt-input" id="mdfMedGenericName" value="${item.genericName || ''}" placeholder="เช่น Latanoprost Ophthalmic Solution" required>
        </div>
        <div class="create-appt-field">
          <label class="create-appt-label"><span class="req-red">*</span>หมวดหมู่ยา</label>
          <div class="appt-select-wrap">
            <select class="create-appt-input" id="mdfMedCategory">
              <option value="ophtho" ${item.category === 'ophtho' ? 'selected' : ''}>ยาหยอดตา / ยาจักษุ (Ophtho)</option>
              <option value="psych" ${item.category === 'psych' ? 'selected' : ''}>ยาจิตเวชควบคุม (Psych)</option>
              <option value="supply" ${item.category === 'supply' ? 'selected' : ''}>เวชภัณฑ์สิ้นเปลือง (Supply)</option>
            </select>
          </div>
        </div>
        <div class="create-appt-field">
          <label class="create-appt-label">การควบคุม อย. (FDA Class)</label>
          <div class="appt-select-wrap">
            <select class="create-appt-input" id="mdfMedFdaClass">
              <option value="" ${!item.fdaClass ? 'selected' : ''}>ยาแผนปัจจุบันทั่วไป</option>
              <option value="วจ.2" ${item.fdaClass === 'วจ.2' ? 'selected' : ''}>วัตถุออกฤทธิ์ต่อจิตประสาท ประเภท 2 (วจ.2)</option>
              <option value="วจ.4" ${item.fdaClass === 'วจ.4' ? 'selected' : ''}>วัตถุออกฤทธิ์ต่อจิตประสาท ประเภท 4 (วจ.4)</option>
            </select>
          </div>
        </div>
        <div class="create-appt-field">
          <label class="create-appt-label"><span class="req-red">*</span>ราคาทุน (฿)</label>
          <input type="number" class="create-appt-input" id="mdfMedCostPrice" value="${item.costPrice || 0}" step="any" min="0" required>
        </div>
        <div class="create-appt-field">
          <label class="create-appt-label"><span class="req-red">*</span>ราคาขาย (฿)</label>
          <input type="number" class="create-appt-input" id="mdfMedSellPrice" value="${item.sellPrice || 0}" step="any" min="0" required>
        </div>
        <div class="create-appt-field">
          <label class="create-appt-label">หน่วยนับพื้นฐาน (Base Unit)</label>
          <input type="text" class="create-appt-input" id="mdfMedBaseUnit" value="${item.baseUnit || 'ขวด'}" placeholder="เช่น ขวด, เม็ด, หลอด">
        </div>
        <div class="create-appt-field">
          <label class="create-appt-label">เงื่อนไขการจัดเก็บ</label>
          <div class="appt-select-wrap">
            <select class="create-appt-input" id="mdfMedColdChain">
              <option value="no" ${!item.coldChain ? 'selected' : ''}>อุณหภูมิห้องปกติ (≤30°C)</option>
              <option value="yes" ${item.coldChain ? 'selected' : ''}>แช่เย็นควบคุมอุณหภูมิ (2-8°C Cold Chain)</option>
            </select>
          </div>
        </div>
      </div>
    `;
  } else if (type === 'procedures') {
    titleEl.textContent = isEdit ? 'แก้ไขรายการหัตถการและบริการ' : 'เพิ่มหัตถการและบริการใหม่';
    subtitleEl.textContent = 'กำหนดรหัสหัตถการ ค่าบริการ และการเชื่อมโยงสิทธิ์คอร์ส';
    if (iconEl) iconEl.setAttribute('data-lucide', 'stethoscope');

    const item = isEdit ? OPH_TREATMENT_CATALOG.find(p => p.id === itemId) || {} : {};
    formBody.innerHTML = `
      <div class="form-grid-2">
        <div class="create-appt-field">
          <label class="create-appt-label"><span class="req-red">*</span>รหัสหัตถการ (Code)</label>
          <input type="text" class="create-appt-input" id="mdfProcCode" value="${item.code || 'OPH-' + String(OPH_TREATMENT_CATALOG.length + 1).padStart(2, '0')}" required>
        </div>
        <div class="create-appt-field">
          <label class="create-appt-label"><span class="req-red">*</span>หมวดหมู่หัตถการ</label>
          <div class="appt-select-wrap">
            <select class="create-appt-input" id="mdfProcCategory">
              <option value="procedures" ${item.category === 'procedures' ? 'selected' : ''}>หัตถการตา (Procedures)</option>
              <option value="devices" ${item.category === 'devices' ? 'selected' : ''}>เครื่องมือพิเศษ (OCT/Fundus/VF)</option>
              <option value="lab" ${item.category === 'lab' ? 'selected' : ''}>ส่งตรวจ Lab</option>
              <option value="services" ${item.category === 'services' ? 'selected' : ''}>ค่าบริการ/ใบรับรองแพทย์</option>
            </select>
          </div>
        </div>
        <div class="create-appt-field" style="grid-column: span 2;">
          <label class="create-appt-label"><span class="req-red">*</span>ชื่อรายการหัตถการ / การตรวจ</label>
          <input type="text" class="create-appt-input" id="mdfProcName" value="${item.name || ''}" placeholder="เช่น ถ่ายภาพจอประสาทตา Ultra-widefield" required>
        </div>
        <div class="create-appt-field" style="grid-column: span 2;">
          <label class="create-appt-label">คำอธิบายเพิ่มเติม (Description / Note)</label>
          <input type="text" class="create-appt-input" id="mdfProcDesc" value="${item.desc || ''}" placeholder="เช่น Digital Color Retinal Photography">
        </div>
        <div class="create-appt-field">
          <label class="create-appt-label"><span class="req-red">*</span>ราคาค่าบริการ (฿)</label>
          <input type="number" class="create-appt-input" id="mdfProcPrice" value="${item.price || 0}" min="0" required>
        </div>
        <div class="create-appt-field">
          <label class="create-appt-label">ข้างตาเริ่มต้น (Laterality)</label>
          <div class="appt-select-wrap">
            <select class="create-appt-input" id="mdfProcEye">
              <option value="OU" ${item.defaultEye === 'OU' ? 'selected' : ''}>ทั้งสองข้าง (OU)</option>
              <option value="OD" ${item.defaultEye === 'OD' ? 'selected' : ''}>ตาข้างขวา (OD)</option>
              <option value="OS" ${item.defaultEye === 'OS' ? 'selected' : ''}>ตาข้างซ้าย (OS)</option>
            </select>
          </div>
        </div>
        <div class="create-appt-field" style="grid-column: span 2;">
          <label class="create-appt-label">การตัดสิทธิ์คอร์ส (Course Integration)</label>
          <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; color: #1E293B; cursor: pointer; margin-top: 4px;">
            <input type="checkbox" id="mdfProcSupportsCourse" ${item.supportsCourse ? 'checked' : ''} style="width: 16px; height: 16px; accent-color: #0D3B5E;">
            <span>รายการนี้สามารถใช้สิทธิ์หักจากแพ็กเกจคอร์สของคนไข้ได้</span>
          </label>
        </div>
      </div>
    `;
  } else if (type === 'icd') {
    titleEl.textContent = isEdit ? 'แก้ไขรหัสการวินิจฉัยโรค' : 'เพิ่มรหัสการวินิจฉัยโรค (ICD)';
    subtitleEl.textContent = 'บันทึกมาตรฐาน ICD-10 โรค หรือ ICD-9 หัตถการสำหรับระบบเวชระเบียน';
    if (iconEl) iconEl.setAttribute('data-lucide', 'file-code-2');

    const item = isEdit ? masterIcdData.find(i => i.id == itemId) || {} : {};
    formBody.innerHTML = `
      <div class="form-grid-2">
        <div class="create-appt-field">
          <label class="create-appt-label"><span class="req-red">*</span>มาตรฐานการวินิจฉัย</label>
          <div class="appt-select-wrap">
            <select class="create-appt-input" id="mdfIcdType">
              <option value="icd10" ${item.type === 'icd10' ? 'selected' : ''}>ICD-10 (การวินิจฉัยโรค)</option>
              <option value="icd9" ${item.type === 'icd9' ? 'selected' : ''}>ICD-9 (รายการหัตถการ)</option>
            </select>
          </div>
        </div>
        <div class="create-appt-field">
          <label class="create-appt-label"><span class="req-red">*</span>รหัส (Code)</label>
          <input type="text" class="create-appt-input" id="mdfIcdCode" value="${item.code || ''}" placeholder="เช่น H40.1 หรือ 95.02" required>
        </div>
        <div class="create-appt-field" style="grid-column: span 2;">
          <label class="create-appt-label"><span class="req-red">*</span>ชื่อภาษาอังกฤษ (English Name)</label>
          <input type="text" class="create-appt-input" id="mdfIcdNameEn" value="${item.nameEn || ''}" placeholder="เช่น Primary open-angle glaucoma" required>
        </div>
        <div class="create-appt-field" style="grid-column: span 2;">
          <label class="create-appt-label"><span class="req-red">*</span>ชื่อภาษาไทย / คำอธิบาย</label>
          <input type="text" class="create-appt-input" id="mdfIcdNameTh" value="${item.nameTh || ''}" placeholder="เช่น ต้อหินมุมเปิดปฐมภูมิ" required>
        </div>
        <div class="create-appt-field" style="grid-column: span 2;">
          <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; color: #1E293B; cursor: pointer;">
            <input type="checkbox" id="mdfIcdIsFrequent" ${item.isFrequent ? 'checked' : ''} style="width: 16px; height: 16px; accent-color: #0D3B5E;">
            <span>⭐ กำหนดเป็นรายการที่ใช้บ่อย (Favorite Shortcut ในห้องตรวจ)</span>
          </label>
        </div>
      </div>
    `;
  } else if (type === 'courses') {
    titleEl.textContent = isEdit ? 'แก้ไขแพ็กเกจคอร์สรักษา' : 'สร้างแพ็กเกจคอร์สรักษาใหม่';
    subtitleEl.textContent = 'กำหนดจำนวนครั้ง อายุคอร์ส และราคาแพ็กเกจ';
    if (iconEl) iconEl.setAttribute('data-lucide', 'ticket');

    const item = isEdit ? masterCoursesData.find(c => c.id == itemId) || {} : {};
    formBody.innerHTML = `
      <div class="form-grid-2">
        <div class="create-appt-field">
          <label class="create-appt-label"><span class="req-red">*</span>รหัสแพ็กเกจ</label>
          <input type="text" class="create-appt-input" id="mdfCrsCode" value="${item.code || 'CRS-' + String(masterCoursesData.length + 1).padStart(3, '0')}" required>
        </div>
        <div class="create-appt-field">
          <label class="create-appt-label"><span class="req-red">*</span>จำนวนครั้งในคอร์ส</label>
          <input type="number" class="create-appt-input" id="mdfCrsSessions" value="${item.sessions || 4}" min="1" required>
        </div>
        <div class="create-appt-field" style="grid-column: span 2;">
          <label class="create-appt-label"><span class="req-red">*</span>ชื่อคอร์ส / แพ็กเกจการรักษา</label>
          <input type="text" class="create-appt-input" id="mdfCrsName" value="${item.name || ''}" placeholder="เช่น คอร์สเลเซอร์รักษาตาแห้ง (IPL Dry Eye)" required>
        </div>
        <div class="create-appt-field">
          <label class="create-appt-label"><span class="req-red">*</span>ราคาแพ็กเกจ (฿)</label>
          <input type="number" class="create-appt-input" id="mdfCrsPrice" value="${item.price || 0}" min="0" required>
        </div>
        <div class="create-appt-field">
          <label class="create-appt-label">อายุคอร์ส (วัน)</label>
          <input type="number" class="create-appt-input" id="mdfCrsDays" value="${item.validityDays || 365}" min="1">
        </div>
        <div class="create-appt-field">
          <label class="create-appt-label">ข้างตาเริ่มต้น</label>
          <div class="appt-select-wrap">
            <select class="create-appt-input" id="mdfCrsEye">
              <option value="OU" ${item.defaultEye === 'OU' ? 'selected' : ''}>ทั้งสองข้าง (OU)</option>
              <option value="OD" ${item.defaultEye === 'OD' ? 'selected' : ''}>ตาขวา (OD)</option>
              <option value="OS" ${item.defaultEye === 'OS' ? 'selected' : ''}>ตาซ้าย (OS)</option>
            </select>
          </div>
        </div>
      </div>
    `;
  } else if (type === 'rooms') {
    titleEl.textContent = isEdit ? 'แก้ไขห้องตรวจและจุดบริการ' : 'เพิ่มห้องตรวจและจุดบริการใหม่';
    subtitleEl.textContent = 'บันทึกข้อมูลห้องตรวจ แผนก และอุปกรณ์ประจำห้อง';
    if (iconEl) iconEl.setAttribute('data-lucide', 'door-open');

    const item = isEdit ? masterRoomsData.find(r => r.id == itemId) || {} : {};
    formBody.innerHTML = `
      <div class="form-grid-2">
        <div class="create-appt-field">
          <label class="create-appt-label"><span class="req-red">*</span>รหัสห้องตรวจ</label>
          <input type="text" class="create-appt-input" id="mdfRoomCode" value="${item.code || 'ROOM-' + String(masterRoomsData.length + 1).padStart(2, '0')}" required>
        </div>
        <div class="create-appt-field">
          <label class="create-appt-label"><span class="req-red">*</span>แผนกคลินิก</label>
          <input type="text" class="create-appt-input" id="mdfRoomDept" value="${item.department || 'แผนกจักษุวิทยา'}" required>
        </div>
        <div class="create-appt-field" style="grid-column: span 2;">
          <label class="create-appt-label"><span class="req-red">*</span>ชื่อห้องตรวจ / จุดบริการ</label>
          <input type="text" class="create-appt-input" id="mdfRoomName" value="${item.name || ''}" placeholder="เช่น ห้องตรวจจักษุ 1" required>
        </div>
        <div class="create-appt-field" style="grid-column: span 2;">
          <label class="create-appt-label">เครื่องมือและอุปกรณ์ประจำห้อง</label>
          <textarea class="create-appt-input" id="mdfRoomEquipment" rows="2" placeholder="เช่น Slit-lamp, Tonometer">${item.equipment || ''}</textarea>
        </div>
        <div class="create-appt-field" style="grid-column: span 2;">
          <label class="create-appt-label">แพทย์ / เจ้าหน้าที่ประจำห้อง</label>
          <input type="text" class="create-appt-input" id="mdfRoomStaff" value="${item.staff || ''}" placeholder="เช่น นพ. เปรมชัย เสือขาว">
        </div>
      </div>
    `;
  }

  modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

function closeMasterDataEditModal() {
  const modal = document.getElementById('modalMasterDataEdit');
  if (modal) modal.style.display = 'none';
}

function handleMasterDataEditSubmit(e) {
  if (e) e.preventDefault();

  const type = document.getElementById('masterEditItemType')?.value || activeSettingsMasterTab;
  const itemId = document.getElementById('masterEditItemId')?.value;
  const isEdit = !!itemId;

  if (type === 'medications') {
    const code = document.getElementById('mdfMedCode')?.value.trim();
    const tmt = document.getElementById('mdfMedTmt')?.value.trim();
    const trade = document.getElementById('mdfMedTradeName')?.value.trim();
    const generic = document.getElementById('mdfMedGenericName')?.value.trim();
    const category = document.getElementById('mdfMedCategory')?.value;
    const fdaClass = document.getElementById('mdfMedFdaClass')?.value || null;
    const cost = parseFloat(document.getElementById('mdfMedCostPrice')?.value) || 0;
    const sell = parseFloat(document.getElementById('mdfMedSellPrice')?.value) || 0;
    const unit = document.getElementById('mdfMedBaseUnit')?.value.trim() || 'ขวด';
    const coldChain = document.getElementById('mdfMedColdChain')?.value === 'yes';

    if (isEdit) {
      const idx = pharmacyInventoryData.findIndex(m => m.id == itemId);
      if (idx !== -1) {
        pharmacyInventoryData[idx] = {
          ...pharmacyInventoryData[idx],
          code, tmtCode: tmt, tradeName: trade, genericName: generic,
          category, fdaClass, costPrice: cost, sellPrice: sell,
          baseUnit: unit, coldChain
        };
      }
    } else {
      pharmacyInventoryData.unshift({
        id: Date.now(),
        code, tmtCode: tmt, tradeName: trade, genericName: generic,
        dosageForm: 'ยาหยอดตา (Eye Drops)',
        category, fdaClass, costPrice: cost, sellPrice: sell,
        baseUnit: unit, coldChain,
        balanceQty: 100, minQty: 20,
        subStock: 'treatment', locationMain: 'คลังห้องจ่ายยา',
        status: 'active'
      });
    }

    renderSettingsMedicationsTable();
    showToast(isEdit ? 'อัปเดตทะเบียนยาสำเร็จ' : 'เพิ่มทะเบียนยาใหม่สำเร็จ', `บันทึกรายการ "${trade}" (${code}) เรียบร้อยแล้ว`, 'success');

  } else if (type === 'procedures') {
    const code = document.getElementById('mdfProcCode')?.value.trim();
    const cat = document.getElementById('mdfProcCategory')?.value;
    const name = document.getElementById('mdfProcName')?.value.trim();
    const desc = document.getElementById('mdfProcDesc')?.value.trim();
    const price = parseFloat(document.getElementById('mdfProcPrice')?.value) || 0;
    const eye = document.getElementById('mdfProcEye')?.value || 'OU';
    const supportsCourse = !!document.getElementById('mdfProcSupportsCourse')?.checked;

    const catLabels = {
      procedures: 'หัตถการตา',
      devices: 'เครื่องมือพิเศษ',
      lab: 'ส่งตรวจ Lab',
      services: 'ค่าบริการ/ใบรับรอง'
    };

    if (isEdit) {
      const idx = OPH_TREATMENT_CATALOG.findIndex(p => p.id === itemId);
      if (idx !== -1) {
        OPH_TREATMENT_CATALOG[idx] = {
          ...OPH_TREATMENT_CATALOG[idx],
          code, category: cat, categoryLabel: catLabels[cat],
          name, desc, price, defaultEye: eye, supportsCourse
        };
      }
    } else {
      OPH_TREATMENT_CATALOG.push({
        id: code,
        code, category: cat, categoryLabel: catLabels[cat],
        name, desc, price, defaultEye: eye, supportsCourse,
        status: 'active'
      });
    }

    renderSettingsProceduresTable();
    showToast(isEdit ? 'อัปเดตหัตถการสำเร็จ' : 'เพิ่มหัตถการใหม่สำเร็จ', `บันทึก "${name}" เรียบร้อยแล้ว`, 'success');

  } else if (type === 'icd') {
    const icdType = document.getElementById('mdfIcdType')?.value || 'icd10';
    const code = document.getElementById('mdfIcdCode')?.value.trim();
    const nameEn = document.getElementById('mdfIcdNameEn')?.value.trim();
    const nameTh = document.getElementById('mdfIcdNameTh')?.value.trim();
    const isFrequent = !!document.getElementById('mdfIcdIsFrequent')?.checked;

    if (isEdit) {
      const idx = masterIcdData.findIndex(i => i.id == itemId);
      if (idx !== -1) {
        masterIcdData[idx] = { ...masterIcdData[idx], type: icdType, code, nameEn, nameTh, isFrequent };
      }
    } else {
      masterIcdData.push({
        id: Date.now(),
        type: icdType, code, nameEn, nameTh, isFrequent, status: 'active'
      });
    }

    renderSettingsIcdTable();
    showToast(isEdit ? 'อัปเดตรหัส ICD สำเร็จ' : 'เพิ่มรหัส ICD สำเร็จ', `บันทึก ${code} - ${nameEn} เรียบร้อยแล้ว`, 'success');

  } else if (type === 'courses') {
    const code = document.getElementById('mdfCrsCode')?.value.trim();
    const name = document.getElementById('mdfCrsName')?.value.trim();
    const sessions = parseInt(document.getElementById('mdfCrsSessions')?.value, 10) || 4;
    const price = parseFloat(document.getElementById('mdfCrsPrice')?.value) || 0;
    const days = parseInt(document.getElementById('mdfCrsDays')?.value, 10) || 365;
    const eye = document.getElementById('mdfCrsEye')?.value || 'OU';

    if (isEdit) {
      const idx = masterCoursesData.findIndex(c => c.id == itemId);
      if (idx !== -1) {
        masterCoursesData[idx] = { ...masterCoursesData[idx], code, name, sessions, price, validityDays: days, defaultEye: eye };
      }
    } else {
      masterCoursesData.push({
        id: Date.now(),
        code, name, sessions, price, validityDays: days, defaultEye: eye, status: 'active'
      });
    }

    renderSettingsCoursesTable();
    showToast(isEdit ? 'อัปเดตแพ็กเกจคอร์สสำเร็จ' : 'สร้างแพ็กเกจคอร์สใหม่สำเร็จ', `บันทึก "${name}" เรียบร้อยแล้ว`, 'success');

  } else if (type === 'rooms') {
    const code = document.getElementById('mdfRoomCode')?.value.trim();
    const dept = document.getElementById('mdfRoomDept')?.value.trim();
    const name = document.getElementById('mdfRoomName')?.value.trim();
    const equipment = document.getElementById('mdfRoomEquipment')?.value.trim();
    const staff = document.getElementById('mdfRoomStaff')?.value.trim();

    if (isEdit) {
      const idx = masterRoomsData.findIndex(r => r.id == itemId);
      if (idx !== -1) {
        masterRoomsData[idx] = { ...masterRoomsData[idx], code, department: dept, name, equipment, staff };
      }
      if (typeof examRoomsData !== 'undefined' && idx !== -1 && examRoomsData[idx]) {
        examRoomsData[idx].name = name;
        examRoomsData[idx].department = dept;
        examRoomsData[idx].doctorName = staff;
      }
    } else {
      masterRoomsData.push({
        id: Date.now(),
        code, department: dept, name, equipment, staff, status: 'active'
      });
      if (typeof examRoomsData !== 'undefined') {
        examRoomsData.push({
          id: examRoomsData.length + 1,
          name: name,
          department: dept,
          doctorName: staff || 'นพ. สมชาย ใจดี',
          doctorRole: `${dept} • ประจำห้องตรวจ`,
          doctorAvatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=120&auto=format&fit=crop&q=80',
          status: 'available',
          patient: null
        });
      }
    }
    if (typeof renderQueueRooms === 'function') renderQueueRooms();
    if (typeof renderHomeDashboard === 'function') renderHomeDashboard();

    renderSettingsRoomsTable();
    showToast(isEdit ? 'อัปเดตห้องตรวจสำเร็จ' : 'เพิ่มห้องตรวจใหม่สำเร็จ', `บันทึก "${name}" และซิงค์กับระบบคิวเรียบร้อยแล้ว`, 'success');
  }

  // Update KPI counters
  renderSettingsMasterDataView();
  closeMasterDataEditModal();
  if (typeof playHospitalChime === 'function') playHospitalChime();
}

function toggleMasterItemStatus(type, id) {
  let itemName = '';
  let newStatus = 'active';

  if (type === 'medications') {
    const item = pharmacyInventoryData.find(m => m.id == id);
    if (item) {
      item.status = item.status === 'inactive' ? 'active' : 'inactive';
      newStatus = item.status;
      itemName = item.tradeName;
      renderSettingsMedicationsTable();
    }
  } else if (type === 'procedures') {
    const item = OPH_TREATMENT_CATALOG.find(p => p.id === id);
    if (item) {
      item.status = item.status === 'inactive' ? 'active' : 'inactive';
      newStatus = item.status;
      itemName = item.name;
      renderSettingsProceduresTable();
    }
  } else if (type === 'courses') {
    const item = masterCoursesData.find(c => c.id == id);
    if (item) {
      item.status = item.status === 'inactive' ? 'active' : 'inactive';
      newStatus = item.status;
      itemName = item.name;
      renderSettingsCoursesTable();
    }
  } else if (type === 'rooms') {
    const item = masterRoomsData.find(r => r.id == id);
    if (item) {
      item.status = item.status === 'inactive' ? 'active' : 'inactive';
      newStatus = item.status;
      itemName = item.name;
      renderSettingsRoomsTable();
    }
  }

  showToast(
    newStatus === 'active' ? 'เปิดใช้งานสำเร็จ' : 'ปิดการใช้งานสำเร็จ',
    `ปรับสถานะ "${itemName}" เป็น ${newStatus === 'active' ? 'เปิดใช้งาน (Active)' : 'ปิดใช้งาน (Inactive)'} แล้ว`,
    'info'
  );
}

function deleteMasterItem(type, id) {
  if (!confirm('ยืนยันการลบรายการนี้ออกจากฐานข้อมูล Master Data?')) return;

  if (type === 'medications') {
    pharmacyInventoryData = pharmacyInventoryData.filter(m => m.id != id);
    renderSettingsMedicationsTable();
  } else if (type === 'procedures') {
    const idx = OPH_TREATMENT_CATALOG.findIndex(p => p.id === id);
    if (idx !== -1) OPH_TREATMENT_CATALOG.splice(idx, 1);
    renderSettingsProceduresTable();
  } else if (type === 'icd') {
    masterIcdData = masterIcdData.filter(i => i.id != id);
    renderSettingsIcdTable();
  } else if (type === 'courses') {
    masterCoursesData = masterCoursesData.filter(c => c.id != id);
    renderSettingsCoursesTable();
  } else if (type === 'rooms') {
    masterRoomsData = masterRoomsData.filter(r => r.id != id);
    renderSettingsRoomsTable();
  }

  renderSettingsMasterDataView();
  showToast('ลบรายการสำเร็จ', 'ลบข้อมูลออกจากระบบเรียบร้อยแล้ว', 'info');
}

// -------------------------------------------------------------
// TAB 6: ข้อมูลคลินิกทั่วไป (Clinic Organization Profile)
// -------------------------------------------------------------
function saveClinicGeneralConfig(e) {
  if (e) e.preventDefault();

  clinicGeneralConfig.nameTh = document.getElementById('cfgClinicNameTh')?.value || clinicGeneralConfig.nameTh;
  clinicGeneralConfig.nameEn = document.getElementById('cfgClinicNameEn')?.value || clinicGeneralConfig.nameEn;
  clinicGeneralConfig.licenseNo = document.getElementById('cfgClinicLicenseNo')?.value || clinicGeneralConfig.licenseNo;
  clinicGeneralConfig.taxId = document.getElementById('cfgClinicTaxId')?.value || clinicGeneralConfig.taxId;
  clinicGeneralConfig.phone = document.getElementById('cfgClinicPhone')?.value || clinicGeneralConfig.phone;
  clinicGeneralConfig.email = document.getElementById('cfgClinicEmail')?.value || clinicGeneralConfig.email;
  clinicGeneralConfig.address = document.getElementById('cfgClinicAddress')?.value || clinicGeneralConfig.address;
  clinicGeneralConfig.hours = document.getElementById('cfgClinicHours')?.value || clinicGeneralConfig.hours;
  clinicGeneralConfig.director = document.getElementById('cfgClinicDirector')?.value || clinicGeneralConfig.director;
  clinicGeneralConfig.receiptNote = document.getElementById('cfgClinicReceiptNote')?.value || clinicGeneralConfig.receiptNote;

  if (typeof playHospitalChime === 'function') playHospitalChime();
  showToast(
    'บันทึกข้อมูลคลินิกสำเร็จ',
    `อัปเดตข้อมูล "${clinicGeneralConfig.nameTh}" พร้อมใช้ในใบเสร็จและเอกสารเวชระเบียนทั้งหมดแล้ว`,
    'success'
  );
}

// -------------------------------------------------------------
// CSV EXPORT & EXCEL IMPORT
// -------------------------------------------------------------
function exportActiveMasterDataCsv() {
  let filename = `MasterData_${activeSettingsMasterTab}_2569.csv`;
  let csvContent = '\uFEFF'; // UTF-8 BOM for Thai language Excel support

  if (activeSettingsMasterTab === 'medications') {
    csvContent += 'รหัสยา,TMT,ชื่อการค้า,ชื่อสามัญ,หมวดหมู่,การควบคุม,ราคาทุน,ราคาขาย,หน่วยนับ,ห่วงโซ่ความเย็น\n';
    pharmacyInventoryData.forEach(m => {
      csvContent += `"${m.code}","${m.tmtCode || ''}","${m.tradeName}","${m.genericName}","${m.category}","${m.fdaClass || ''}",${m.costPrice},${m.sellPrice},"${m.baseUnit}","${m.coldChain ? 'Yes' : 'No'}"\n`;
    });
  } else if (activeSettingsMasterTab === 'procedures') {
    csvContent += 'รหัสหัตถการ,ชื่อหัตถการ,หมวดหมู่,ข้างตาเริ่มต้น,สิทธิ์คอร์ส,ราคาค่าบริการ\n';
    OPH_TREATMENT_CATALOG.forEach(p => {
      csvContent += `"${p.code}","${p.name}","${p.categoryLabel || p.category}","${p.defaultEye || 'OU'}","${p.supportsCourse ? 'Yes' : 'No'}",${p.price}\n`;
    });
  } else if (activeSettingsMasterTab === 'icd') {
    csvContent += 'มาตรฐาน,รหัส,ชื่อภาษาอังกฤษ,ชื่อภาษาไทย,ใช้บ่อย\n';
    masterIcdData.forEach(i => {
      csvContent += `"${i.type.toUpperCase()}","${i.code}","${i.nameEn}","${i.nameTh}","${i.isFrequent ? 'Yes' : 'No'}"\n`;
    });
  } else if (activeSettingsMasterTab === 'courses') {
    csvContent += 'รหัสแพ็กเกจ,ชื่อคอร์ส,จำนวนครั้ง,อายุคอร์สวัน,ข้างตา,ราคา\n';
    masterCoursesData.forEach(c => {
      csvContent += `"${c.code}","${c.name}",${c.sessions},${c.validityDays},"${c.defaultEye}",${c.price}\n`;
    });
  } else if (activeSettingsMasterTab === 'rooms') {
    csvContent += 'รหัสห้อง,ชื่อห้องตรวจ,แผนก,เครื่องมือประจำห้อง,เจ้าหน้าที่ประจำ\n';
    masterRoomsData.forEach(r => {
      csvContent += `"${r.code}","${r.name}","${r.department}","${r.equipment}","${r.staff}"\n`;
    });
  } else {
    csvContent += 'ข้อมูลทั่วไปสถานพยาบาล\n';
    csvContent += `ชื่อสถานพยาบาล,"${clinicGeneralConfig.nameTh}"\n`;
    csvContent += `เลขที่ใบอนุญาต,"${clinicGeneralConfig.licenseNo}"\n`;
    csvContent += `เบอร์โทรศัพท์,"${clinicGeneralConfig.phone}"\n`;
  }

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  if (typeof playHospitalChime === 'function') playHospitalChime();
  showToast('ส่งออกข้อมูล Master Data สำเร็จ', `ดาวน์โหลดไฟล์ "${filename}" เรียบร้อยแล้ว`, 'success');
}

function triggerImportMasterData() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.xlsx, .xls, .csv';
  input.onchange = function(e) {
    const file = e.target.files && e.target.files[0];
    if (file) {
      if (typeof playHospitalChime === 'function') playHospitalChime();
      showToast('นำเข้าข้อมูลสำเร็จ (Import Success)', `นำเข้าข้อมูล Master Data จากไฟล์ "${file.name}" เรียบร้อยแล้ว`, 'success');
    }
  };
  input.click();
}
