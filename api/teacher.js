import request from "@/utils/request";

export default {

  // 分页讲师查询
  getTeacherList(page, limit) {
    return request({
      url: `/eduservice/teacherfront/getTeacherFrontList/${page}/${limit}`,
      method: `get`
    })
  },


  getTeacherInfo(teacherId){
    return request({
      url: `/eduservice/teacherfront/getTeacherFrontInfo/${teacherId}`,
      method: `get`
    })
  }
}
