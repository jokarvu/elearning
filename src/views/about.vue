<template>
    <b-container fluid id="normalize-container-fluid">
        <Header></Header>
        <b-jumbotron header="About" class="text-center wow bounceInUp" id="contact-header"></b-jumbotron>
        <b-container id="about">
            <b-card no-body>
                <b-tabs pills card vertical nav-wrapper-class="col-md-4">
                    <b-tab title="History" active>
                        <b-card-text>
                            <h3>History</h3>
                            <p class="card-text-custom">
                                Viện công nghệ Thông tin và Truyền thông CDIT, trước đây là Trung tâm Công nghệ thông tin CDIT, được Tổng giám đốc Tổng Công ty Bưu chính Viễn thông Việt Nam (VNPT) ký quyết định thành lập số 636/QĐ-TCCB-LĐ ngày 22 tháng 3 năm 1999, trên cơ sở sắp xếp lại hai đơn vị thành viên của các đơn vị trực thuộc Học viện Công nghệ Bưu chính Viễn thông:
                                <br>- Trung tâm Nghiên cứu Phát triển Phần mềm, thuộc Viện KHKT Bưu điện
                                <br>- Trung tâm Đào tạo Phát triển Phần mềm, thuộc Trung tâm Đào tạo BCVT1 (cũ)

                                <br>Từ 01/01/2012, để phù hợp với xu thế phát triển của VNPT và Học viện CNBCVT, Trung tâm Công nghệ Thông tin được đổi tên thành Viện công nghệ Thông tin và Truyền thông CDIT (Quyết định số 1973/QĐ-VNPT-TCCB ký ngày 07 tháng 11 năm 2011 của Tổng giám đốc Tập đoàn Bưu chính Viễn thông Việt Nam).

                                <br>Từ 01/7/2014, thực hiện các quyết định: 888/QĐ-TTg ngày 10/06/2014 của Thủ tướng Chính phủ về việc “Phê duyệt Đề án tái cơ cấu Tập đoàn Bưu chính Viễn thông Việt Nam VNPT giai đoạn 2014 – 2015” và 878/QĐ-BTTTT ngày 27/06/2014 của Bộ trưởng Bộ Thông tin và Truyền thông về việc “Chuyển Học viện Công nghệ Bưu chính Viễn thông từ Tập đoàn Bưu chính Viễn thông Việt Nam về trực thuộc Bộ Thông tin và Truyền thông quản lý”, cùng với các đơn vị trực thuộc Học viện, CDIT được chuyển về thuộc Bộ Thông tin và Truyền thông.
                            </p>
                        </b-card-text>
                    </b-tab>
                    <b-tab title="Mission & Vision">
                        <h3>Mission</h3>
                        <b-card-text>
                            Sứ mạng của Học viện Công nghệ Bưu chính Viễn thông là sáng tạo và chuyển giao tri thức cho xã hội thông qua việc gắn kết các hoạt động giáo dục – đào tạo nguồn nhân lực chất lượng cao, nghiên cứu phát triển và chuyển giao khoa học công nghệ, tri thức mới trong lĩnh vực thông tin và truyền thông đáp ứng thực tiễn phát triển và hội nhập quốc tế của đất nước.
                        </b-card-text>
                        <h3>Vission</h3>
                        <b-card-text>
                            Đến năm 2030, Học viện trở thành tổ chức giáo dục – đào tạo, nghiên cứu có tính cạnh tranh, hội nhập quốc tế cao và nằm trong nhóm 20 trường đại học đứng đầu về chất lượng giáo dục – đào tạo và năng suất nghiên cứu khoa học của Việt Nam.
                        </b-card-text>
                    </b-tab>
                    <b-tab title="President's message">
                        <h3>President's message</h3>
                        <b-card-text>
                            Học viện Công nghệ Bưu chính Viễn thông – trường đại học công lập trực thuộc Bộ Thông tin & Truyền thông thực hiện sứ mạng Nghiên cứu khoa học, Đào tạo phát triển nguồn nhân lực chất lượng cao trong lĩnh vực Thông tin và Truyền thông với mục tiêu <b>“Xây dựng Học viện Công nghệ Bưu chính Viễn thông trở thành trường Đại học trọng điểm quốc gia trong lĩnh vực Thông tin và Truyền thông tại Việt Nam”</b>.<br>
                            Để đạt được mục tiêu trên, chúng ta sẽ không ngừng nâng cao chất lượng, mở rộng quy mô nghiên cứu và đào tạo, tăng cường hợp tác với các cơ quan tổ chức, cá nhân trong và ngoài nước góp phần đào tạo nên những giá trị tri thức mới của Việt Nam, với đội ngũ chuyên nghiệp tâm huyết, đủ bản lĩnh và năng lực hội nhập quốc tế.
                        </b-card-text>
                    </b-tab>
                </b-tabs>
            </b-card>
        </b-container>
        <Footer></Footer>
    </b-container>
</template>
<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
    components: {Header, Footer}
}
</script>

<style lang="scss">
    #about {
        max-width: 80%;
        width: 80%;
        .card {
            border: none;
            .card-header {
                background-color: white;
            }
            .card-text-custom {
                line-height: 30px;
            }
            .tab-pane {
                padding-top: 0!important;
            }
            h3 {
                padding-top: .7rem;
                padding-bottom: 1rem;
                border-bottom: 2px solid #f7941e;
            }
        }
    }
</style>
