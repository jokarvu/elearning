<template>
  <b-container fluid id="normalize-container-fluid">
    <Header></Header>
    <b-jumbotron
      header="News & Notifications"
      class="text-center wow bounceInUp"
      id="contact-header"
    ></b-jumbotron>
    <b-container>
      <b-container id="about">
        <b-card no-body>
          <b-tabs pills card vertical nav-wrapper-class="col-md-4 wow bounceInLeft">
            <b-tab title="News" active class="wow bounceInLeft">
              <b-card-text class="wow bounceInRight">
                <h3 class="wow bounceInLeft">News</h3>
                <b-card>
                  <b-row>
                    <b-col md="6">
                      <b-card-img src="/img/n1.gif" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG CHIẾM 50% SỐ ĐỘI VƯỢT BÁN KẾT CUỘC ĐUA SỐ">
                        <b-card-text>
                          Bốn đội mạnh nhất khu vực phía Bắc đã lộ diện sau đêm thi Bán kết kịch tính tại Trung tâm Văn hóa Thể thao Cầu Giấy (Trần Quý Kiên, Hà Nội) ngày 11/4. Học viện Công nghệ Bưu chính Viễn thông có 2 đại diện. Số còn lại thuộc ĐH Công nghệ và Học viện Kỹ thuật Quân sự.
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
                <b-card>
                  <b-row>
                    <b-col md="6">
                      <b-card-img src="/img/n2.jpg" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="8/10 SINH VIÊN HỌC VIỆN ĐẠT GIẢI TRONG KỲ THI OLYMPIC TOÁN HỌC HỌC SINH – SINH VIÊN TOÀN QUỐC NĂM 2019">
                        <b-card-text>
                            Đoàn sinh viên Học viện Công nghệ Bưu chính Viễn thông đã giành được 2 giải Nhất, 3 giải Nhì, 02 giải Ba và 1 giải Khuyến khích tại kỳ thi Olympic Toán học học sinh – sinh viên toàn quốc năm 2019.
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
                <b-card>
                  <b-row>
                    <b-col md="6">
                      <b-card-img src="/img/n3.jpg" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="TUẦN LỄ REI BUSINESS WEEK 2019 TẠI HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG">
                        <b-card-text>
                            Trong các ngày từ 04/4 đến 05/4/2019, đoàn chuyên gia của tổ chức REI (Resource Exchange International) đã đến thăm và làm việc tại Học viện Công nghệ Bưu chính Viễn thông. Đây là hoạt động nằm trong khuôn khổ chương trình trao đổi chuyên gia được triển khai vào mùa xuân và mùa thu hàng năm.
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </b-card-text>
            </b-tab>
            <b-tab title="Notifications">
              <h3 class="wow bounceInLeft">Notifications</h3>
              <b-card-text class="wow bounceInRight">
                  <b-card>
                  <b-row>
                    <b-col md="6">
                      <b-card-img src="/img/n1.gif" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG CHIẾM 50% SỐ ĐỘI VƯỢT BÁN KẾT CUỘC ĐUA SỐ">
                        <b-card-text>
                          Bốn đội mạnh nhất khu vực phía Bắc đã lộ diện sau đêm thi Bán kết kịch tính tại Trung tâm Văn hóa Thể thao Cầu Giấy (Trần Quý Kiên, Hà Nội) ngày 11/4. Học viện Công nghệ Bưu chính Viễn thông có 2 đại diện. Số còn lại thuộc ĐH Công nghệ và Học viện Kỹ thuật Quân sự.
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
                <b-card>
                  <b-row>
                    <b-col md="6">
                      <b-card-img src="/img/n2.jpg" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="8/10 SINH VIÊN HỌC VIỆN ĐẠT GIẢI TRONG KỲ THI OLYMPIC TOÁN HỌC HỌC SINH – SINH VIÊN TOÀN QUỐC NĂM 2019">
                        <b-card-text>
                            Đoàn sinh viên Học viện Công nghệ Bưu chính Viễn thông đã giành được 2 giải Nhất, 3 giải Nhì, 02 giải Ba và 1 giải Khuyến khích tại kỳ thi Olympic Toán học học sinh – sinh viên toàn quốc năm 2019.
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
                <b-card>
                  <b-row>
                    <b-col md="6">
                      <b-card-img src="/img/n3.jpg" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="TUẦN LỄ REI BUSINESS WEEK 2019 TẠI HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG">
                        <b-card-text>
                            Trong các ngày từ 04/4 đến 05/4/2019, đoàn chuyên gia của tổ chức REI (Resource Exchange International) đã đến thăm và làm việc tại Học viện Công nghệ Bưu chính Viễn thông. Đây là hoạt động nằm trong khuôn khổ chương trình trao đổi chuyên gia được triển khai vào mùa xuân và mùa thu hàng năm.
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-container>
    </b-container>
    <Footer></Footer>
  </b-container>
</template>
<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
export default {
  components: { Header, Footer }
};
</script>
<style lang="scss" scoped>
    .container {
        max-width: 85%;
        width: 85%;
    }
    #about {
        max-width: 100%;
        width: 100%;
    }
</style>
