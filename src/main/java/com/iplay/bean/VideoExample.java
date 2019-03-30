package com.iplay.bean;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class VideoExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public VideoExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andVideoIdIsNull() {
            addCriterion("video_id is null");
            return (Criteria) this;
        }

        public Criteria andVideoIdIsNotNull() {
            addCriterion("video_id is not null");
            return (Criteria) this;
        }

        public Criteria andVideoIdEqualTo(Integer value) {
            addCriterion("video_id =", value, "videoId");
            return (Criteria) this;
        }

        public Criteria andVideoIdNotEqualTo(Integer value) {
            addCriterion("video_id <>", value, "videoId");
            return (Criteria) this;
        }

        public Criteria andVideoIdGreaterThan(Integer value) {
            addCriterion("video_id >", value, "videoId");
            return (Criteria) this;
        }

        public Criteria andVideoIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("video_id >=", value, "videoId");
            return (Criteria) this;
        }

        public Criteria andVideoIdLessThan(Integer value) {
            addCriterion("video_id <", value, "videoId");
            return (Criteria) this;
        }

        public Criteria andVideoIdLessThanOrEqualTo(Integer value) {
            addCriterion("video_id <=", value, "videoId");
            return (Criteria) this;
        }

        public Criteria andVideoIdIn(List<Integer> values) {
            addCriterion("video_id in", values, "videoId");
            return (Criteria) this;
        }

        public Criteria andVideoIdNotIn(List<Integer> values) {
            addCriterion("video_id not in", values, "videoId");
            return (Criteria) this;
        }

        public Criteria andVideoIdBetween(Integer value1, Integer value2) {
            addCriterion("video_id between", value1, value2, "videoId");
            return (Criteria) this;
        }

        public Criteria andVideoIdNotBetween(Integer value1, Integer value2) {
            addCriterion("video_id not between", value1, value2, "videoId");
            return (Criteria) this;
        }

        public Criteria andVideoUserIdIsNull() {
            addCriterion("video_user_id is null");
            return (Criteria) this;
        }

        public Criteria andVideoUserIdIsNotNull() {
            addCriterion("video_user_id is not null");
            return (Criteria) this;
        }

        public Criteria andVideoUserIdEqualTo(String value) {
            addCriterion("video_user_id =", value, "videoUserId");
            return (Criteria) this;
        }

        public Criteria andVideoUserIdNotEqualTo(String value) {
            addCriterion("video_user_id <>", value, "videoUserId");
            return (Criteria) this;
        }

        public Criteria andVideoUserIdGreaterThan(String value) {
            addCriterion("video_user_id >", value, "videoUserId");
            return (Criteria) this;
        }

        public Criteria andVideoUserIdGreaterThanOrEqualTo(String value) {
            addCriterion("video_user_id >=", value, "videoUserId");
            return (Criteria) this;
        }

        public Criteria andVideoUserIdLessThan(String value) {
            addCriterion("video_user_id <", value, "videoUserId");
            return (Criteria) this;
        }

        public Criteria andVideoUserIdLessThanOrEqualTo(String value) {
            addCriterion("video_user_id <=", value, "videoUserId");
            return (Criteria) this;
        }

        public Criteria andVideoUserIdLike(String value) {
            addCriterion("video_user_id like", value, "videoUserId");
            return (Criteria) this;
        }

        public Criteria andVideoUserIdNotLike(String value) {
            addCriterion("video_user_id not like", value, "videoUserId");
            return (Criteria) this;
        }

        public Criteria andVideoUserIdIn(List<String> values) {
            addCriterion("video_user_id in", values, "videoUserId");
            return (Criteria) this;
        }

        public Criteria andVideoUserIdNotIn(List<String> values) {
            addCriterion("video_user_id not in", values, "videoUserId");
            return (Criteria) this;
        }

        public Criteria andVideoUserIdBetween(String value1, String value2) {
            addCriterion("video_user_id between", value1, value2, "videoUserId");
            return (Criteria) this;
        }

        public Criteria andVideoUserIdNotBetween(String value1, String value2) {
            addCriterion("video_user_id not between", value1, value2, "videoUserId");
            return (Criteria) this;
        }

        public Criteria andVideoViewCountIsNull() {
            addCriterion("video_view_count is null");
            return (Criteria) this;
        }

        public Criteria andVideoViewCountIsNotNull() {
            addCriterion("video_view_count is not null");
            return (Criteria) this;
        }

        public Criteria andVideoViewCountEqualTo(Integer value) {
            addCriterion("video_view_count =", value, "videoViewCount");
            return (Criteria) this;
        }

        public Criteria andVideoViewCountNotEqualTo(Integer value) {
            addCriterion("video_view_count <>", value, "videoViewCount");
            return (Criteria) this;
        }

        public Criteria andVideoViewCountGreaterThan(Integer value) {
            addCriterion("video_view_count >", value, "videoViewCount");
            return (Criteria) this;
        }

        public Criteria andVideoViewCountGreaterThanOrEqualTo(Integer value) {
            addCriterion("video_view_count >=", value, "videoViewCount");
            return (Criteria) this;
        }

        public Criteria andVideoViewCountLessThan(Integer value) {
            addCriterion("video_view_count <", value, "videoViewCount");
            return (Criteria) this;
        }

        public Criteria andVideoViewCountLessThanOrEqualTo(Integer value) {
            addCriterion("video_view_count <=", value, "videoViewCount");
            return (Criteria) this;
        }

        public Criteria andVideoViewCountIn(List<Integer> values) {
            addCriterion("video_view_count in", values, "videoViewCount");
            return (Criteria) this;
        }

        public Criteria andVideoViewCountNotIn(List<Integer> values) {
            addCriterion("video_view_count not in", values, "videoViewCount");
            return (Criteria) this;
        }

        public Criteria andVideoViewCountBetween(Integer value1, Integer value2) {
            addCriterion("video_view_count between", value1, value2, "videoViewCount");
            return (Criteria) this;
        }

        public Criteria andVideoViewCountNotBetween(Integer value1, Integer value2) {
            addCriterion("video_view_count not between", value1, value2, "videoViewCount");
            return (Criteria) this;
        }

        public Criteria andVideoTitleIsNull() {
            addCriterion("video_title is null");
            return (Criteria) this;
        }

        public Criteria andVideoTitleIsNotNull() {
            addCriterion("video_title is not null");
            return (Criteria) this;
        }

        public Criteria andVideoTitleEqualTo(String value) {
            addCriterion("video_title =", value, "videoTitle");
            return (Criteria) this;
        }

        public Criteria andVideoTitleNotEqualTo(String value) {
            addCriterion("video_title <>", value, "videoTitle");
            return (Criteria) this;
        }

        public Criteria andVideoTitleGreaterThan(String value) {
            addCriterion("video_title >", value, "videoTitle");
            return (Criteria) this;
        }

        public Criteria andVideoTitleGreaterThanOrEqualTo(String value) {
            addCriterion("video_title >=", value, "videoTitle");
            return (Criteria) this;
        }

        public Criteria andVideoTitleLessThan(String value) {
            addCriterion("video_title <", value, "videoTitle");
            return (Criteria) this;
        }

        public Criteria andVideoTitleLessThanOrEqualTo(String value) {
            addCriterion("video_title <=", value, "videoTitle");
            return (Criteria) this;
        }

        public Criteria andVideoTitleLike(String value) {
            addCriterion("video_title like", value, "videoTitle");
            return (Criteria) this;
        }

        public Criteria andVideoTitleNotLike(String value) {
            addCriterion("video_title not like", value, "videoTitle");
            return (Criteria) this;
        }

        public Criteria andVideoTitleIn(List<String> values) {
            addCriterion("video_title in", values, "videoTitle");
            return (Criteria) this;
        }

        public Criteria andVideoTitleNotIn(List<String> values) {
            addCriterion("video_title not in", values, "videoTitle");
            return (Criteria) this;
        }

        public Criteria andVideoTitleBetween(String value1, String value2) {
            addCriterion("video_title between", value1, value2, "videoTitle");
            return (Criteria) this;
        }

        public Criteria andVideoTitleNotBetween(String value1, String value2) {
            addCriterion("video_title not between", value1, value2, "videoTitle");
            return (Criteria) this;
        }

        public Criteria andVideoUptimeIsNull() {
            addCriterion("video_uptime is null");
            return (Criteria) this;
        }

        public Criteria andVideoUptimeIsNotNull() {
            addCriterion("video_uptime is not null");
            return (Criteria) this;
        }

        public Criteria andVideoUptimeEqualTo(Date value) {
            addCriterion("video_uptime =", value, "videoUptime");
            return (Criteria) this;
        }

        public Criteria andVideoUptimeNotEqualTo(Date value) {
            addCriterion("video_uptime <>", value, "videoUptime");
            return (Criteria) this;
        }

        public Criteria andVideoUptimeGreaterThan(Date value) {
            addCriterion("video_uptime >", value, "videoUptime");
            return (Criteria) this;
        }

        public Criteria andVideoUptimeGreaterThanOrEqualTo(Date value) {
            addCriterion("video_uptime >=", value, "videoUptime");
            return (Criteria) this;
        }

        public Criteria andVideoUptimeLessThan(Date value) {
            addCriterion("video_uptime <", value, "videoUptime");
            return (Criteria) this;
        }

        public Criteria andVideoUptimeLessThanOrEqualTo(Date value) {
            addCriterion("video_uptime <=", value, "videoUptime");
            return (Criteria) this;
        }

        public Criteria andVideoUptimeIn(List<Date> values) {
            addCriterion("video_uptime in", values, "videoUptime");
            return (Criteria) this;
        }

        public Criteria andVideoUptimeNotIn(List<Date> values) {
            addCriterion("video_uptime not in", values, "videoUptime");
            return (Criteria) this;
        }

        public Criteria andVideoUptimeBetween(Date value1, Date value2) {
            addCriterion("video_uptime between", value1, value2, "videoUptime");
            return (Criteria) this;
        }

        public Criteria andVideoUptimeNotBetween(Date value1, Date value2) {
            addCriterion("video_uptime not between", value1, value2, "videoUptime");
            return (Criteria) this;
        }

        public Criteria andVideoUserNameIsNull() {
            addCriterion("video_user_name is null");
            return (Criteria) this;
        }

        public Criteria andVideoUserNameIsNotNull() {
            addCriterion("video_user_name is not null");
            return (Criteria) this;
        }

        public Criteria andVideoUserNameEqualTo(String value) {
            addCriterion("video_user_name =", value, "videoUserName");
            return (Criteria) this;
        }

        public Criteria andVideoUserNameNotEqualTo(String value) {
            addCriterion("video_user_name <>", value, "videoUserName");
            return (Criteria) this;
        }

        public Criteria andVideoUserNameGreaterThan(String value) {
            addCriterion("video_user_name >", value, "videoUserName");
            return (Criteria) this;
        }

        public Criteria andVideoUserNameGreaterThanOrEqualTo(String value) {
            addCriterion("video_user_name >=", value, "videoUserName");
            return (Criteria) this;
        }

        public Criteria andVideoUserNameLessThan(String value) {
            addCriterion("video_user_name <", value, "videoUserName");
            return (Criteria) this;
        }

        public Criteria andVideoUserNameLessThanOrEqualTo(String value) {
            addCriterion("video_user_name <=", value, "videoUserName");
            return (Criteria) this;
        }

        public Criteria andVideoUserNameLike(String value) {
            addCriterion("video_user_name like", value, "videoUserName");
            return (Criteria) this;
        }

        public Criteria andVideoUserNameNotLike(String value) {
            addCriterion("video_user_name not like", value, "videoUserName");
            return (Criteria) this;
        }

        public Criteria andVideoUserNameIn(List<String> values) {
            addCriterion("video_user_name in", values, "videoUserName");
            return (Criteria) this;
        }

        public Criteria andVideoUserNameNotIn(List<String> values) {
            addCriterion("video_user_name not in", values, "videoUserName");
            return (Criteria) this;
        }

        public Criteria andVideoUserNameBetween(String value1, String value2) {
            addCriterion("video_user_name between", value1, value2, "videoUserName");
            return (Criteria) this;
        }

        public Criteria andVideoUserNameNotBetween(String value1, String value2) {
            addCriterion("video_user_name not between", value1, value2, "videoUserName");
            return (Criteria) this;
        }

        public Criteria andVideoUrlIsNull() {
            addCriterion("video_url is null");
            return (Criteria) this;
        }

        public Criteria andVideoUrlIsNotNull() {
            addCriterion("video_url is not null");
            return (Criteria) this;
        }

        public Criteria andVideoUrlEqualTo(String value) {
            addCriterion("video_url =", value, "videoUrl");
            return (Criteria) this;
        }

        public Criteria andVideoUrlNotEqualTo(String value) {
            addCriterion("video_url <>", value, "videoUrl");
            return (Criteria) this;
        }

        public Criteria andVideoUrlGreaterThan(String value) {
            addCriterion("video_url >", value, "videoUrl");
            return (Criteria) this;
        }

        public Criteria andVideoUrlGreaterThanOrEqualTo(String value) {
            addCriterion("video_url >=", value, "videoUrl");
            return (Criteria) this;
        }

        public Criteria andVideoUrlLessThan(String value) {
            addCriterion("video_url <", value, "videoUrl");
            return (Criteria) this;
        }

        public Criteria andVideoUrlLessThanOrEqualTo(String value) {
            addCriterion("video_url <=", value, "videoUrl");
            return (Criteria) this;
        }

        public Criteria andVideoUrlLike(String value) {
            addCriterion("video_url like", value, "videoUrl");
            return (Criteria) this;
        }

        public Criteria andVideoUrlNotLike(String value) {
            addCriterion("video_url not like", value, "videoUrl");
            return (Criteria) this;
        }

        public Criteria andVideoUrlIn(List<String> values) {
            addCriterion("video_url in", values, "videoUrl");
            return (Criteria) this;
        }

        public Criteria andVideoUrlNotIn(List<String> values) {
            addCriterion("video_url not in", values, "videoUrl");
            return (Criteria) this;
        }

        public Criteria andVideoUrlBetween(String value1, String value2) {
            addCriterion("video_url between", value1, value2, "videoUrl");
            return (Criteria) this;
        }

        public Criteria andVideoUrlNotBetween(String value1, String value2) {
            addCriterion("video_url not between", value1, value2, "videoUrl");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}