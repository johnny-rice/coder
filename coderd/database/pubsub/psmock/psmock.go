// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/coder/coder/v2/coderd/database/pubsub (interfaces: Pubsub)
//
// Generated by this command:
//
//	mockgen -destination ./psmock.go -package psmock github.com/coder/coder/v2/coderd/database/pubsub Pubsub
//

// Package psmock is a generated GoMock package.
package psmock

import (
	reflect "reflect"

	pubsub "github.com/coder/coder/v2/coderd/database/pubsub"
	gomock "go.uber.org/mock/gomock"
)

// MockPubsub is a mock of Pubsub interface.
type MockPubsub struct {
	ctrl     *gomock.Controller
	recorder *MockPubsubMockRecorder
	isgomock struct{}
}

// MockPubsubMockRecorder is the mock recorder for MockPubsub.
type MockPubsubMockRecorder struct {
	mock *MockPubsub
}

// NewMockPubsub creates a new mock instance.
func NewMockPubsub(ctrl *gomock.Controller) *MockPubsub {
	mock := &MockPubsub{ctrl: ctrl}
	mock.recorder = &MockPubsubMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockPubsub) EXPECT() *MockPubsubMockRecorder {
	return m.recorder
}

// Close mocks base method.
func (m *MockPubsub) Close() error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Close")
	ret0, _ := ret[0].(error)
	return ret0
}

// Close indicates an expected call of Close.
func (mr *MockPubsubMockRecorder) Close() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Close", reflect.TypeOf((*MockPubsub)(nil).Close))
}

// Publish mocks base method.
func (m *MockPubsub) Publish(event string, message []byte) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Publish", event, message)
	ret0, _ := ret[0].(error)
	return ret0
}

// Publish indicates an expected call of Publish.
func (mr *MockPubsubMockRecorder) Publish(event, message any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Publish", reflect.TypeOf((*MockPubsub)(nil).Publish), event, message)
}

// Subscribe mocks base method.
func (m *MockPubsub) Subscribe(event string, listener pubsub.Listener) (func(), error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Subscribe", event, listener)
	ret0, _ := ret[0].(func())
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Subscribe indicates an expected call of Subscribe.
func (mr *MockPubsubMockRecorder) Subscribe(event, listener any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Subscribe", reflect.TypeOf((*MockPubsub)(nil).Subscribe), event, listener)
}

// SubscribeWithErr mocks base method.
func (m *MockPubsub) SubscribeWithErr(event string, listener pubsub.ListenerWithErr) (func(), error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "SubscribeWithErr", event, listener)
	ret0, _ := ret[0].(func())
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// SubscribeWithErr indicates an expected call of SubscribeWithErr.
func (mr *MockPubsubMockRecorder) SubscribeWithErr(event, listener any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SubscribeWithErr", reflect.TypeOf((*MockPubsub)(nil).SubscribeWithErr), event, listener)
}
